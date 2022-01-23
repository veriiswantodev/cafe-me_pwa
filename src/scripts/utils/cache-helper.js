/* eslint-disable no-underscore-dangle */
import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    // eslint-disable-next-line no-underscore-dangle
    const cache = await this._openCache();
    cache.addAll(requests);
  },
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      return response;
    }
    // eslint-disable-next-line no-underscore-dangle
    return this._fetchRequest(request);
  },

  // eslint-disable-next-line no-underscore-dangle
  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  // eslint-disable-next-line no-underscore-dangle
  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(request);
    return response;
  },

  async _addCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  },
};

export default CacheHelper;

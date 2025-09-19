const cacheService = require('./cacheService');
const Crowd = require('../models/Crowd.js');
// Add other models if needed for syncing favorites, hotels etc.

module.exports = {
  syncCrowdDataWithDB: async () => {
    const crowdData = cacheService.getCrowdData();
    if (crowdData.length === 0) return;

    try {
      for (const crowd of crowdData) {
        const newCrowd = new Crowd(crowd);
        await newCrowd.save();
      }
      cacheService.clearCrowdData();
      console.log('Crowd data synced successfully.');
    } catch (err) {
      console.error('Error syncing crowd data:', err);
    }
  },

  // Add other sync methods if applicable
};

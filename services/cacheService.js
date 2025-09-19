// services/cacheService.js

// Simple in-memory cache for demo
const cache = {
  bookings: [],
  favorites: [],
  crowdData: []
};

module.exports = {
  saveBooking: (booking) => {
    cache.bookings.push(booking);
  },
  getBookings: () => {
    return cache.bookings;
  },
  clearBookings: () => {
    cache.bookings = [];
  },

  saveFavorite: (favorite) => {
    cache.favorites.push(favorite);
  },
  getFavorites: () => {
    return cache.favorites;
  },
  clearFavorites: () => {
    cache.favorites = [];
  },

  saveCrowdData: (crowd) => {
    cache.crowdData.push(crowd);
  },
  getCrowdData: () => {
    return cache.crowdData;
  },
  clearCrowdData: () => {
    cache.crowdData = [];
  }
};

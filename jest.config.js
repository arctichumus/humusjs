module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
    'typeface-roboto': '<rootDir>/src/mocks/roboto.mock.js',
  },
};

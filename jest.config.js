module.exports = {
  "verbose": true,
  "transform": {
    ".+\.js$": "babel-jest"
  }, 
  "roots": ["./"],
  "projects": ["./"],
  "testMatch": ["**/__tests__/**.jest.js"]
}

module.exports = {
  setupFilesAfterEnv: ['./src/setupTests'],
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test-utils/mockStub.js',
  },
  collectCoverageFrom: [
    './src/components/**/*.{js,jsx}',
    './src/pages/**/*.{js,jsx}',
    './src/commons/**/*.{js,jsx}',
    './src/assets/**/*.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    transformIgnorePatterns: [
      "node_modules/(?!@mantine/core|@mantine/hooks)"
    ],
  };
  
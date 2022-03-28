// /** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  // webpack5: true,
  // webpack: (config) => {
  //   config.resolve.fallback = {
  //     fs: false,
  //     process: require.resolve("process/browser"),
  //     path: false,
  //   };

  //   return config;
  // },
};
// const nextConfig = {
//   reactStrictMode: true,
//   i18n,
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Important: return the modified config
//     config = {
//       fs: "empty",
//     };
//     return config;
//   },
// };

// module.exports = nextConfig;
// module.exports = (phase, { defaultConfig }) => {
//   return {
//     ...defaultConfig,

//     webpack: (config) => {
//       config.resolve = {
//         ...config.resolve,
//         fallback: {
//           fs: false,
//           path: false,
//           os: false,
//         },
//       };
//       return config;
//     },
//   };
// };

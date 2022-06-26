const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/",
    sw: "sw.js",
  },
  serverRuntimeConfig: {
    port: process.env.FRONT_PORT,
  },
  publicRuntimeConfig: {
    nodeEnv: process.env.NODE_ENV,
    backendUrl: process.env.BACK_URL,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
  },
});

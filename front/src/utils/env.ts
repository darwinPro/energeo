// We can't use getConfig before next(...) is ran in the custom server.
import getConfig from "next/config";


const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export const port = parseInt(serverRuntimeConfig.port || "3000", 10);
export const nodeEnv = publicRuntimeConfig.nodeEnv;
export const dev = nodeEnv !== "production";
export const backendUrl = publicRuntimeConfig.backendUrl;
export const googleClientId = publicRuntimeConfig.googleClientId;

const env = process.env;

export const port = parseInt(env.FRONT_PORT || "3000", 10);
export const nodeEnv = env.NODE_ENV;
export const dev = nodeEnv !== "production";
export const backendUrl = env.NEXT_PUBLIC_BACKEND_URL;
export const googleClientId = env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

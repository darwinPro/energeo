const env = process.env;

export const port = env.BACK_PORT || 3000;
export const databaseUrl = env.DATABASE_URL;
export const secretKey = env.SECRET_KEY;
export const awsRegion = env.AWS_REGION;
export const awsBucket = env.AWS_BUCKET;
export const googleClientId = env.GOOGLE_CLIENT_ID;

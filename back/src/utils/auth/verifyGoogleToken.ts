import { OAuth2Client } from "google-auth-library";
import { googleClientId } from "../env";

const clientId = googleClientId;

const client = new OAuth2Client(clientId);

export default async (
  token: string
): Promise<{
  googleId: string;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
}> => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: clientId,
  });
  const payload = ticket.getPayload();
  const userid = payload["sub"];

  return {
    googleId: userid,
    email: payload.email,
    firstName: payload.given_name,
    lastName: payload.family_name,
    imageUrl: payload.picture,
  };
};

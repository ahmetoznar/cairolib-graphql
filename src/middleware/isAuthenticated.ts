import jwt from "jsonwebtoken";

const APP_SECRET = process.env.SECRET_KEY_JWT;

export const isUserAuthenticated = async ({ context }, next) => {
  const authorization = context.req.headers["authorization"];
  try {
    const token = authorization?.replace("Bearer ", "")!;
    const user = jwt.verify(token, APP_SECRET!) as any;
    context.req.user = user.user_address;
    context.req.token = token;
    return next();
  } catch (err: any) {
    context.req.user = undefined;
    context.req.token = undefined;
    throw new Error(err.message);
  }
};

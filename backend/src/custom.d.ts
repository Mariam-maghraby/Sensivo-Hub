// import { User } from "./models/User";

declare namespace Express {
  // Can't import at top of file!! See: https://stackoverflow.com/a/51114250/530309
  type User = import("./models/User").User;

  export interface Request {
    user?: User; // added by: [auth.middleware]
  }
}

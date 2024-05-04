import { chain } from "./middlewares/chain";
import { authMiddleware } from "./middlewares/authMiddleware";

export default chain([authMiddleware])

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};



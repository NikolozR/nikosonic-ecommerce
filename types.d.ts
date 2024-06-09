type childrenProps<P = unknown> = P & {
  children: React.ReactNode;
};
type ButtonProps = {
  type: "button" | "submit" | "reset";
  fontSize: string;
  padding: string; // Tailwind Selector
  leading?: string;
  className?: string;
};
type InputProps = {
  name: string;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeHolder?: string;
  defaultValue?: string;
  disabled?: boolean;
  additionalInfo?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  type?: "text" | "file";
};
type paramsLang = {
  params: { locale: string };
};
type handleVoid = {
  handle: () => void;
};
type headerProps = {
  dic?: dictionary;
  locale: string;
};
interface;
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
interface Blog {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}
type NavbarDict = {
  home: string;
  profile: string;
  blogs: string;
  contacts: string;
};
type dictionary = {
  navbar: NavbarDict;
};
type CustomMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse
) => NextMiddlewareResult | Promise<NextMiddlewareResult>;
type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;
// type CreateUser = {
//   role: string[],
//   nickname: string,
//   name: string,
//   picture: string,
//   updated_at: string,
//   email: string,
//   email_verified: boolean,
//   sub: string,
//   sid: string,
//   given_name?: string,
//   family_name?: string,
// } | undefined;
type User = {
  id: number;
  name: string;
  email: string;
  sub: string;
  avatarurl: string;
  surname: string;
  displayname: string;
};
type UpdateUser = {
  sub: string;
  name: string;
  surname: string;
  displayname: string;
};
type LogInUser = {
  email: string;
  password: string;
};

type AdminFormUser = {
  id?: number;
  name?: string;
  email?: string;
  role?: string;
  age?: number;
  type: "add" | "edit";
  handleSubmit: (formData: FormData) => Promise<void>;
};
interface ModalContextValue {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

type ProductQuantityMap = {
  [productid: number]: number;
};
interface CartItem {
  id: number;
  userid: number;
  productid: number;
  quantity: number;
  createdat: string;
}

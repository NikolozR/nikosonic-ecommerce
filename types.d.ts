type childrenProps<P = unknown> = P & {
  children: React.ReactNode;
};
type keyValuyPair = {
  [key: string]: any;
}
type ButtonProps = {
  type: "button" | "submit" | "reset";
  fontSize: string;
  padding: string; // Tailwind Selector
  leading?: string;
  className?: string;
  disabled?: boolean;
  handleClick?: () => void;
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
  type?: "text" | "file" | 'number';
  required?: boolean;
  multiple?: boolean;
};
type FileUploadProps = {
  selectedFile?: File | null;
  selectedFiles?: FileList | null;
  multiple?: boolean;
  fileWrongSize?: boolean;
  ref: RefObject<HTMLInputElement>;
  handleFileChange: () => void
}
interface CreateProduct extends keyValuyPair {
  name: string;
  brand: string;
  color: string;
  price: number;
  thumbnail_url: string;
  gallery_urls: string[];
  description: string;
  category: 'headband' | 'earbud' |  'earphone'
}
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
interface Product {
  product_id: number;
  name: string;
  brand: string;
  color: string;
  price: number;
  avarage_rating: number;
  thumbnail_url: string;
  gallery_urls: string;
  description: string;
  created_at: string;
  views: number;
  review_count: number;
  category: 'headband' | 'earbud' |  'earphone'
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

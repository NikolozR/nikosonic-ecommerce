type childrenProps<P = unknown> = P & {
  children: React.ReactNode;
};
type keyValuyPair = {
  [key: string]: any;
};
type ButtonProps = {
  type: "button" | "submit" | "reset";
  fontSize: string;
  padding: string; // Tailwind Selector
  leading?: string;
  className?: string;
  title?: string;
  disabled?: boolean;
  handleClick?: () => void;
  stopPropagation?: boolean;
};
type ReviewsProps = {
  user: User;
  product: Product;
  reviews: Review[];
  addOptimisticProduct: (action: Product) => void;
}
type ReviewFormProps = {
  user: User;
  product: Product;
  addOptimisticReview: (action: Review) => void;
  addOptimisticProduct: (action: Product) => void;
  showStars?: boolean;
}
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
  type?: "text" | "file" | "number";
  required?: boolean;
  multiple?: boolean;
};
type FileUploadProps = {
  selectedFile?: File | null;
  selectedFiles?: FileList | null;
  multiple?: boolean;
  fileWrongSize?: boolean;
  placeholder?: string;
  ref: RefObject<HTMLInputElement>;
  handleFileChange: () => void;
};
interface CreateProduct extends keyValuyPair {
  name: string;
  brand: string;
  color: string;
  price: number;
  thumbnail_url: string;
  gallery_urls: string[];
  description: string;
  category: "headband" | "earbud" | "earphone";
}
interface CartItem extends Product {
  user_id: number;
  quantity: number;
  id: number;
  created_at: string;
  updated_at: string;
}
type CartItemProps = {
  cartItem: CartItem;
  addOptimisticCartItems: (action: {
    type: string;
    payload?: CartItem | undefined;
  }) => void;
};
type StripeProduct = {
  id: string;
  active: boolean;
  default_price: string;
  name: string;
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
interface Product {
  product_id: number;
  name: string;
  brand: string;
  color: string;
  stock: number;
  price: number;
  average_rating: number;
  thumbnail_url: string;
  gallery_urls: string[];
  description: string;
  created_at: string;
  views: number;
  review_count: number;
  category: "headband" | "earbud" | "earphone";
}
interface Review {
  review_id: number;
  user_id: number;
  product_id: number;
  rating: number;
  comment: string;
  created_at: string;
  updated_at: string;
  id: number;
  name: string;
  email: string;
  sub: string;
  avatarurl: string;
  surname: string;
  displayname: string;
}
interface CreateBlog extends keyValuyPair {
  title: string;
  author_id: number;
  content: string;
  thumbnail_url: string;
}
interface Blog extends User {
  blog_id: number;
  title: string;
  author_id: number;
  content: string;
  thumbnail_url: string;
  created_at: string;
}
interface CreateReview {
  userId: number;
  productId: number;
  rating: number;
  comment: string;
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

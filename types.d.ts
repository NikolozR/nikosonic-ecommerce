type childrenProps<P = unknown> = P & {
  children: React.ReactNode;
};
type keyValuePair = {
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
};
type ReviewFormProps = {
  user: User;
  product: Product;
  addOptimisticReview: (action: Review) => void;
  addOptimisticProduct: (action: Product) => void;
  showStars?: boolean;
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
interface CreateProduct extends keyValuePair {
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
  quantity?: number;
};
type StripeCheckoutListItem = {
  id: string;
  amount_total: number;
  description: string;
  quantity: number;
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
interface UpdateBlog extends keyValuePair {
  blog_id: number;
  title: string;
  content: string;
  thumbnail_url: string;
}
interface CreateBlog extends keyValuePair {
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
type AddressType = "shipping" | "billing";

interface MyAddress {
  address_id: number;
  user_id: number;
  type: AddressType;
  phone: string;
  address: string;
  city: string;
  address_name: string;
  country: string;
}
type AddressInput = {
  street: string;
  country: string;
  city: string;
};

interface CreateAddress extends keyValuePair {
  type: "billing" | "shipping";
  userId: number;
  phone: string;
  addressName: string;
  address: string;
  city: string;
  country: string;
}

interface OrderItem {
  order_id: number;
  user_id: number;
  order_created_at: string;
  total_price: number;
  order_status: string;
  order_updated_at: string;
  order_item_id: number;
  product_id: number;
  order_item_quantity: number;
  name: string;
  price: string;
  description: string;
  thumbnail_url: string;
  shipping_address: string;
  billing_address: string;
  brand: string;
}

interface TransformedOrder {
  order_id: number;
  user_id: number;
  date: string;
  total_price: number;
  order_status: string;
  order_created_at: string;
  shipping_address: string;
  billing_address: string;
  total_amount: number;
  items: OrderItem[];
}
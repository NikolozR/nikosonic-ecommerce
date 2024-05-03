type childrenProps = {
  children: React.ReactNode;
  handle?: () => void;
  params?: Params;
};
type headerProps = {
  dic?: dictionary,
  locale: string
};
type loginFormProps = {
  handleLogin: (email: string, password: string) => Promise<void>;
};
type searchProps = {
  handleSort: () => void;
  val: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
};
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
}
type dictionary = {
  navbar: NavbarDict
};

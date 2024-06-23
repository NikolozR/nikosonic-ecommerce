import { FaFacebook, FaStar } from "react-icons/fa";
import AddToCartButton from "../shared/AddToCartButton";
import AuthorizeModal from "../shared/AuthorizeModal";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { RiTwitterXLine } from "react-icons/ri";

function SideDetails({ product, user }: { product: Product; user: User }) {
  return (
    <div className="flex flex-col gap-[32px] w-fit">
      <div className="flex gap-[10px]">
        <div className="flex">
          {[...Array(5)].map((_, index) => {
            return (
              <FaStar
                key={index}
                color={index < product.average_rating ? "#FFAB00A3" : "gray"}
              />
            );
          })}
        </div>
        <span className="text-[0.75rem] leading-[20px] text-[#141718]">
          {product.review_count} reviews
        </span>
      </div>
      <h4 className="font-poppins font-extrabold text-[1.5rem] leading-[40px]">
        {product.brand} {product.name}
      </h4>
      <p className="text-[#6C7275] w-[50ch] max-w-full text-[1rem] leading-[26px]">
        {product.description}
      </p>
      <h6 className="font-poppins font-medium text-[1.75rem]">
        ${product.price}
      </h6>
      <div className="w-fit">
        <h3 className="text-[#141718] font-bold text-[1.2rem] py-[16px]">
          Charachteristics
        </h3>
        <div className="grid grid-cols-2 gap-x-[50px] gap-y-[20px]">
          <span className="flex items-center gap-[10px] font-bold">
            <span className="text-[#6C7275] text-[1.1rem] font-normal">
              Category:
            </span>
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </span>
          <span className="flex items-center gap-[10px] font-bold">
            <span className="text-[#6C7275] text-[1.1rem] font-normal">
              Brand:
            </span>
            {product.brand}
          </span>
          <span className="flex items-center gap-[10px] font-bold">
            <span className="text-[#6C7275] text-[1.1rem] font-normal">
              Color:
            </span>
            {product.color}
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-[25px] items-center">
        {user ? (
          <AddToCartButton user={user} product={product} onHover={false} />
        ) : (
          <AuthorizeModal onHover={false} />
        )}
        <div className="flex gap-[10px]">
          <FacebookShareButton
            url={
              "https://tbc-academy-delta.vercel.app/products/" +
              product.product_id
            }
            title={product.brand + " " + product.name}
          >
            <FaFacebook size={40} color="#0866FF" />
          </FacebookShareButton>
          <TwitterShareButton
            url={
              "https://tbc-academy-delta.vercel.app/products/" +
              product.product_id
            }
            title={product.brand + " " + product.name}
          >
            <RiTwitterXLine size={40} />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
}

export default SideDetails;

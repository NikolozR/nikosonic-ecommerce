import { FaStar } from "react-icons/fa";

function SideDetails({ product }: { product: Product }) {
  return (
    <div className="flex flex-1 flex-col gap-[32px]">
      <div className="flex gap-[10px]">
        <div className="flex">
          {[...Array(5)].map((_, index) => {
            return <FaStar
            key={index}
            color={index < product.average_rating ? "#FFAB00A3" : "gray"}
          />
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
      <div>
        <h3 className="text-[#141718] font-bold text-[1.2rem] py-[16px]">Charachteristics</h3>
        <div className="grid grid-cols-2 gap-[20px]">
          <span className="flex items-center gap-[10px] font-bold">
            <span className="text-[#6C7275] text-[1.1rem] font-normal">Category:</span>
            {product.category}
          </span>
          <span className="flex items-center gap-[10px] font-bold">
            <span className="text-[#6C7275] text-[1.1rem] font-normal">Brand:</span>
            {product.brand}
          </span>
          <span className="flex items-center gap-[10px] font-bold">
            <span className="text-[#6C7275] text-[1.1rem] font-normal">Color:</span>
            {product.color}
          </span>
          <span className="flex items-center gap-[10px] font-bold">
            <span className="text-[#6C7275] text-[1.1rem] font-normal">Stock:</span>
            {product.stock}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideDetails;

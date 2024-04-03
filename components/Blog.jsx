import Button from "./Button"
import Image from "next/image"

function Blog({title, description, image, date}) {
  return (
    <div className="min-w-[400px] my-[20px] mx-auto bg-gray-50 rounded-[5px] overflow-hidden shadow-custom">
    <Image src={image} width={400} height={200} className="w-full h-auto rounded-tl-[5px] rounded-tr-[5px]" alt={title} />
    <div className="p-[20px]">
        <h2 className="text-[20px] font-bold m-0 mb-[10px]">{title}</h2>
        <p className="m-0 mb-[15px]">{description}</p>
        <p className="text-gray-500 m-0 mb-[10px] text-[14px]">{date}</p>
        <Button>Read More</Button>
    </div>
</div>
  )
}

export default Blog
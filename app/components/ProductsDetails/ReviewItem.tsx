import Image from "next/image";
import { FaStar } from "react-icons/fa";

function ReviewItem({ review }: { review: Review }) {
    return (
      <div className="border-solid border-b-[1px] mb-[24px] border-[#E8ECEF]">
        <div>
          <div className="flex gap-[40px]">
            <Image
              src={review?.avatarurl ?? ""}
              alt="User Avatar"
              width={72}
              height={72}
              className="object-cover rounded-[50%]"
            />
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[#141718] font-bold text-[1.25rem] leading-[32px]">
                {review?.displayname}
              </h3>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    color={index < review.rating ? "#FFAB00A3" : "gray"}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-[#353945] leading-[26px] text-[1rem] pl-[112px] pt-[4px]">
            {review.comment}
          </p>
          <div className="py-[24px]">votes</div>
        </div>
      </div>
    );
}

export default ReviewItem;

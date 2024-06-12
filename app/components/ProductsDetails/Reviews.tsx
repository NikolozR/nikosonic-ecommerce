"use client";
import { useOptimistic, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import Button from "../shared/Button";
import { createReview } from "../../api/api";

function Reviews({
  reviews,
  userId,
  productId,
}: {
  userId: number;
  productId: number;
  reviews: Review[];
}) {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [comment, setComment] = useState("");
  const [optimisticReviews, addOptimisticReview] = useOptimistic(
    reviews,
    (state: Review[], newReview: Review) => {
      return [newReview, ...state];
    }
  );

  return (
    <div className="pt-[40px]">
      <div className="pb-[42px]">
        <h2 className="text-[#121212] font-medium text-[1.125rem]">Reviews</h2>
      </div>
      <div>
        <h3 className="font-poppins font-medium text-[#23262F] text-[1.725rem] leading-[34px]">
          Customer Reviews
        </h3>
        <div className="flex gap-[10px]">
          <div className="flex">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <FaStar
                  key={index}
                  color={
                    ratingValue <= (hoveredRating || selectedRating)
                      ? "#FFAB00A3"
                      : "gray"
                  }
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredRating(ratingValue)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setSelectedRating(ratingValue)}
                />
              );
            })}
          </div>
          <span>{optimisticReviews.length} reviews</span>
        </div>
        <div>
          <label htmlFor="comment" className="w-full relative h-fit">
            <input
              type="text"
              className="w-full border-[2px] py-[24px] pl-[16px]  caret-[#909090] border-solid border-[#E8ECEF] rounded-[16px] text-[1rem] placeholder:text-[#353945] placeholder:font-medium font-bold outline-none"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write Review Here..."
            />
            <Button
              type="button"
              fontSize="1rem"
              padding="py-[6px] px-[40px]"
              className={
                "rounded-[80px] flex absolute right-[16px] top-[50%] gap-[5px] translate-y-[-50%] text-white font-medium leading-[28px] " +
                (selectedRating === 0 ? "opacity-35 cursor-default " : "") +
                (comment === "" ? "opacity-35 cursor-default" : "")
              }
              title={
                selectedRating === 0
                  ? "Please Choose Rating Before Submission"
                  : ""
              }
              disabled={selectedRating === 0 || comment === ""}
              handleClick={async () => {
                addOptimisticReview({
                  review_id: Math.random(),
                  rating: selectedRating,
                  comment: comment,
                  user_id: Number(userId),
                  product_id: productId,
                  created_at: new Date().toString(),
                  updated_at: new Date().toString(),
                });
                setComment("");
                setSelectedRating(0);
                await createReview({
                  rating: selectedRating,
                  comment: comment,
                  userId: userId,
                  productId: productId,
                });
              }}
            >
              Submit Review
              <MdRateReview size={25} color="white"></MdRateReview>
            </Button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

"use client";
import { useEffect, useOptimistic, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import Button from "../shared/Button";
import { createReview } from "../../api/api";
import ReviewItem from "./ReviewItem";

function Reviews({
  reviews,
  user,
  productId,
}: {
  user: User;
  productId: number;
  reviews: Review[];
}) {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [comment, setComment] = useState("");
  const [currentRating, setCurrentRating] = useState<number>(0);
  const [hasRated, setHasRated] = useState(false);
  const [optimisticReviews, addOptimisticReview] = useOptimistic(
    reviews,
    (state: Review[], newReview: Review) => {
      return [newReview, ...state];
    }
  );
  useEffect(() => {
    const indexOfReview = optimisticReviews.findIndex(
      (el) => el.user_id === user.id
    );
    if (indexOfReview !== -1) {
      setHasRated(true);
      setCurrentRating(optimisticReviews[indexOfReview].rating);
    }
  }, [optimisticReviews, user]);
  return (
    <div className="pt-[40px]">
      <div className="pb-[42px]">
        <h2 className="text-[#121212] font-medium text-[1.125rem]">Reviews</h2>
      </div>
      <div>
        <h3 className="font-poppins font-medium text-[#23262F] text-[1.725rem] mb-[24px] leading-[34px]">
          Customer Reviews
        </h3>
        <div className="flex gap-[10px] mb-[20px]">
          <div className="flex">
            {hasRated
              ? [...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <FaStar
                      key={index}
                      color={
                        ratingValue <= currentRating ? "#FFAB00A3" : "gray"
                      }
                    />
                  );
                })
              : [...Array(5)].map((_, index) => {
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
        <div className="flex flex-col gap-[40px] mb-[40px]">
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
                  user_id: user.id,
                  product_id: productId,
                  created_at: new Date().toString(),
                  updated_at: new Date().toString(),
                  id: user.id,
                  name: user.name,
                  avatarurl: user.avatarurl,
                  surname: user.surname,
                  email: user.email,
                  sub: user.sub,
                  displayname: user.displayname
                });
                setComment("");
                setSelectedRating(0);
                await createReview({
                  rating: selectedRating,
                  comment: comment,
                  userId: user.id,
                  productId: productId,
                });
              }}
            >
              Submit Review
              <MdRateReview size={25} color="white"></MdRateReview>
            </Button>
          </label>
          <div>
            <h6 className="font-poppins font-medium text-[1.725rem] leading-[34px] mb-[40px]">
              {optimisticReviews.length} Reviews
            </h6>
            <div>
              {optimisticReviews.map((review, i) => {
                return (
                  <ReviewItem key={i} review={review} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

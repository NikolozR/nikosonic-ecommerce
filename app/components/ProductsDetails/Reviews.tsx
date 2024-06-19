"use client";
import { useEffect, useOptimistic, useState } from "react";
import StarRating from "./StarRating";
import Button from "../shared/Button";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";

function Reviews({ reviews, user, product, addOptimisticProduct }: ReviewsProps) {
  const [currentRating, setCurrentRating] = useState<number>(0);
  const [hasRated, setHasRated] = useState(false);
  const [optimisticReviews, addOptimisticReview] = useOptimistic(
    reviews,
    (state: Review[], newReview: Review) => [newReview, ...state]
  );

  useEffect(() => {
    if (user) {
      const userReview = optimisticReviews.find((el) => el.user_id === user.id);
      if (userReview) {
        setHasRated(true);
        setCurrentRating(userReview.rating);
      }
    }
  }, [optimisticReviews, user]);

  return (
    <div className="pt-[40px]">
      <div className="pb-[42px]">
        <h2 className="text-[#121212] font-medium text-[1.125rem]">
          Reviews ({optimisticReviews.length})
        </h2>
      </div>
      <div>
        <h3 className="font-poppins font-medium text-[#23262F] text-[1.725rem] mb-[24px] leading-[34px]">
          Customer Reviews
        </h3>
        {user && hasRated && (
          <div className="flex gap-[10px] mb-[20px]">
            <span>You have submitted a review with</span>
            <StarRating rating={currentRating} clickable={false} />
            stars
          </div>
        )}
        <div className="flex flex-col gap-[40px] mb-[40px]">
          {user ? (
            !hasRated ? (
              <ReviewForm
                user={user}
                product={product}
                addOptimisticReview={addOptimisticReview}
                addOptimisticProduct={addOptimisticProduct}
                showStars={true}
              />
            ) : null
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="mb-4">You need to log in or sign up to leave a review.</p>
              <div className="flex gap-[30px]">
                <Button type="button" fontSize="1rem" padding="px-[30px] py-[8px]">
                  <a href="/api/auth/login">Log In</a>
                </Button>
                <Button type="button" fontSize="1rem" padding="px-[30px] py-[8px]">
                  <a href="/api/auth/signup">Sign Up</a>
                </Button>
              </div>
            </div>
          )}
          <div>
            <h6 className="font-poppins font-medium text-[1.725rem] leading-[34px] mb-[40px]">
              {optimisticReviews.length} Reviews
            </h6>
            <div>
              {optimisticReviews.map((review, i) => (
                <ReviewItem key={i} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

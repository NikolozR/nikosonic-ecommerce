import { FormEvent, useState } from "react";
import { MdRateReview } from "react-icons/md";
import Button from "../shared/Button";
import StarRating from "./StarRating";
import { createReview } from "../../api/api";

const createNewReview = (user: User, product: Product, rating: number, comment: string) => {
  return {
    review_id: Math.random(),
    rating,
    comment,
    user_id: user.id,
    product_id: product.product_id,
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
    id: user.id,
    name: user.name,
    avatarurl: user.avatarurl,
    surname: user.surname,
    email: user.email,
    sub: user.sub,
    displayname: user.displayname,
  };
};

const ReviewForm = ({
  user,
  product,
  addOptimisticReview,
  addOptimisticProduct,
  showStars = true,
}: ReviewFormProps) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmitReview = async (event: FormEvent) => {
    event.preventDefault();

    const newReview = createNewReview(user, product, selectedRating, comment);

    addOptimisticReview(newReview);

    const newReviewCount = product.review_count + 1;
    const newAverageRating =
      (product.average_rating * product.review_count + selectedRating) /
      newReviewCount;

    addOptimisticProduct({
      ...product,
      review_count: newReviewCount,
      average_rating: newAverageRating,
    });

    setComment("");
    setSelectedRating(0);

    await createReview({
      rating: selectedRating,
      comment: comment,
      userId: user.id,
      productId: product.product_id,
    });
  };

  return (
    <form onSubmit={handleSubmitReview} className="w-full flex flex-col gap-[24px]">
      {showStars && (
        <StarRating
          rating={hoveredRating || selectedRating}
          onMouseEnter={setHoveredRating}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={setSelectedRating}
          clickable={true}
        />
      )}
      <label htmlFor="comment" className="block font-medium text-gray-700 relative">
        <input
          type="text"
          id="comment"
          className="w-full border-[2px] py-[24px] pl-[16px] caret-[#909090] border-solid border-[#E8ECEF] rounded-[16px] text-[1rem] placeholder:text-[#353945] placeholder:font-medium font-bold outline-none"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write Review Here..."
        />
        <Button
          type="submit"
          fontSize="1rem"
          padding="py-[6px] px-[40px]"
          className={
            "absolute right-[16px] top-[50%] transform -translate-y-1/2 rounded-[80px] flex gap-[5px] text-white font-medium leading-[28px] " +
            (selectedRating === 0 ? "opacity-35 cursor-default " : "") +
            (comment === "" ? "opacity-35 cursor-default" : "")
          }
          title={selectedRating === 0 ? "Please Choose Rating Before Submission" : ""}
          disabled={selectedRating === 0 || comment === ""}
        >
          Submit Review
          <MdRateReview size={25} color="white" />
        </Button>
      </label>
    </form>
  );
};

export default ReviewForm;

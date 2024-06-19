import { FaStar } from "react-icons/fa";

const StarRating = ({
  rating,
  onMouseEnter,
  onMouseLeave,
  onClick,
  clickable = false,
}: {
  rating: number;
  onMouseEnter?: (rating: number) => void;
  onMouseLeave?: () => void;
  onClick?: (rating: number) => void;
  clickable?: boolean;
}) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            color={ratingValue <= rating ? "#FFAB00A3" : "gray"}
            className={clickable ? "cursor-pointer" : ""}
            onMouseEnter={() => clickable && onMouseEnter && onMouseEnter(ratingValue)}
            onMouseLeave={() => clickable && onMouseLeave && onMouseLeave()}
            onClick={() => clickable && onClick && onClick(ratingValue)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;

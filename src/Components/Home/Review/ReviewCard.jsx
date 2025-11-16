import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ reviewData }) => {
  const {
    userName,
    review,
    ratings,
    date,
    user_photoURL,
  } = reviewData;

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 max-w-md">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-[#9AD1D4] text-3xl mb-3" />

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed mb-4">
        {review}
      </p>

     <hr className="border-gray-300 border-dotted border-1 my-4" />


      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={user_photoURL}
          alt={userName}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="text-[#003F40] font-semibold">
            {userName}
          </h3>
          <p className="text-sm text-gray-500">
            Rated: {ratings} ★
          </p>
          <p className="text-xs text-gray-400">
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

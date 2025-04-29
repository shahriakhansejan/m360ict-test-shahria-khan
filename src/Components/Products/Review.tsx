import React from "react";
import { Rate } from "antd";
import moment from "moment";


interface ReviewItem {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface ReviewsType {
  reviews: ReviewItem[];
}

const Review: React.FC<ReviewsType> = ({ reviews }) => {
  return (
    <div className="my-6 bg-[#f1f1f1] p-5 rounded">
      <h2 className="text-2xl font-bold border-b my-4 text-sky-600">
        Reviews
      </h2>

      <div>
        <div className="my-6">
          {reviews?.map(
            (
              review: {
                rating: number;
                comment: string;
                date: string;
                reviewerName: string;
                reviewerEmail: string;
              },
              idx: number
            ) => (
              <div className="mb-12" key={idx}>
                <h2 className="text-xl font-bold">{review.reviewerName}</h2>
                <p className="text-sm text-sky-500">
                  {review.reviewerEmail}
                </p>
                <span className="flex items-center gap-5 my-1.5">
                  <Rate value={review.rating} disabled allowHalf />
                  <h6 className="text-xs">
                    {moment(review.date).format("DD MMMM YYYY")}
                  </h6>
                </span>
                <p className="mt-1">{review.comment}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;

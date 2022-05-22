import React from "react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useReviews from "./../../hooks/useReviews";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="lg:px-20 my-20">
      <h1 className="text-4xl font-bold text-primary text-center">
        What Customers say about us
      </h1>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="p-20"
        >
          {reviews.map((review) => (
            <SwiperSlide>
              <SingleReview review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;

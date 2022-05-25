import React from "react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useReviews from "./../../hooks/useReviews";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="my-20">
      <h1 className="text-4xl font-bold text-primary text-center">
        What Customers say about us
      </h1>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="p-20"
        >
          {reviews.map((review) => (
            <SwiperSlide>
              <SingleReview review={review} key={review._id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;

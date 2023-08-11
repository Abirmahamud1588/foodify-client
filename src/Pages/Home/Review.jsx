import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Sectiontitle from "../../Componetnts/Sectiontitle";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://newrestaurant-ten.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <Sectiontitle
        subheading={" What Our Clients Say ? "}
        heading={"Testimonial"}
      ></Sectiontitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-6"
      >
        {review.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center gap-4 m-10 p-10 bg-slate-900">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="text-center my-6 text-white">{review.details}</p>
              <h1 className="text-3xl font-bold text-orange-600">
                {review.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;

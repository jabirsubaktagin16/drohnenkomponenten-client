import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://limitless-woodland-47150.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reverse()));
  }, []);

  return [reviews, setReviews];
};

export default useReviews;

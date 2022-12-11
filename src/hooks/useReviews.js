import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://drohnenkomponenten-server.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reverse()));
  }, []);

  return [reviews, setReviews];
};

export default useReviews;

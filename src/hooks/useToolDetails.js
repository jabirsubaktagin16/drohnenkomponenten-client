import { useEffect, useState } from "react";

const useToolDetails = (id) => {
  const [tool, setTool] = useState({});
  useEffect(() => {
    const url = `https://limitless-woodland-47150.herokuapp.com/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [id]);
  return [tool, setTool];
};

export default useToolDetails;

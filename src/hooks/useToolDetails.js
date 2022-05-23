import { useEffect, useState } from "react";

const useToolDetails = (id) => {
  const [tool, setTool] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/tools/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [id]);
  return [tool, setTool];
};

export default useToolDetails;

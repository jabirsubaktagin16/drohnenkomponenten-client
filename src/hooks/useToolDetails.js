import { useEffect, useState } from "react";

const useToolDetails = (id) => {
  const [tool, setTool] = useState({});
  useEffect(() => {
    const url = `https://drohnenkomponenten-server.onrender.com/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [id]);
  return [tool, setTool];
};

export default useToolDetails;

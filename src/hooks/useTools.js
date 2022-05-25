import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://limitless-woodland-47150.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data.reverse()));
  }, []);

  return [tools, setTools];
};

export default useTools;

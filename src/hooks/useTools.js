import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://drohnenkomponenten-server.onrender.com/tools")
      .then((res) => res.json())
      .then((data) => {
        setTools(data.reverse());
        setIsLoading(false);
      });
  }, []);

  return [tools, isLoading];
};

export default useTools;

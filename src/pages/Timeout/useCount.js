import {useEffect, useState} from "react";

const useCount = (initVal = 0) => {
  const [count, setCount] = useState(initVal);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return count;
};

export default useCount;
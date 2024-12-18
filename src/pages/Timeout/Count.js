import {useEffect, useState} from "react";
import useCount from "./useCount";

const Count = () => {
  const [markArray, setMarkArray] = useState([]);

  const [count, setCount] = useState(0);
  const countTimes = useCount(0);

  // 每次 +1
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    // 清除副作用，在严格模式下不清除会每次 +2
    return () => {
      clearInterval(timer);
    }
  }, []);

  useEffect(() => {
    const task = async () => {
      let now = new Date().valueOf();

      const promise = (wait, mark) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(mark, new Date().valueOf() - now);
            setMarkArray(prev => prev.includes(mark) ? prev : prev.concat([mark]))
            resolve(mark)
          }, wait);
        })
      };
      const promiseAll = [promise(1000, 1),promise(500, 2),promise(200, 3),promise(2000, 4)];
      const res = await Promise.all(promiseAll);
      console.log(res);
    };
    task();
  }, []);
  return (
    <div>
      <div>Promise: {markArray}</div>
      <div>setInterval计数器: {count}</div>
      <div>hook计数器: {countTimes}</div>
    </div>
  )
};

export default Count;
import {useEffect, useState} from "react";

const Count = () => {
  const [markArray, setMarkArray] = useState([]);

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
    <div>--{markArray}</div>
  )
};

export default Count;
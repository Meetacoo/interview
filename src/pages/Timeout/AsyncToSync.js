import {useEffect, useState} from "react";

const AsyncToSync = () => {
  const [time, setTimes] = useState('运行次数：0');
  const fun = (func, duration, times) => {
    return async (arg) => {
      for (let i = 0; i < times; i++) {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(func(arg + (i+1)))
          }, duration)
        })
      }
    }
  }

  useEffect(() => {
    const fub = fun(setTimes, 1000, 4);
    fub('运行次数：');
  }, []);

  return <div>{time}</div>
}

export default AsyncToSync;

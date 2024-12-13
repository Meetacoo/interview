const STATUS = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  TIMEOUT: 'TIMEOUT',
};

const Timeout = () => {
  // 模拟获取数据接口
  const fetchData = (status) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(status)
      }, 2000)
    })
  }


// 实现带有超时功能的 Promise
  const executeWithTimeout = (promise, timeout) => {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error(STATUS.TIMEOUT));
      }, timeout);

      promise.then(
        (result) => {
          clearTimeout(timer);
          resolve(result);
        },
        (error) => {
          clearTimeout(timer);
          reject(error);
        }
      );
    });
  }

  const testExecuteWithTimeout = (status, timeout) => {
    executeWithTimeout(fetchData(status), timeout)
      .then((e) => {
        console.log(e)
      })
      .catch((e) => {
        console.log(e)
      });
  };

  return (
    <div>
      <button onClick={() => testExecuteWithTimeout(STATUS.SUCCESS, 5000)}>测试成功promise</button>
      <button onClick={() => testExecuteWithTimeout(STATUS.FAIL, 5000)}>测试失败promise</button>
      <button onClick={() => testExecuteWithTimeout(STATUS.TIMEOUT, 500)}>测试超时promise</button>
    </div>
  );
}

export default Timeout;

const WhiteHourse = () => {
  return (
    <div>
      <div>腾信会议，开摄像头，需要有电脑现场 code</div>
      <div>一面：</div>
      <ol>
        <li>js 的循环机制和 node.js 的循环机制有什么区别</li>
        <li>类组件和函数式组件的区别，哪个好用，为什么</li>
        <li>bind、call、apply 的区别</li>
        <li>使用过的 React Hooks</li>
        <li>useMemo 和 useCallback 的区别是什么</li>
        <li>Promise 和 async 的区别</li>
        <li>什么会造成内存泄漏？场景示例？如何解决</li>
        <li>
          一个函数，第一个参数是数组，第二个参数是最大并发数，如何处理请求，如果不考虑返回结果成功失败呢？
          <ul>
            我回答的是
            <li>Promise.all</li>
            <li>Promise.race，每个 promise 直接 finally，不再 then、catch</li>
          </ul>
        </li>
        <li>node.js 中的文件流是什么类型</li>
        <li>判断当前数据类型的方法都有哪些？都能判断出来什么类型？怎么判断是否为数组？</li>
        <li>for of、for in 和 普通的 for 循环有哪些区别</li>
        <li>
          打印顺序是什么
          <ul>
            <li>
            {/*  async function async1 () {*/}
            {/*  console.log('async1 start');*/}
            {/*  await new Promise(resolve => {*/}
            {/*  console.log('promise1')*/}
            {/*})*/}
            {/*  console.log('async1 success');*/}
            {/*  return 'async1 end'*/}
            {/*}*/}
            {/*  console.log('srcipt start')*/}
            {/*  async1().then(res => console.log(res))*/}
            {/*  console.log('srcipt end')*/}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  )
};

export default WhiteHourse;

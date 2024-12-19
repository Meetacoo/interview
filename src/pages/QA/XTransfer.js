const XTransfer = () => {
  return (
    <div>
      <div>腾信会议，开摄像头，共享屏幕，需要有电脑现场 code</div>
      <div>一面：</div>
      <ol>
        <li>类组件和函数式组件的区别，哪个好用，为什么</li>
        <li>使用过的 React Hooks</li>
        <li>手写一个每秒加1的计时器hook/页面</li>
        <li>自己写类似 alert 之类的组件时怎么往里面塞 dom 的
          <ul>
            <li>createElement</li>
            <li>appendChild</li>
          </ul>
        </li>
        <li>如何解决页面白屏</li>
        <li>如何解决页面卡顿
          <ul>
            <li>removeElement 不在视口范围内的dom</li>
          </ul>
        </li>
        <li>setState 中设置值为一个值和一个函数的区别是什么
          <ul>
            <li>设置为值，批处理，只会执行一次</li>
            <li>设置为函数，每次都能拿到上一次执行返回的结果，拿到的永远是最新的，每次都会执行</li>
          </ul>
        </li>
        <li>Taro 中插入 h5
          <ul>
            <li>web-view</li>
          </ul>
        </li>
        <li>Taro 多环境打包是怎么做到的
          <ul>
            <li>Taro.getSystemInfoSync().environment，判断当前环境，根据不同环境调用不同的API</li>
          </ul>
        </li>
      </ol>
    </div>
  )
};

export default XTransfer;

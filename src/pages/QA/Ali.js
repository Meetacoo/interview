const Ali = () => {
  return (
    <div>
      <div>一面：</div>
      <ol>
        <li>自我介绍</li>
        <li>Taro 设置 title 的方法</li>
        <li>
          navigateTo、redirectTo、reLaunch、switchTab、navigateBack区别
          <ul>
            <li>navigateTo： 保留当前页面，跳转到应用内的某个页面</li>
            <li>redirectTo： 关闭当前页面，跳转到应用内的某个页面。</li>
            <li>reLaunch： 关闭所有页面，打开到应用内的某个页面。</li>
            <li>switchTab： 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。</li>
            <li>navigateBack： 关闭当前页面，返回上一页面或多级页面。</li>
          </ul>
        </li>
        <li>
          navigateTo 可以跳转到 tab 页面吗
          <ul>不可以</ul>
        </li>
        <li>Taro 如何解决打包过大的问题
          <ul>分包</ul>
          如何分包
        </li>
        <li>Taro 打包
          <ul>
            <li>webpack</li>
          </ul>
        </li>
        <li>Taro 如何实现</li>
        <li>useState 是同步的还是异步的</li>
        <li>React-Redux 用过什么中间件</li>
        <li>React Redux和useContext 哪个好</li>
        <li>Redux 的原理</li>
        <li>Redux 通过什么实现数据和组件之间的关联
          <ul>
            <li>使用 react-redux 中的 connect 函数将 Count 组件与 Redux Store 连接起来，并实现数据共享</li>
            <li>用法：connect(props)(component)</li>
          </ul>
        </li>
        <li>React是同步的，单向数据流，使用什么来实现异步操作
          <ul>
            <li>父传子，子更新通过回调传给父</li>
          </ul>
        </li>
      </ol>
      <div>二面</div>
      <ol>
        <li>自我介绍</li>
        <li>使用过的 redux 中间件，有什么用
          <ul>redux-thunk
            <li>
              处理异步请求，将只能 dispatch 一个 Object 改为可以 dispatch 一个函数来执行异步操作
            </li>
          </ul>
        </li>
        <li>useContext 的优势和弊端是什么</li>
        <li>useContext 和 redux 只能使用一个吗</li>
        <li>什么情况下使用 useContext，什么情况下使用 redux</li>
      </ol>
    </div>
  )
};

export default Ali;
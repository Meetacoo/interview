import {Tabs} from 'antd';
import TimeoutPromise from "./TimeoutPromise";
import AsyncToSync from "./AsyncToSync";

const Timeout = () => {

  return (
    <Tabs
      tabPosition="left"
      items={[
        {label: '带有超时功能的 Promise', key: '1', children: <TimeoutPromise/>},
        {label: '异步变同步', key: '2', children: <AsyncToSync/>}
      ]}
    />
  )
}

export default Timeout;

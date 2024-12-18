import {Tabs} from "antd";
import PageLag from "./PageLag";
import WhiteScreen from "./WhiteScreen";

const PerformanceOptimization = () => {
  return (
    <Tabs
      tabPosition="left"
      items={[
        {label: '页面卡顿', key: '1', children: <PageLag />},
        {label: '页面白屏', key: '2', children: <WhiteScreen/>},
      ]}
    />
  )
};

export default PerformanceOptimization;

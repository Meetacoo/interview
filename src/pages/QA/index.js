import {Tabs} from "antd";
import Ali from "./Ali";
import XTransfer from "./XTransfer";

const QA = () => {
  return (
    <Tabs
      tabPosition="left"
      items={[
        {label: '阿里淘票票外包', key: '1', children: <Ali/>},
        {label: 'XTransfer金融组外包', key: '2', children: <XTransfer/>},
      ]}
    />
  )
};

export default QA;

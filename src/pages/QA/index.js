import {Tabs} from "antd";
import Ali from "./Ali";
import XTransfer from "./XTransfer";
import Ant from "./Ant";
import WhiteHourse from "./WhiteHourse";

const QA = () => {
  return (
    <Tabs
      tabPosition="left"
      items={[
        {label: '阿里淘票票外包', key: '1', children: <Ali/>},
        {label: 'XTransfer金融组外包', key: '2', children: <XTransfer/>},
        {label: 'Ant', key: '3', children: <Ant/>},
        {label: '北京白龙马云行', key: '4', children: <WhiteHourse/>},
      ]}
    />
  )
};

export default QA;

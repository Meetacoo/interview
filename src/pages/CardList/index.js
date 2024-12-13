import React, {useEffect, useState} from 'react';
import './index.css';

/**
 * 券卡片渲染数据
 */
interface IDirectVoucher {
  /** 标题 */
  title?: string;
  /** 副标题 */
  subTitle?: string;
}

// 卡片数据
const cardDataList: IDirectVoucher[] = [
  {
    title: '杭州市通用5元券',
    subTitle: '杭味面馆非常好吃，太好吃了，相当不错，味道鲜美，特别划算，快快抢购，聚划算',
  },
  {
    title: '杭州市10元券',
    subTitle: '兰州拉面非常好吃'
  },
];

interface ICardProps {
  data: IDirectVoucher;
}


/** 请在这里实现功能 **/
const CardReact: React.FC<ICardProps> = (props) => {
  const { data } = props;

  const [count, setCount] = useState(10);
  const [buttonTxt, setButtonTxt] = useState('10s');
  const [isClicked, setIsClicked] = useState(false);
  const [timeRun, setTimeRun] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount - 1);
      setButtonTxt(count - 1 + 's');
    }, 1000);
    if (!timeRun) {
      clearInterval(interval);
    }
    if (count === 0) {
      clearInterval(interval);
      setButtonTxt('抢购');
    }
    return () => clearInterval(interval);
  }, [count, timeRun]);

  const handleClick = () => {
    setIsClicked(true);
    setButtonTxt('抢购中...');

    // 模拟异步请求
    setTimeout(() => {
      setButtonTxt('已抢购');
    }, 1000);
  };

  return (
    <div className="card">
      <div className="card-left">
        <div className="title">{data.title}</div>
        <div className="sub-title">{data.subTitle}</div>
      </div>
      <button disabled={count || isClicked} className="button" onClick={handleClick}>{buttonTxt}</button>
      {count ? <button onClick={() => setTimeRun(prevState => !prevState)}>{timeRun ? '暂停' : '继续'}</button> : null}
    </div>
  );
};

const CardList: React.FC<{ list: IDirectVoucher[] }> = (props) => {
  return (
    <>
      {(props.list || cardDataList).map((data) => (
        <CardReact data={data} />
      ))}
    </>
  );
};
export default CardList;

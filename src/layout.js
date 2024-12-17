import {Outlet, useNavigate} from "react-router-dom";
import {ConfigProvider} from 'antd';

const Layout = ({navigation}) => {
  const navigate = useNavigate();

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#FFAA20',
          borderRadius: 2,

          // Alias Token
          colorBgContainer: '#f6ffed',
        },
      }}
    >
      <div>
        <div className="header">
          <div className="logo">
            {/*<img src={logo} />*/}
          </div>
          {
            navigation.map(({label, url}) => (
              <div
                className={`header-link ${window.location.href.includes(url) ? 'active' : ''}`}
                key={url}
                onClick={() => {
                  navigate(url);
                }}
              >
                {label}
              </div>
            ))
          }
        </div>
        <div className='layout-inner'>
          <Outlet />
        </div>
      </div>
    </ConfigProvider>
  )
};

export default Layout;

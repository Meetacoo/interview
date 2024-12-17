import {Outlet, useNavigate} from "react-router-dom";
import logo from './asset/logo.png';

const Layout = ({navigation}) => {
  const navigate = useNavigate();

  return (
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
  )
};

export default Layout;

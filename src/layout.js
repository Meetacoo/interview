import {Outlet, useNavigate} from "react-router-dom";

const Layout = ({navigation}) => {
  const navigate = useNavigate();

  console.log(window.location.href.includes('/input'))
  return (
    <div>
      <div className="header">
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

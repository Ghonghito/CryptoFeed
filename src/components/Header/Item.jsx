import React from 'react'
import { useLocation, NavLink } from 'react-router-dom';

const SidenavItem = ({ menuItem, mobile }) => {
  const location = useLocation();
  const { pathname } = location;

  const renderRoutes = menuItem.map(({ type, path, name, key }) => {
    let returnValue;
    const active = path === pathname
    if (type === 'noncollapsible') {
      returnValue = (
        <div key={key}>
          {!mobile ? (
            <NavLink exact='true' to={path}>
              <div className={`flex items-center space-x-2 cursor-pointer duration-200`}>
                <h1 className={`${active ? 'text-primary' : 'text-gray-500 dark:text-gray-400'} duration-200 hover:text-primary dark:hover:text-primary text-sm`}>{name}</h1>
              </div>
            </NavLink>
          ) : (
            <div>
              <NavLink exact='true' to={path}>
                <div className='flex items-center cursor-pointer duration-200 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-md dark:shadow-md'>
                  <h1 className={`${active ? 'text-primary font-bold' : 'text-gray-500 dark:text-gray-400'} duration-200 hover:text-primary dark:hover:text-primary text-md`}>{name}</h1>
                </div>
              </NavLink>
            </div>
          )}
        </div>
      );
    }
    return returnValue;
  });

  return renderRoutes
}

export default SidenavItem
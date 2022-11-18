import React, { Fragment } from 'react'
import Typography from 'components/Typography'
import { NavLink } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { IoIosArrowDown } from 'react-icons/io'

//ჩამოსაშლელი მენიუს კომპონენტი
const SidenavItemCollapse = ({ name, collapse, isMobile }) => {
  const renderCollapse = collapse.map(({ name, key, path, isActive }) => {
    let returnValue;
    returnValue = (
      <NavLink key={key} exact='true' to={path} className={`${isActive ? '' : 'pointer-events-none cursor-not-allowed'}`}>
        <li className='group py-2 duration-200 hover:bg-blue-800 rounded-md'>
          <Typography className='group text-sm whitespace-nowrap px-1 group-hover:text-white'>{name}</Typography>
        </li>
      </NavLink>

    )
    return returnValue
  })

  return (
    <div>
      <Menu as='div' className='text-left'>
        {isMobile ? (
          <div className='cursor-pointer duration-200 bg-zinc-100 dark:bg-zinc-800 rounded-md dark:shadow-md'>
            <Menu.Button className='w-full'>
              <div className='flex items-center justify-between gap-2'>
                <Typography className='text-sm'>{name}</Typography>
                <IoIosArrowDown className='text-sm duration-200 text-zinc-900 dark:text-gray-400' aria-hidden='true' />
              </div>
            </Menu.Button>
          </div>
        ) : (
          <Menu.Button className='w-full'>
            <div className='flex items-center justify-between gap-2'>
              <Typography className='text-sm'>{name}</Typography>
              <IoIosArrowDown className='text-sm duration-200 text-zinc-900 dark:text-gray-400' aria-hidden='true' />
            </div>
          </Menu.Button>
        )}
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          <Menu.Items className='absolute center-1 mt-2 border-[1px] dark:border-zinc-700 rounded-md shadow-lg z-50 bg-zinc-200 dark:bg-zinc-900 dark:bg-darkCard ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <ul className='px-2 w-full'>
              {renderCollapse}
            </ul>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default SidenavItemCollapse
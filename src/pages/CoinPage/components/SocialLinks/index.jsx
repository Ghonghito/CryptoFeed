import React, { Fragment } from 'react'
import Card from 'components/Cards/Card'
import { Menu, Transition } from '@headlessui/react'
import { BsTwitter, BsReddit, BsGlobe, BsTelegram, BsFacebook, BsChevronDown } from 'react-icons/bs'
import Typography from 'components/Typography'

const index = ({ data }) => {
  return (
    <div className='mt-3'>
      <div className='flex items-center gap-2'>
        {data.homepage[0] !== '' && (
          <div>
            <a href={data.homepage[0]} target='_blank' rel='noreferrer' >
              <Card className='px-3 py-1 hover:bg-gray-200 dark:hover:bg-zinc-900'>
                <div className='flex items-center gap-1'>
                  <BsGlobe className='text-blue-500' />
                  <Typography className='text-sm'>ვებ-გვერდი</Typography>
                </div>
              </Card>
            </a>
          </div>
        )}
        <Menu as='div' className='inline-block text-left'>
          <Menu.Button className='w-full px-3 py-1 rounded-md duration-200 bg-zinc-100 dark:bg-zinc-800 text-white'>
            <div className='flex items-center justify-between gap-1'>
              <div>
                <Typography className='text-sm'>სოც. ქსელები</Typography>
              </div>
              <BsChevronDown className='text-sm text-zinc-900 dark:text-zinc-300' aria-hidden='true' />
            </div>
          </Menu.Button>
          <Transition as={Fragment} enter='transition ease-out duration-100' enterFrom='transform opacity-0 scale-95' enterTo='transform opacity-100 scale-100' leave='transition ease-in duration-75' leaveFrom='transform opacity-100 scale-100' leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className='origin-top-center absolute center-1 mt-2 w-36 rounded-md shadow-lg z-50 duration-200 bg-zinc-100 dark:bg-zinc-800 ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <ul className='p-1 py-2'>
                {data.twitter_screen_name !== null && (
                  <div>
                    <a href={`https://twitter.com/${data.twitter_screen_name}`} target='_blank' rel='noreferrer' >
                      <Card className='px-3 py-1 hover:bg-gray-200 dark:hover:bg-zinc-900'>
                        <div className='flex items-center gap-1'>
                          <BsTwitter className='text-blue-500' />
                          <Typography className='text-sm'>Twitter</Typography>
                        </div>
                      </Card>
                    </a>
                  </div>
                )}
                {data.telegram_channel_identifier !== "" && (
                  <div>
                    <a href={`https://t.co/${data.telegram_channel_identifier}`} target='_blank' rel='noreferrer' >
                      <Card className='px-3 py-1 hover:bg-gray-200 dark:hover:bg-zinc-900'>
                        <div className='flex items-center gap-1'>
                          <BsTelegram className='text-blue-500' />
                          <Typography className='text-sm'>Telegram</Typography>
                        </div>
                      </Card>
                    </a>
                  </div>
                )}
                {data.subreddit_url !== null && (
                  <div>
                    <a href={data.subreddit_url} target='_blank' rel='noreferrer' >
                      <Card className='px-3 py-1 hover:bg-gray-200 dark:hover:bg-zinc-900'>
                        <div className='flex items-center gap-1'>
                          <BsReddit className='text-red-500' />
                          <Typography className='text-sm'>Reddit</Typography>
                        </div>
                      </Card>
                    </a>
                  </div>
                )}
                {data.facebook_username !== "" && (
                  <div>
                    <a href={`https://facebook.com/${data.facebook_username}`} target='_blank' rel='noreferrer' >
                      <Card className='px-3 py-1 hover:bg-gray-200 dark:hover:bg-zinc-900'>
                        <div className='flex items-center gap-1'>
                          <BsFacebook className='text-blue-500' />
                          <Typography className='text-sm'>Facebook</Typography>
                        </div>
                      </Card>
                    </a>
                  </div>
                )}
              </ul>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}

export default index
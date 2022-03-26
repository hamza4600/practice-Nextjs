import Image from 'next/image';
import React from 'react';
import {Avatar} from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import {useSession} from 'next-auth/react';

function Sidebar() {
    const {data:session} = useSession();

    // console.log(session);

    const sidebarBtn=`dark:border-t  border-gray-600 py-3 px-4 cursor-pointer opacity-75 hover:opacity-100`
    const sidebarLink=`text-[13px] font-medium   hover:underline cursor-pointer px-2.5` 

  return (<div>

    <div className='space-y-2 min-w-max max-w-lg '>

    <div className='bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden flex relative flex-col items-center text-center border border-gray-300 dark:border-none '>
        <div className='relative w-full h-14'>
            <Image src="https://rb.gy/i26zak" layout='fill' priority />
        </div>
        <Avatar
        src={session?.user?.image}
        className='!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer'
        />
        <div className='mt-5 py-4 space-x-0.5 '>
            <h4 className='hover:underline decoration-purple-700 underline-offset-1 cursor-pointer '>{session?.user?.name}</h4>
            <p className='text-black dark:text-white/75 text-sm'>{session?.user?.email}</p>
        </div>

        <div className="hidden md:inline text-left dark:text-white/75 text-sm">
          <div className="font-medium sidebarButton space-y-0.5">
            <div className="flex justify-between space-x-3">
              <h4 >Who viewed your profile</h4>
              <span className="text-blue-500">321</span>
            </div>
            <div className="flex justify-between space-x-2">
              <h4>Views of your post</h4>
              <span className="text-blue-500">1,892</span>
            </div>
            </div>

            <div className={`${sidebarBtn}`}>
             <h4 className='leading-4 text-xs'>
                 Access Sxclusive content and Insights
             </h4>
             <h4 className='dark:text-white font-medium'>
                <span className='w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1  '/>{` `}
                Try Premium for free
             </h4>

            </div>
            <div className={`${sidebarBtn} flex items-center space-x-1.5`}>
                <BookmarkOutlinedIcon className='!-m1-1'/>
                <h4 className='dark:text-white font-medium'>My Items </h4>
            </div>
          </div>
    </div>

    <div className='hidden md:flex bg-white dark:bg-[#1D2226] text-black/70  dark:text-white/70 rounded-lg overflow-hidden flex-col space-y-2 pt-2.5  sticky top-20 border border-gray-300 dark:border-none'   >
        <p className={`${sidebarBtn}  text-blue-700`}>Groups</p>
        <div className='flex items-center justify-between'>
        <p className={`${sidebarBtn}  text-blue-700`}>
            Events</p>
            <AddRoundedIcon className='!h-5 '/>
            </div>
        <p className={`${sidebarBtn}  text-blue-700`}>Followed hastags</p>
        <div className={`${sidebarLink}      text-center`}>
            <h4 className='dark:text-white font-medium text-sm '>Discover More</h4>
        </div>
    </div>

    </div>
  </div>);
}

export default Sidebar;

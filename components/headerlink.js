import React from 'react';
import { useSession, signOut } from "next-auth/react"; 
// import { Avatar } from "@mui/material";


function Headerlink({Icon, text,avatar,feed,active,hidden}) {
    const { data: session } = useSession();
  return (
    <div
    className={`${
      hidden && "hidden md:inline-flex"
    } cursor-pointer flex flex-col justify-center items-center ${
      feed
        ? "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5 space-y-1"
        : "text-gray-500 hover:text-gray-700"
    } ${active && "!text-black dark:!text-white"}`}
    onClick={() => avatar && signOut()}>


      {avatar ? (
       <Icon className="!h-7 !w-7 lg:!-mb-1" src={session?.user?.image} />
     ) : (
       <Icon /> 
     )} 
       {/* <Icon />  */}

    <h4
      className={`text-sm ${
        feed && "hidden lg:flex justify-center w-full mx-auto"
      }`}
    >
      {text}
    </h4>

    {active && (
      <span className="hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full" />
    )}
  </div>
      );
}

export default Headerlink;



  // <div className={`cursor-pointer flex flex-col justify-center
  // items-center ${feed ? "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5 sapce-y-1 ":"text-gray-500 hover:text-gray-700"} `}>
  
  //     {avatar ?
  //     <Icons className="!h-7 !w-7  ld:!mb-1" />
  //     :<Icons/>}
  //       <h4 className='text-sm'>{text}</h4>
  //     </div>
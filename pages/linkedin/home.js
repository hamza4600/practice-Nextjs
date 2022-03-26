import Headerlink from '../../components/headerlink';

import React from 'react';
import Image from "next/image";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from 'next/head';

import {getProviders,signIn} from 'next-auth/react';



function index({providers}) {


     
    const stye=`flex justify-between hover:shadow-xl p-4 cursor-pointer rounded-xl text-black bg-white max-w-md mx-auto xl:mx-0`
  return (<div>
      <div className='space-y-10 relative'>
      <Head>
        <title>Linked in clone</title>
        <meta name="viewport" content="Created in Next js and tailwind css " />
      </Head>
      <header className='flex justify-around items-center py-4 '>
          <div className='relative w-36 h-10'>
          <Image src={"https://rb.gy/vtbzlp"} layout='fill' objectFit='contain'/>
          </div>
          <div className='flex items-center sm:divide-x divide-gray-300'>
              <div className='hidden sm:flex space-x-8 pr-4 '>
                <Headerlink Icon={ExploreIcon} text="Discover "  />
                <Headerlink Icon={GroupIcon} text=" People" />
                <Headerlink Icon={OndemandVideoSharpIcon} text="Learning " />
                <Headerlink Icon={BusinessCenterIcon} text=" Jobs" />
              </div>


            { Object.values(providers).map((provider => (
                
                <div key={provider.name}>
              <div className='pl-4'>
              <button className='text-blue-700  font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2'
              onClick={()=>signIn(provider.id,{callbackUrl:"/linkedin"})}>Sing In</button>
              </div>
                </div>

            )))} 


          </div>
      </header>
      <main className='flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto'>
        <div className='space-y-6 xl:space-y-10'>
          <h1 className='text-3xl md:text-5xl text-amber-700/80 max-w-xl !leading-snug pl-4 xl:pl-0 '>
            Welcom to your  Professional community
          </h1>
          <div className={`${stye}`}>
            <h2 className='text-xl '>Searching for a Job </h2>
            <ArrowForwardIosRoundedIcon className='text-blue-700'/>
          </div>
          <div className={`${stye}`}>
            <h2 className='text-xl '>Find  a persion you know  </h2>
            <ArrowForwardIosRoundedIcon className='text-blue-700'/>
          </div>
          <div className={`${stye}`}>
            <h2 className='text-xl '>Learning new Skills for a Job </h2>
            <ArrowForwardIosRoundedIcon className='text-blue-700'/>
          </div>

        </div>
        <div className=' relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5 '>
          <Image src={"https://rb.gy/vkzpzt"} layout='fill' priority/>
        </div>
      </main>
  </div>
  </div>);
}

export default index;

export async function getServerSideProps(context) {
    const providers = await getProviders();
  
    return {
      props: {
        providers,
      },
    };
  }
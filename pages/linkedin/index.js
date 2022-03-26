import { Head } from 'next/document';
import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { getSession, useSession } from "next-auth/react";
import {useRouter} from 'next/router';
import Feed from '../../components/feed';
import {AnimatePresence} from 'framer-motion';
import Modal from '../../components/Model';
import { modalState,modalTypeState } from '../../atoms/modelAtom';
import {useRecoilState} from 'recoil';
import { connectToDatabase} from '../../utils/mongodb';
import Widgets from '../../components/widget';

function index({posts,articles}) {
  const [modelOpen, setModelOpen]=useRecoilState(modalState);
  const [modelType,setModelType]=useRecoilState(modalTypeState);
 
  const router=useRouter();

  const { status }   = useSession
  ({
    required: true,
    onUnauthenticated: () => {
      router.push('/linkedin/home');
    }

  });
  // console.log(data);
  console.log(status);

  return (<div>
    
    <div className='bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6'> 
          <Header/>
          <main className='flex  gap-x-5 px-4 sm:px-12 '>
            <div className='flex flex-col md:flex-row gap-5'>
              
              {/* sidebar */}
              <Sidebar/>

              {/* feed */}
              <Feed posts={posts} />
              <Widgets articles={articles}/>

            </div>
            <AnimatePresence>
              {modelOpen && (
                <Modal handleClose={()=>setModelOpen(false)}  type={modelType}/>
                )}
            </AnimatePresence>
          </main>
      </div>
  </div>);
}

export default index;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if(!session)
  return {
    redirect: {
      permanent: false,
      destination: '/linkedin/home',

    },
  };
  const {db}=await connectToDatabase();
  const  posts= await db.collection('posts')
  .find()
  .sort({timestamp:-1})
  .toArray();
// GET news from api
  const results = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`,
  ).then((res) => res.json());

  return {
    props: {
        session,
        articles: results.articles,
        posts:posts.map((post)=>({
        _id: post._id.toString(),
        input: post.input,
        phout: post.input,
        usetoUrl: post.photoUrl,
        inprname: post.username,
        email: post.email,
        userImg: post.userImg,
        createdAt: post.createdAt,
        // timestamp: post.timestamp,
        // comments: post.comments,
        // likes: post.likes,
        // shares: post.shares,
     }))
  },
  }
}

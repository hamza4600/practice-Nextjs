import React, { useEffect } from 'react'

import Link from 'next/link'
import { AiOutlineMenu } from "react-icons/ai";
  import { AiOutlineClose } from "react-icons/ai";

function Headerx() {
  const [showMenu, setShowMenu] = React.useState("")
  
  const ham=' flex inline  hover:bg-slate-500 rounded-md  bg-blue-400 hover:animate-pulse px-20 py-1 text-white'


  const kjh=()=>{
    setShowMenu(`hidden   `)
  }
  const kjha=()=>{
    setShowMenu(` `)
  }
  useEffect(() =>{
    setShowMenu(`hidden   `)
  },[])

  // console.log(window.innerWidth)
  return (
    <div className='flex align-center justify-center  bg-slate-50 text-black  m-0 p-2'> 
      <h1>Ecommers
      </h1>
       <button className="text-green-900 absolute left-0 px-5 font-thin p-1  " onClick={kjha}> <AiOutlineMenu className='w-10 h-6 bg-white font-thin hover:bg-black rounded-md animate-bounce'/></button>

      <div onClick={kjh}  className={`absolute top-0 left-0 bg-black/40 rounded-md ${showMenu} lg:w-8 xl:w-3/12 h-full   flex align-middle justify-center m-2 p-3  outline outline-offset-5 translate-x-1  `}>
        <div>
          <div>

            <button onClick={kjh} className='top-0 right-1 absolute  bg-blue-500  hover:text-opacity-40 rounded-md  '><AiOutlineClose className='h-10 w-8 animate-ping' /></button>

            <ul className='p-4 m-2 cursor-pointer duration-1000 w-60 space-y-4  '>
              
              <li className={ham}><Link href={`/navbar`}><a>Open</a></Link></li>
              <li  className={ham}><Link href={`/navbar`}><a>Open</a></Link></li>
              <li className={ham}><Link href={`/navbar`}><a>Open</a></Link></li>
              <li className={ham}><Link href={`/navbar`}><a>Open</a></Link></li>
              <li className={ham}><Link href={`/navbar`}><a>Open</a></Link></li>
            </ul>



          </div>
        </div>
      </div>







         
    </div>
  )
}

export default Headerx
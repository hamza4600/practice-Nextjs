import { Router } from 'next/router'
import React, { useEffect,useState } from 'react'
import One from './components/one'
import { Time } from './components/timer'

function index() {

  return (
    <div>
       <div>
         <div>
           <One/>
          <p>a simple quizz app</p>       
         </div>
         <Redu/>
       </div>
    </div>
  )
}

export default index

export function Redu(){
  const [loca, setLoco] = useState(" ")
  useEffect(() =>{
    // Router.events.on('routeChangeComplete', (url) => {
    //   console.log(window.location)
    // })
    setLoco(window.location)

  })
  return(<div>
     <div className='flex justify-center '>
            <div className=' font-light  w-100px  flex-col m-4 p-3 ' >

                <p>Time spent on this page is   {<Time/>  }</p>
                <p> Location is {`${loca}`}</p>
                <h1 className='p-1 font-bold '>Discuss some Basic of Reducx and practice It</h1>
                <p >Insted of using Redux we can also used ReducerHook that is inBuild Hook in React </p>
                <p>It Have three main Parts </p>
                <p><span className='font-bold'>Creat Context </span> It will creat the main Context that will store Data to be passed in the app</p>
                <p><span className='font-bold'>Provider</span>Wrapa the main Compnet from which we want to pass the vales</p>
                <p><span className='font-bold'>Consumer</span>Use iT in The components we wanted to used it</p>
                <p>we can easily pass data from differnt to differnt places </p>    
                <p><span className='font-bold'>UseReducer Hook</span> can also be used on tha State mangament easily change state logic easily </p>
                <p>I have a Practice Reduc in Raect app </p>
            </div>
        </div>
  </div>)
}
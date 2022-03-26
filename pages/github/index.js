import React, { useEffect,useState } from 'react';
import Header from '../../components/Header';

function show(obj){
    for(var key in obj){
 
        console.log(key,obj[key])
    }
}


function index({data}) {
    const datz=data.hamza[0];       //first Object fo the array


    const master=data.hamza[0].owner; //creater of the repo 

    // reposd Data 
    const repos=data.hamza[1]
    // console.log(data.hamza);

    // show(repos) Data neeede from a repo 
    console.log(repos.name)
    console.log(repos.description)
    console.log(repos.html_url)

    useEffect(() => {

        // console.log(master);


    }, []);
        return (
    <div className=' '>
        <Header/>
        <div className=' sm:flex align-center w-11/12 sm:w-fit'>

            <div className='flex   justify-center m-10 w-80 px-10  '>
                <div className='flex flex-col p-x-10 position-relative left-0  sticky top-8  '>
                     {[master].map((item)=>{
                         return(<div className='flex  flex-col align-center justify-4center bg-black/80 border-gray-600 border-2 rounded-lg' key={master.id}>
                             <div className='font-bold h-15 w-20 px-17 p-5  text-cyan-400'>{item.login}</div>
                             <div className='flex align-center justify-center '><img className='rounded-full  w-30 ' src={`${item.avatar_url}`} width={'450'}  /></div>
                             <div className='p-3 text-cyan-600 cursor-pointer '><a href={`${item.html_url}`}>  {item.html_url}</a></div>
                             <div className='text-white/40 px-5 font-light  '> {item.url}</div>
                            
                            <div className='text-white/75 px-4  hover:text-indigo-700'>Followers : <span className='text-sky-400 '>654752</span></div>
                            <div className='text-white/75 px-4  hover:text-indigo-700'>Following : <span className='text-sky-300  '>652</span></div>
                            <div className='px-3 m-2 text-white/70 '><p className='font-bold underline decoration-sky-600 hover:decoration-blue-400 cursor-pointer '>www.hamza.com</p></div>

                         </div>)
                     })}
                </div>
                </div>

            <div className='flex flex-col m-5 px-4 align-center justify-center md:max-w-fit sm:max-w-fit '>
                <div className=''>
                    
                     <Detail/>
                    <Comp repos={data.hamza[0]}/>
                    <Comp repos={data.hamza[1]}/>
                    <Comp repos={data.hamza[2]}/>
                    <Comp repos={data.hamza[3]}/>
                    <Comp repos={data.hamza[4]}/>
                    <Comp repos={data.hamza[5]}/>
                    <Comp repos={data.hamza[6]}/>
                    <Comp repos={data.hamza[7]}/>
                    <Comp repos={data.hamza[8]}/>
                    <Comp repos={data.hamza[9]}/>
                    <Comp repos={data.hamza[10]}/>
                    <Comp repos={data.hamza[11]}/>
                    <Comp repos={data.hamza[12]}/>
                    <Comp repos={data.hamza[13]}/>
                    <Comp repos={data.hamza[14]}/>
                    <Comp repos={data.hamza[15]}/>
                    <Comp repos={data.hamza[16]}/>
                    <Comp repos={data.hamza[17]}/>
                    <Comp repos={data.hamza[18]}/>
                    <Comp repos={data.hamza[19]}/>
                    <Comp repos={data.hamza[20]}/>
                    <Comp repos={data.hamza[21]}/>
                    <Comp repos={data.hamza[22]}/>
                    <Comp repos={data.hamza[23]}/>
                    <Comp repos={data.hamza[24]}/>
                    <Comp repos={data.hamza[25]}/>
                    <Comp repos={data.hamza[26]}/>
                    <Comp repos={data.hamza[27]}/>
                    <Comp repos={data.hamza[28]}/>
                    <Comp repos={data.hamza[29]}/>

                    {/* <h1>Data about repos</h1> */}
                     
                    </div>
                    </div>


            </div>
        </div>
    );
}
export default index;

// server side call the api
export async function   getServerSideProps(){
    const data= await fetch('http://localhost:3000/api/github')
    .then(res=> res.json())
    .then(data=>data)
    return {
        props:{
            data
        }   
    }    

}

// component
export function Comp({repos}){

    return(
        <div className='m-10 space-y-6 align-center '>
            {[repos].map((item)=>{
                        return(
                        <div key={item.id} className='text-cyan-300  bg-slate-800 flex-col  align-middle justify-center  border-2 rounded-lg border-gold  px-2 box-border  md:box-content   inline-content w-12/12 lg:w-6/12 shadow-lg shadow-cyan-500/40  '>
                            <div className='font-bold px-10 my-1 text-sky-500'>{repos.name}</div>
                            <div className='text-white/80  font-light px-3'>{repos.description}</div>
                            <div className='px-2 font-extralight cursor-pointer hover:text-cyan-500'><a href={`${repos.html_url}`}>{repos.html_url}</a></div>
                        </div>)
                    })}
        </div>
    )} 
// detail of a repo
export function Detail(){
    return(<div>
        <div className='flex w-fit h-fit  bg-slate-800 m-4 p-2 border-2 rounded-lg  '>
            <div>
                <div >
                    <h1 className='text-yellow-500   flex align-center justify-center font-bold '>Hamz Khan</h1>
                    <p className='font-light text-green-500 '>All Data shown below is get from github API and is shown in The UI</p>
                </div>
            </div>
        </div>


    </div>)
}

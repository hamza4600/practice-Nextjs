import React, { useEffect, useState } from 'react'
import styles from "./flex.module.css"

function Flexbox() {
  return (
    <div>  
    <div className={styles.main}>
         <div className={styles.moo}>
            <Navs props={"one"}/>
            <Navs props={"two"}/>
            <Navs props={"Three"}/>
            <Navs props={"Four"}/>
            <Navs props={"Five"}/>
         </div>
         </div>

         <div className={styles.uoo}> 
            <Two one={"This is One    "} 
            two={" if we want to set the Hover prorty the we have to applt that to main div not on the button"}/>
            <Two />
            <Two/>
            <Two/>
            <Two/>
            <Two/>
         </div>

         <div className={styles.uoo}> 
         <Counte/>
        <Name/>
         </div>
            
    </div>
  )
}
export function Navs({props}){
    return(<div>
        <div className={styles.one}>
            <button>{props} </button>
            <ol className={styles.noo}> 
            <ul>
                <li>One</li>
                <li>two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
            </ul>
            </ol>
        </div>
    </div>)
}
export function Two({one,two}){
    return(<div>
        <div className={styles.two}>
        <h1> {one}</h1>
        <p>{two}</p>
        </div>
    </div>)
}

export function Counte(){
    
    const [count,setCount]=useState(0);
    const [coun,setCoun]=useState("");
    const [cunt,setCunt]=useState("");


    const one=()=>{
        setCount((pre)=>pre+1);  
    }
    const two=()=>{
        setCount(count-1);  
    }

    if(count===10){
        // setCount("You have reached the limit");
        console.log('you have reached the limit 10')
    }
    useEffect(() =>{
        console.log('Compnet re-render')
        setCoun(window.innerHeight)
        setCunt(window.innerWidth)
    },[])

    
   return(<div>
       
        <div className={styles.cou}>
            <p>Counter One</p>
            <h1>{count}</h1>
            <button onClick={one}>Add</button>
            <button onClick={two}>Min</button>
            <p>Screen Dimensions </p>
            <p>X : {coun}</p>
            <p>Y : {cunt}</p>
            <div className={styles.amz}>
            <p>amazaing things with HTML</p>
                <details>
                    <summary>what is my Name</summary>
                    <span>My Name is Hamza </span>
                </details>
            <progress value="20" max="100"></progress>
            <h3>Auto complet Options </h3>

            <h3>Data List</h3>
            <input type="text" list='paki'/>
            <datalist id="paki">
                <option value="Hamza"/>
                <option value="paksitan"/>
                <option value="India"/>
                <option value="America"/>
                <option value="London"/>
            </datalist>
            </div>
        </div>
    </div>)
} 
export function Name(){

    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [city,setCity]=useState("");

    const kha =(e) =>{
        const aw=Number(name)
            // Print the table of 10 up to 10
            const po= document.createElement('div')
             
            for(let i=1;i<=10;i++){
                console.log(`${i} * ${aw} = ${i*aw}`)
                // setAge(`${i} * ${aw} = ${i*aw}`)
            // setAge(po.innerHTML=`${i} * ${aw} = ${i*aw}`)
            }
            console.log(`Print the table of ${aw} `)
            setAge(`Print the table of ${aw}  open console`)
        }
    const gaa=() =>{
        const qwq= prompt(parseInt("Enter your age"))
        for(let i=1; i<=10; i++) {
            console.log(`${i} * ${qwq} = ${i*qwq}`)
        }
    }
 
    return(<div className={styles.lkj}> 
    <p>To Print Table on console </p>
        <button onClick={gaa}>Table</button>   
        <p>Pass input value to useSatate Hook Object</p>
        <p>Only Type Number </p>
            <input onChange={(e)=>setName(e.target.value)} placeholder='name' value={name}  />
            <button onClick={kha}>Print</button>    
            <h1>   { `${age}`} </h1>
        </div>)
}

export default Flexbox
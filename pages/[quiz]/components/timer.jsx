import { useState,useEffect } from "react";

function Timer({setTimeout,questionNumber}) {
    const [time, setTime] = useState(10);
     
    useEffect(() => {
        if (time === 0) return setTimeout(true);

        const interval = setInterval(() => {
            
            setTime(time => time - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [setTimeout,time]);

    useEffect(() => {
        setTime(10);
    }, [questionNumber]);


    return time
}

export default Timer

// a timer function

export function Time(){
    const [ti,setTi]=useState(0);

    useEffect(() =>{
        const main =()=>{
            setInterval(() => {
                setTi(ti=>ti+1);
            }, 1000);
           }
              main();
        return ()=>clearInterval(main);      
    },[])
    return ti
}

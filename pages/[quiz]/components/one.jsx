import React from 'react'
import styles from "./one.module.css"
import Image from 'next/image'
import { useState } from 'react'
import Triva from './Triva'
import { useEffect } from 'react'
import { useMemo } from 'react'
import Timer from './timer'

function One() {
    const [questionNumber, setQuestionNumber] = useState(1)
    // if tomeout true then cannot answer question
    const [timeout, setTimeout] = useState(false)

    const [earned, setearned] = useState(`$10`)
    
    // Data for question and answers
    const data =[
        {
            id: 1,
            question: "What is your Name Of USA",
            answers: [
                {
                    id: 1,
                    text:"AMERICA",
                    correct: true,
                },
                {
                    id: 2,

                    text:"Hassan",
                    correct: false,
                },
                {
                    id: 3,
                    text:"Sameer",
                    correct: false,
                },
                {
                    id: 4,
                    text:"Ameer",
                    correct: false,
                },
            ]
        },
        {
            id: 2,
            question: "What is your CAPITAL Name Of PAKISTAN", 
            answers: [
                {
                    id: 1,
                    text:"PAKISTAN",
                    correct: true,
                },
                {
                    id: 2,

                    text:"pakistan",
                    correct: false,
                },
                {
                    id: 3,
                    text:"pakii",
                    correct: false,
                },
                {
                    id: 4,
                    text:"pakistann",
                    correct: false,
                },
            ]
        },
        {
            id: 3,
            question: "What is your CAPITAL Name Of PAKISTAN", 
            answers: [
                {
                    id: 1,
                    text:"PAKISTAN",
                    correct: true,
                },
                {
                    id: 2,

                    text:"pakistan",
                    correct: false,
                },
                {
                    id: 3,
                    text:"pakii",
                    correct: false,
                },
                {
                    id: 4,
                    text:"pakistann",
                    correct: false,
                },
            ]
        },
        {
            id: 4,
            question: "What is your CAPITAL Name Of PAKISTAN", 
            answers: [
                {
                    id: 1,
                    text:"PAKISTAN",
                    correct: true,
                },
                {
                    id: 2,

                    text:"pakistan",
                    correct: false,
                },
                {
                    id: 3,
                    text:"pakii",
                    correct: false,
                },
                {
                    id: 4,
                    text:"pakistann",
                    correct: false,
                },
            ]
        },
        {
            id: 5,
            question: "What is your CAPITAL Name Of PAKISTAN", 
            answers: [
                {
                    id: 1,
                    text:"PAKISTAN",
                    correct: true,
                },
                {
                    id: 2,

                    text:"pakistan",
                    correct: false,
                },
                {
                    id: 3,
                    text:"pakii",
                    correct: false,
                },
                {
                    id: 4,
                    text:"pakistann",
                    correct: false,
                },
            ]
        },
        {
            id: 6,
            question: "What is your CAPITAL Name Of PAKISTAN", 
            answers: [
                {
                    id: 1,
                    text:"PAKISTAN",
                    correct: true,
                },
                {
                    id: 2,

                    text:"pakistan",
                    correct: false,
                },
                {
                    id: 3,
                    text:"pakii",
                    correct: false,
                },
                {
                    id: 4,
                    text:"pakistann",
                    correct: false,
                },
            ]
        },
        {
            id: 7,
            question: "What is your CAPITAL Name Of PAKISTAN", 
            answers: [
                {
                    id: 1,
                    text:"PAKISTAN",
                    correct: true,
                },
                {
                    id: 2,

                    text:"pakistan",
                    correct: false,
                },
                {
                    id: 3,
                    text:"pakii",
                    correct: false,
                },
                {
                    id: 4,
                    text:"pakistann",
                    correct: false,
                },
            ]
        },
        {
            id: 8,
            question: "What is your CAPITAL Name Of PAKISTAN", 
            answers: [
                {
                    id: 1,
                    text:"PAKISTAN",
                    correct: true,
                },
                {
                    id: 2,

                    text:"pakistan",
                    correct: false,
                },
                {
                    id: 3,
                    text:"pakii",
                    correct: false,
                },
                {
                    id: 4,
                    text:"pakistann",
                    correct: false,
                },
            ]
        },
        {
            id: 9,
            question: "What is your CAPITAL Name Of PAKISTAN", 
            answers: [
                {
                    id: 1,
                    text:"PAKISTAN",
                    correct: true,
                },
                {
                    id: 2,

                    text:"pakistan",
                    correct: false,
                },
                {
                    id: 3,
                    text:"pakii",
                    correct: false,
                },
                {
                    id: 4,
                    text:"pakistann",
                    correct: false,
                },
            ]
        },
        {
            id: 10,
            question: "What is your CAPITAL Name Of PAKISTAN", 
            answers: [
                {
                    id: 1,
                    text:"PAKISTAN",
                    correct: true,
                },
                {
                    id: 2,

                    text:"pakistan",
                    correct: false,
                },
                {
                    id: 3,
                    text:"pakii",
                    correct: false,
                },
                {
                    id: 4,
                    text:"pakistann",
                    correct: false,
                },
            ]
        },
         
    ]

    const moneyPyramid = useMemo(() => 
        [
        { id: 1, amount: " $  100 "},
        { id: 2, amount: " $  200 "},
        { id: 3, amount: " $  300 "},
        { id: 4, amount: " $  400 "},
        { id: 5, amount: " $  500 "},
        { id: 6, amount: " $  600 "},
        { id: 7, amount: " $  700 "},
        { id: 8, amount: " $  800 "},
        { id: 9, amount: " $  800 "},
        { id: 10, amount: " $  1000 "},
    ].reverse()
    ,[]);

    useEffect(() =>{
        questionNumber>1 &&
         setearned(moneyPyramid.find((m)=>m.id===questionNumber-1).amount)
    },[questionNumber])

  return (
    <div className={styles.one}>
        <div className={styles.main}>
            {timeout ? <h1 className={styles.end}>You Earned : {earned} </h1> :(  
           <>
           <div className={styles.top}>top
                <div className={styles.timer}>
                    {<Timer setTimeout={setTimeout} questionNumber={questionNumber}/>}</div>
            </div>

            <div className={styles.bottom}>
                <Triva data={data} 
                timeout={timeout} 
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}/>
            </div>
        </>
        )}
        </div>
        
        
        
        <div className={styles.pyramid }>
            <ul className=  {styles.mlist}>
                {moneyPyramid.map((item) => (
                   
                <li key={item.id} className={questionNumber ===item.id ? styles.mitemA : styles.mitem}>
                    <span className={styles.Number}>{item.id}</span>
                    <span className={styles.Amount}>{item.amount}</span>
                </li>
                
                ))}

            </ul>
        </div>
    </div>
  )
}

export default One
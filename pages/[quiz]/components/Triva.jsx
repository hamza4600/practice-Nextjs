import React from 'react'
import { useEffect,useState } from 'react'
import styles from "./triva.module.css"

// install sound library for sound  

function Triva({ data,timeout
    ,questionNumber,setQuestionNumber}) {
    
        const [question,setQuestion]=useState(null)
        const [selectAnswer,setSelectAnswer]=useState(null)
        const [classNames,setclassName]=useState(styles.answer)  
        // const [letsPlay] = useSound(play)

        // useEffect(() =>{
            // letsPlay()
        // },[])

        useEffect(()=>{
            setQuestion(data[questionNumber-1]);

          },[data,questionNumber]);

       const handelClick=(e)=>{
            setSelectAnswer(e)
            setclassName(styles.answerA);
            setTimeout(() => {
            console.log(selectAnswer);

            if(e.correct){
                setQuestionNumber((questionNumber)=>questionNumber+1);                
                setSelectAnswer(null)

            }
            else{
                setTimeout(true);
            }
            }, 2000);
        }
        return (

    <div className={styles.triva}>
        <audio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"  autoPlay/>
        <div className={styles.question}>{question?.question}</div>
        <div className={styles.answers}>
            {question?.answers.map(answer=>(

        <div onClick={()=>handelClick(answer)}
        // selectAnswer ===answer ? className:`styles.${className}`   className="answer selected" : className="answer"
         key={answer.id} className={selectAnswer===answer? classNames :styles.wrong  }>
             {answer.text}</div>
            ))}
        </div>
    </div>
  )
}

export default Triva
import React, { useEffect } from 'react'

import styles from "./animat.module.css"
function style() {

    const [color,setcolor] = React.useState('black')
    const [colo,setcolo] = React.useState('#2c2cc7')
    const [colr,setcolr] = React.useState('black')
    const chn=()=>{
        setcolor(color==='white'?'black':'white')
        setcolo(colo==='black'?'blue':'black')
        setcolr(colr==='white'?'black':'white')
    }
    return (

    <div>
        <style jsx>
            {`
            .main{
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                align-items:center;
                color:${colr};
                background: radial-gradient(circle farthest-corner at top left, rgb(190, 187, 14), rgb(181, 22, 187));

            }
            p{
                font-size:20px;
                background-color:${colo};
                padding:10px;
                margin:10px;
                border-radius:10px;
                max-width:450px;
            }   
            h1{
                font-size:25px;
                background-color:rgb(100,250,200);
                padding:10px;
                margin:10px;
                border-radius:10px;
            }
            button{
                background-color:rgb(0,100,100);
                font-size:20px;
                padding:10px;
                margin:10px;
                border-radius:10px;
            }
            button:hover{
                background-color:rgb(0,200,200);
                font-size:21px;
                color:black;
            }

        `}
        </style>
        <div>
            <div className='main'>
                <h1>Style css</h1>
                <p>Css also support Stle componet styling on components level </p>
                <p>we can also pass the state in the css easily</p>
                <button onClick={chn}>Change</button>
                <Ones/> 
                <Navv/>        
                <Moon/>  
                <Three/> 
                <Four  />
                <Shadow/>
                <Ani/>
            </div>
        </div>
    </div>
  )
}

export function Ones(){
    useEffect(()=>{
        console.log('Compnet re-render')
        },[])  ;
    return(<div className={styles.pak}>
            <div>
            <h2>We will Practice some animation in css</h2>
            <ul>Pakistan</ul>


            </div>
         </div>)
}
// eathe nad Moon
export  function Moon(){
    return(<div className={styles.moo}>
                      <article className={styles.eathdemo}>
                     <div className={styles.earth}>
                         <p>Hover to see more</p>
                       <img src="https://cssanimation.rocks/images/random/earth.png"/>
                     </div>
                     <div className={styles.mooncontainer}>
                       <div className={styles.moon}>
                         <img src="https://cssanimation.rocks/images/random/moon.png"/>
                       </div>
                     </div>
                   </article>
    </div>) 
}
//  three
export function Three(){
    return(<div className={styles.three}>
        <ul>Hover delay</ul>
        <h2>We will Practice some animation </h2>
        <p>Move item from dirrent axixis</p>
        <div>rotation</div>
        <div>transition(x,y) transitionY </div>
        <div>scale (x,y)</div>
        <div>scakeY(x)</div>
        <div>skew(x,y)</div>
        <div>skewY(x)</div>
        <div>matrix()</div>
        <div>angel</div>
        <p>all properties of css and use them</p>
    </div>)
}      

// four
function Four(){
    return(<div>
        <div className={styles.ani}>
            <p>Theee D animations in Css</p>
            <p>some exapmles od css in 3-d </p>
            <div className={styles.threeOne}> One
            <p>It Have the Background of transparent</p></div>
        </div>
        <div className={styles.pol}>
        <div className={styles.threeTwo}>Two <p>Vertical Hover to see effects </p></div>
        <div className={styles.threeFour}><p>Three</p></div>
        <div className={styles.threeFive}><p>Five</p></div>
        <div className={styles.control}><p>Controll The dimesnsions </p></div>
        </div>
    </div>)
}
// box shadow

function Shadow(){
    return(<div>
        <div className={styles.shadow}>
            <p>Box Shadow example 
                shaoe margin is used to margin around the shape </p>
        </div>
        <div className={styles.pak}>
            examples of listyle style type
            <li>One </li>
            <li>two</li>
            <li>Three</li>
            <h1>Cal function</h1>
            <p> used to calculate the dimesions and set them as MUltiply Add Subtract or Other  pass As a dimensions  </p>
            <h1>var() function</h1>
            <p>Is used to set to varibles and use them in file as needed they must be defined in root and then be used</p>
            <h1>:root</h1>
            <p>we can also set the color and other properties to the varibles as we used in JS and used inthe properties we neded </p>
                <p>we can not :root in Next js Module css can only use in .css</p>
            <p>Now we will make some shapes in 3-d </p>
            <h5>3d box shadow simple animation</h5>
            <div className={styles.multi}>
                <h1>Simples colums to show data we can set to differnt aspecctes as needed</h1>
                <div>
                <p>Lore Ispa  c j cdcdc dcdc </p>    
                <p>Lore Ispa  c j cdcdc dcdc </p>    
                <p>Lore Ispa  c j cdcdc dcdc </p>    
                <p>Lore Ispa  c j cdcdc dcdc </p>    
                </div>
                <h2>The inherit set to child will apply the property of the parent to the child </h2>
                <h1>Clipping and Masking</h1>
                <p>with the propertu to use we can set the require Opacity and dimensions  of a components</p>
                <li> Differnt  web browsers and define style on thier name  WEBKIT MOZ O  browser
                    name and their style need to be defined </li>
            </div>

        </div>
    </div>)
}

// exapmle of manul animation
function Ani(){
    // useEffect(() =>{
    //     setInterval(() => {
    //         const ani= document.getElementsByClassName('.ani');
    //         if (ani.className.contains('active')) {
    //           ani.className.remove('active');
    //       } else {
    //         box.className.add('active');
    //       }
    //     }, 1000)
    // })
    return(<div>
        <div id='ani' className={styles.ani}>
            <p>Theee D animations in Css</p>
            <div className={styles.kaka}>click to see animations</div>



        </div>  
    </div>) 
    }    
// navbar
export function Navv(){
    return(<div>
        <div className={styles.navbar}>

        <h2>Hamza</h2>
        <div className={styles.drop}>
            <button>Drop down</button>
            <div className={styles.dropC}>
                <a>Link</a>
                <a>Link</a>
                <a>Link</a>
                <a>Link</a>
            </div>
        </div>
        </div>
    </div>)
} 

export default style
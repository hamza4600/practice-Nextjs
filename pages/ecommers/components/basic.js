
import React from 'react'
import styles from  "./one.module.css"

const style={
    one:{
        backgroundColor: "gold",
        border: "1px solid white",
        color: "black",
        borderRadius: "10px",
        padding: "10px",
        cursor: "pointer",
    },
}

 function Basic() {

  return (
      
        // <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    
      <div className='flex p-2 m-2 align-center flex-col justify-center'> 
    <div className={styles.two}  >

        <div >
            <div style={style.one}>
                <div className={styles.one  }>
                        <p>Hamz a</p>
                </div>
            </div>
        </div>

        <li>Hamza  Khan</li>
        <li>Hamza  Khan</li>
        <li>Hamza  Khan</li>
        <li>Hamza  Khan</li>
        <li>Hamza  Khan</li>
        <li>Hamza  Khan</li>
        <li>Hamza  Khan</li>
        
            {/* <input className={styles.int} type="text" placeholder="Search"/> */}
        
    </div>
    <div className={styles.three}>
        <h1>pakistan is My  country</h1>
        </div>
     <div className={styles.foure}>Foure</div>   
     <div className={styles.five}>Five</div>   
     <div className={styles.six}>Five
     <img src="https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=" />
      <p>Pakistan islamabad</p>  
     </div>   
     <div className={styles.siven}>
     <p>Lahore</p>
     <p>Lahore</p>
     <p>Lahore</p>
     <p>Lahore</p>
     </div>   
     
     <div className={styles.eight}>
         <p>Horizontaoly and vertically center</p>
         <p>Karachi</p>
         <p>Karachi</p>
         <p>Karachi</p>
         <p>Karachi</p>
         <p>Karachi</p>
     </div>

     <div className={styles.nine}>Simple  Circle</div>   
     <div className={styles.ten}>Simple  Glass Effexct
     <p>Glass Effexct on  a Image</p>
     <p>Glass Effexct on  a Image</p>
     <p>Glass Effexct on  a Image</p>
     <p>Glass Effexct on  a Image</p>
    <p>Glass Effexct on  a Image</p>
     </div>   
     <div className={styles.glass}>
         <p>Glass</p>
         <p>Glass</p>
         <p>Glass</p>
         </div>   

     <div className={styles.multi}>
         <p> Multi Color Border</p> 
         <img src="https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=" />
         <p> dcjdcd d  d d       c dc d  mdfjdf df d d cdcd d  d cjd cjnv f duse4v389r4 34 ry49r4 yevbde deicedcrcbdvf4 98f894f949r 49 8dedf4 9d 99r4def4hdeio4echedb4 9edg7 8 34dg eof4g38 sd g437ed43uef7uef; ier gde8rui4 786dv4 f6ewu bhfew68oydvl234g 7d8qo    f g7 4 93 kejkg deji dyew</p>
     </div>   

        <div className={styles.eleven}>
            <p>Eleven</p>
            <p>Css for the Small and all type of devices </p>
            <p>Css for the small devices when dimension meet 720px property will be applied</p>
            <p>Meta tag fro the viewPort must be define so pages  can fit to Mobile device</p>

            </div>

     <div className={styles.text}>Foure
        <p>wrape content arround the Images
        wrape content arround the Images wrape content arround the Images wrape content  the Images wrape content arround the Images  </p>
        <img src="https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=" />
        <p>wrape content arround the Images 
        wrape content arround the Images 
        wrape content arround the Images 
        wrape content arround the Images 
        wrape content arround the Images 
        wrape content arround the Images 
        wrape content arround the Images </p>
        <div>If we want to wrap Text around image flex not applied</div>
     </div>   

        <div className={styles.rows}>
            <h1>Div One</h1>
            <h2>Div Two</h2>
            
        </div>  

        <div className={styles.textva}>
            <p>Diredtion of Text</p>
            <p>We can also set diretion of  the text to be render and  shadow of the text i</p>
        </div>
   
   
    </div>
  )
}

export default Basic
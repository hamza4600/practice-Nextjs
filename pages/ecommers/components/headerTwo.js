
import {style} from "./style.module.css"


import Link from 'next/link'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react"



function HeaderTwo() {
    const [showMenu, setShowMenu] = useState("")
    function hamz(){
        const nav = document.querySelectorAll('.nav')
        console.log("Button is Clixcked")
        nav.forEach(nav_el => nav_el.classList.remove('visible'))
      }
      
      function ham(){
        const nav = document.querySelectorAll('.nav')

        console.log("Button is Clixcked")
        nav.forEach(nav_el => nav_el.classList.add('visible'))
        setShowMenu({
            transitionDelay: "0.1s",

        })

      }
    useEffect(() =>{
        // const nav = document.querySelectorAll('.nav')
        
    },[])

    const style={
        nav:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
        },

        logo :{
            width: "150px",
          },
        
          navBtn :{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            fontSize: "20px",
          },
          menn:{
            /* background-color: #f2f2f2; */
            width: "100px",
            height: "40px"
          },
          openBtn: {
            position: "fixed",
            top: "10px",
            left: "10px"
          },
          
          nav :{
            position: "fixed",
            top: "0",
            left: "0",
            height: "100vh",
            transform: "translateX(-100%)",
            transition: "transform 0.3s ease-in-out",
          },
          
          nav_visible :{
            transform: "translateX(0)",
          },
          
          navBlack: {
            backgroundColor: "rgb(34, 31, 31)",
            width: "60%",
            maxWidth: "480px",
            minWidth: "320px",
            transitionDelay: "0.4s",
          },
          
          navBlack_visible: {
            transitionDelay: "0s",
          },
          
          navRed :{
            backgroundColor:" rgb(229, 9, 20)",
            width: "95%",
            transitionDelay: "0.2s",
          },
          
          navRed_visible :{
            transitionDelay:" 0.2s",
          },
          
          navWhite : {
            backgroundColor: "#fff",
            width: "95%",
            padding: "40px",
            position: "relative",
            transitionDelay: "0s",
          },
          navWhite_visible :{
            transitionDelay:" 0.4s",
          },
          closeBtn : {
            opacity: "0.3",
            position: 'absolute',
            top: "40px  ",
            right: "30px",
          },
          
          list:{
            listStyleType: "none",
            padding: "0",
            backgroundColor: "rgb(19, 146, 140)",
            borderRadius: "10px",
            alignItems: "center",
            margin: "2px",
            /* font-size: bold; */
          },
          listLi :{
            margin: "20px 0",
          },
          listLiA :{
            color: "rgb(34, 31, 31)",
            fontSize: "14px",
            textDecoration: "none",
            textTransform: "uppercase",
          },
          
          list_ul: {
            listStyleType:" none",
            paddingLeft: "20px",
          }
    }
  return (
    <div>
         <div>
             <button  style={style.navBtn} onClick={ham}>open Nav
        <AiOutlineMenu className='menn'/> 
    </button>

           <div style={style.navBlack, style.nav}>
      <div  style={style.nav, style.navRed}>
        <div  style={style.nav,style.navWhite}>
          <button  style={style.navBtn,style.closeBtn} onClick={hamz}>close Nav
        <AiOutlineClose/>
          </button>

          {/* <img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-700x188.png" alt="Logo" className="logo"/> */}

          <ul  style={style.list_ul} >
            <li style={style.listLi}><a style={style.listLiA} href="/team">Teams</a></li>
            <li style={style.listLi}><a style={style.listLiA} href="/location">Locations</a></li>
            <li style={style.listLi} ><a style={style.listLiA} href="/life">Life at Netflix</a></li>
            <li style={style.listLi}>
              <ul style={style.list_ul} >
                <li style={style.listLi} ><a style={style.listLiA} href="/hamza">Netflix culture memo</a></li>
                <li style={style.listLi} ><a style={style.listLiA} href="/hassan">Work life balance</a></li>
                <li style={style.listLi} ><a style={style.listLiA} href="/sameer">Inclusion & diversity</a></li>
                <li style={style.listLi} ><a style={style.listLiA} href="/ameer">Blog</a></li>
                <li style={style.listLi} ><a style={style.listLiA} href="/ameer">Blog</a></li>
                <li style={style.listLi} ><a style={style.listLiA} href="/ameer">Blog</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

         </div>
    </div>
  )
}

export default HeaderTwo
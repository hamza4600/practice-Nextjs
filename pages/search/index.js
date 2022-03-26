import React, { useState,useEffect } from 'react'
import Header from '../../components/Header'
import styles from "./search.module.css"


const Users=[    
  {
      id:1,
      "name":"Azzaare",
      "email":"jf@baffier.fr",
      "login":"Azzaare",
      "avatar":"https://avatars.githubusercontent.com/u/4535131?v=4\u0026s=80",
  },
  {
      id:2,
      "name":"Vitor Oliveira",
      "email":"vbrazo@gmail.com",
      "login":"vbrazo",
      "avatar":"https://avatars.githubusercontent.com/u/1292556?v=4\u0026s=80",
  },
  {
      id:3,
      "name":"phillip055",
      "email":"vorathep055@gmail.com",
      "login":"phillip055",
      "avatar":"https://avatars.githubusercontent.com/u/9292937?v=4\u0026s=80",
  },
  {
      id:4,
      "name":"Emil Suleymanov",
      "email":"emil.suleymanov@tum.de",
      "login":"sssemil",
      "avatar":"https://avatars.githubusercontent.com/u/3113308?v=4\u0026s=80",
  },
  {
      id:5,
      "name":"MaximSmolskiy",
      "email":"mithridatus@mail.ru",
      "login":"MaximSmolskiy",
      "avatar":"https://avatars.githubusercontent.com/u/25690822?v=4\u0026s=80",

  },
  {
      id:6,
      "name":"mike zhang",
      "email":"zhangmingkai19892013@gmail.com",
      "login":"zhangmingkai4315",
      "avatar":"https://avatars.githubusercontent.com/u/8868334?v=4\u0026s=80",
  },
  {
      id:7,
      
      "name":"Oleg Karasik",
      "email":"OlegKarasik@coherentsolutions.com",
      "login":"OlegKarasik",
      "avatar":"https://avatars.githubusercontent.com/u/36962980?v=4\u0026s=80"
  },
  {
      id:8,
      
      "name":"maxbarsukov",
      "email":"maximbarsukov@bk.ru",
      "login":"maxbarsukov",
      "avatar":"https://avatars.githubusercontent.com/u/60351594?v=4\u0026s=80",
  },
  {
      id:9,
      "name":"Thomas Huang",
      "email":"thomas.huang2017@gmail.com",
      "login":"thomashhuang",
      "avatar":"https://avatars.githubusercontent.com/u/18605591?v=4\u0026s=80",
  },
  {
      id:10,
      "name":"Ali Hassan",
      "email":"contact@alihassan.dev",
      "login":"malihassan20",
      "avatar":"https://avatars.githubusercontent.com/u/10503652?v=4\u0026s=80",
  }
]
// arrar of user to be filter


function index() {
  // console.log(Users)
  const [search, setSearch] = useState("")
  return (
    <div className={styles.top}>
       <Header/>
        
        <div className={styles.mai}>
          
          <div className={styles.search}>
            <input placeholder='Search ' type="text" onChange={(e) => setSearch(e.target.value)} 
             className={styles.input}/>
            <ul>
 
              {Users.filter(user=>user.name.toLocaleLowerCase().includes(search)).map(user => (
                <li key={user.id}>{user.name}
                  </li>
              ))} 



            </ul>
          </div>
          <input className={styles.io} type="text" placeholder='Search ...' list='pakk'/>
              <datalist id='pakk'>
               {Users.map(user => (
                 <option value={user.name} key={user.id}/>
                ))}
              </datalist>

        </div>
        <Tables data={Users}/>      
        <UserProfile />
        <UserF/>
     </div>
  )
}

export default index
// creata fake data of 100 users 

// creat table fro search
function Tables({data}){
  const [query, setQuery] = useState("")
  const Search=(data) =>{
    return data.filter(user=>
      user.name.toLocaleLowerCase().includes(query)||
      user.login.toLocaleLowerCase().includes(query)||
      user.email.toLocaleLowerCase().includes(query)
      )
  }

  return(<div className={styles.tabl}>
      <input placeholder='serach Tables' type="text" onChange={(e)=>setQuery(e.target.value)}/>
      <table>
        <tbody>
          <tr>
           <th>Name</th>
           <th>Email</th>
           <th>Login</th>
          </tr>

          {Search(data).map((item) =>(

          <tr  className={styles.thin} key={item.id}>
           <th>{item.name}</th>
           <th>{item.email}</th>
           <th>{item.login}</th>
           
          </tr>
          ))}

          
        </tbody>
      </table>
      <p>Searc all data and show result From eamil and email Both</p>
  </div>)
}

// show User Profile Card
 function UserProfile(){
  const [data,setData]=useState([])
  const [iot,setIot]=useState("")

    useEffect(() =>{
      fetch(`http://localhost:3000/api/search?q=${iot}`)
      .then(res=>res.json())
      .then(data=>setData(data))

    },[iot])

   return( 
     <div className={styles.iot}> 
     <p>This componet get data  from APi and show the search data from Backend APi</p>
       <input placeholder='Backend Search' onChange={(e)=>setIot(e.target.value)} />

     <div className={styles.frie}>
        {data.map((user) =>{
          return(
            <div key={user.id} className={styles.card}>
              <div>
              <img src={user.avatar} alt=""/>
              </div>
              <div className={styles.dee}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.login}</p>
              </div>
            </div>
          )
        })}
        </div>
     </div>
    )
  }
   
// fetch data from an api and show in pages as a search result
// fetch('https://jsonplaceholder.typicode.com/users')
function UserF(){
  const [data, setData] = useState([])
  const [searc,setSearc] = useState("")

  const Search=(data) =>{
    return data.filter(user=>
      user.name.toLocaleLowerCase().includes( searc)||
      user.email.toLocaleLowerCase().includes( searc)
      )
  }


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])

return(<div className={styles.free}>
        <input type="text" placeholder='Search ...'  
          onChange={(e)=>setSearc(e.target.value)}/>
    
    <div className={styles.fri}>


      {Search(data).map((user) =>{
        return(
          
          <div key={user.id} className={styles.car}>
            <div>
            <img src={user.avatar} alt=""/>
            </div>
            <div className={styles.dee}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <span>Address</span>
            <ul>{user.address.street}</ul>
            <ul>{user.address.suite}</ul>
            <ul>{user.address.city}</ul>
            <ul>{user.address.zipcode}</ul>
            <ul>{user.phone}</ul>
            <ul>{user.website}</ul>
            <span>Company Details</span>
            <ul>{user.company.name}</ul>
            <ul>{user.company.catchParse}</ul>
            <ul>{user.company.bs}</ul>
            </div>
          </div>
        )
      })}
    </div>
    <div>
    </div>
    <h1 style={{width:"350px",fontSize:"20px"}}>Send an array of Users to client side and show them and make search throw them for large Apps but can also make request on server side </h1>

  </div>)
}
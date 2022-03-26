// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {connectToDatabase} from "../../utils/mongodb";



export default async function handler(req, res) {
  const {db } = connectToDatabase();

  const datx= {
   name: 'hamza Khan',
  age: '23',  
  email: 'hmkh2000@gmail.com ',
  resFrom:` ${req.rawHeaders} \n` ,
  resFrom2:`${req.headers.host}`,
  methods:`${req.method}`,
  url:`${req.url}`,
  host:`${req.host}`,
  body:`${req.body}`,    
  ip:`${req.ip}`,
}

  const {method,body}=req;

  if(req.method==='POST'){
    try{
      const data = await db
      .collection('requests')
      .insertOne({...datx,timestamp:new Date()});
      res.status(201).json(data,datx);
    }

    catch(error){
      res.status(500).json(error);
    }

  }
}

 

// connect to database
// const {db}=await connectToDatabase();
// const  posts= await db.collection('posts')
// .find()
// .sort({timestamp:-1})
// .toArray();
//  post = posts.map((post)=>({
//   _id: post._id.toString(),
//   input: post.input,
//   phout: post.input,
//   usetoUrl: post.photoUrl,
//   inprname: post.username,
//   email: post.email,
//   userImg: post.userImg,
//   createdAt: post.createdAt,
//    timestamp: post.timestamp,
//    comments: post.comments,
//    likes: post.likes,
//    shares: post.shares,
// }))

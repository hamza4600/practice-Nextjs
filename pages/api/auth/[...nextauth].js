import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../lib/mongodb";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";

export default NextAuth({
    providers: [
         GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // scope: ["profile", "email"]
        })
    ],
    jwt: {
        encryption :true,
    },
    secret: process.env.JWT_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    pages: {
        signIn: "/linkedin/home",
    },
     
    
    session: {
        strategy:"jwt",
    },

    // database: {
    //     type: "mongodb",
    //     url: process.env.MONGODB_URI,
    //     name: "nextauth",
    //     collections: {
    //         user: "users",
    //         session: "sessions"
    //     }
    // }

    // }
});
 
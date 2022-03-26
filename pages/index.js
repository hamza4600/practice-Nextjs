// import React from 'react';
import React, { useState } from 'react';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import styles from "../styles/Home.module.css";
import Header from '../components/Header';

function index() {

  return ( 
      <div>
        <div>

        

          <Header/>
          <Link href='/linkedin'>
            <a>Go to Linked in clone</a>
              

          </Link>
        </div>

  </div>);
}
export default index;
 
 
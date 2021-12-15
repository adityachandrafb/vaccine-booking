import React from 'react'
import "../style/usernotfound.css";
import Logo from "../style/logo.svg";
import { Navbar,Footer } from '../Component';

const UserNotFound = () => {
    return (
        <div>
            <Navbar />
            <div classsname='content'> 
             <div className='h2'> Oops anda harus masuk atau membuat akun terlebih dahulu agar bisa mendaftar vaksinasi</div>
            </div>
            <div className='masuk-button'> 
            Masuk </div>
            <div className='daftar-button'> Daftar </div>
            <Footer />
            
        </div>
    )
}

export default UserNotFound

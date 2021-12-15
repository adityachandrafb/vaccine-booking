import React from 'react'
import "../style/beranda.css";
import {Navbar, Footer} from '../Component';


const Beranda = () => {
    return (
        <div> <Navbar />
            <div className='header'>
                <div className='content'>
                    <div className='beranda-h3'> 
                    Wujudkan Indonesia sehat, aman, dan produktif
                    </div>
                    <div className='beranda-h1'> 
                    <p>Indonesia Tanggap Covid-19 </p>
                    </div>
                    <div className='submit-button'> Daftar Vaksin 
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    
    )
}

export default Beranda

import React from 'react';
import './JoinUs.css';
import { SignUpBtn } from './SignUpBtn';
// import { Button } from '../Navgationbar/Button';

function JoinUs() {
    return (
        <div className='LogInPage-container'>
            <div className='Wrapper'>
                    <div className='LogInPage-leftBox'>
                        <div class='LogInPage-para'>
                            <div className='TopLine'> HOLO LAB </div>
                            <div className='Heading'>JOIN WITH US</div>
                            <div className='Paragraph'>Our company is small, flexible and highly specialised in interpreting blood test results.
                            Our MISSION is to EMPOWER the interpretation of blood test results in an unprecedented way.
                            We strongly believe that artificial intelligence can bring enormous benefits to future medical research.</div>
                       </div>  
                       <div className='Button'>
                       <SignUpBtn>
                           Join With Us
                       </SignUpBtn>
                       </div>
                    </div>
                    {/* <div className='LogInPage-rightBox'>
                        <img   className='LogIn-Image'
                               alt='log in image'
                               src='images/icon1.png'
                        />     
                    </div> */}
            </div>
            
        </div>
    )
}

export default JoinUs

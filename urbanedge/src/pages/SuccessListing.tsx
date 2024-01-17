import React from 'react';
import { Card, Typography, Button } from '@mui/material';
import './SuccessListing.css'
import Navbar from '../components/Navbar';
import { Link as RouterLink } from 'react-router-dom';
import Footer from '../components/Footer';
function SuccessListing() {
  return (
    <div>
        <Navbar/>
       <div className="Success" > 
      
        <button className="dismiss" type="button">×</button> 
        <div className="header"> 

        <div className="div_image_v">
            <div className="image">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div> 
        </div> 
            <div className="content">
                <span className="title">Post Submitted</span> 
                <Typography className="message">Thank you for listing with us. Your post has been successfully submitted, your post will be listed within 24 hours.</Typography> 
                </div> 
            
            </div> 
            <Button type="submit" variant='contained' color="primary"   
              component={RouterLink} to="/" >Done</Button>
          
            </div>
            

            <Footer/>



    </div>
    
    

  );
}

export default SuccessListing;

import React from 'react'
import {Link} from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import CSSFooter from "../CSSstyles/Footer.module.css";
export default function Footer() {
    
    
    return (
        <div className={CSSFooter.container}  >
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                
                        <ul className="list-unstyled">
                        <Link to="" style={{paddingLeft: 5, textDecoration: 'none' }}> <li>SEARCH OUR STORE</li></Link>
                        <Link to="" style={{paddingLeft: 5, textDecoration: 'none' }}> <li>BLOG</li></Link>
                        <Link to="" style={{paddingLeft: 5, textDecoration: 'none'}}> <li>ABOUT US</li></Link>
                        <Link to="" style={{paddingLeft: 5, textDecoration: 'none' }}> <li>CONTACT US</li></Link>
                        </ul>
                    </div>
    
                    
                    <div className="col-md-3 col-sm-6">
                    
                        <h4>Our Address</h4>
                        <p >Chitkara University,Punjab Campus Rajpura</p>
                        
                        <ul className="list-unstyled">
                           <Link to=""> <li><PhoneIcon/>: +998822133</li></Link>
                           <Link to=""> <li><MailIcon/>: amzazonclone.net</li></Link>
                            
                        </ul>
                    </div>
                    
                    <div className="col">
                        
                    <p> 
                <br></br><br></br><br></br>
                        <Link to="" style={{paddingLeft: 1, textDecoration: 'none' ,color:'white'}}>   <GitHubIcon/></Link>     
                      <Link to="" style={{ textDecoration: 'none' ,color:'white'}}><InstagramIcon></InstagramIcon></Link>
                      <Link to="" style={{ textDecoration: 'none' ,color:'white'}}>   <FacebookIcon/></Link> 
                      <Link to="" style={{ textDecoration: 'none' ,color:'white'}}> <TwitterIcon/></Link>  </p></div>
                        
                    

                </div>
                <div className="footer-bottom">
                    <p className="text-xs text-center">
                        &copy;{new Date().getFullYear()}  City Guide App - All Rights |
                    </p>
                </div>

            </div>
            
        </div>
    )
}

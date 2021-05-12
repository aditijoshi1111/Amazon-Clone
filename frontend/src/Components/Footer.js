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
        <div className={CSSFooter.container}>
                <div className={CSSFooter.row}>
                    <div className="col-md-3 col-sm-6">
                
                        <ul className={CSSFooter.list}>
                        <Link to="" > <li>SEARCH OUR STORE</li></Link>
                        <Link to="" > <li>BLOG</li></Link>
                        <Link to="" > <li>ABOUT US</li></Link>
                        <Link to="" > <li>CONTACT US</li></Link>
                        </ul>
                    </div>
    
                    
                    <div>
                        <h4>Our Address</h4>
                        <p >Chitkara University,<br/>Punjab Campus,<br/> Rajpura</p>
                           <Link style={{color: "skyblue"}} to=""> <PhoneIcon/>: +998822133</Link><br></br>
                           <Link style={{color: "skyblue"}} to=""> <MailIcon/>: amzazonclone.net</Link>
                    </div>
                    
                    <div className="col">
                        
                    <p> 
                <br></br><br></br><br></br>
                      <Link to="" style={{padding: "5px", textDecoration: 'none' ,color:'white'}}>   <GitHubIcon/></Link>     
                      <Link to="" style={{ padding: "5px", textDecoration: 'none' ,color:'white'}}><InstagramIcon></InstagramIcon></Link>
                      <Link to="" style={{ padding: "5px", textDecoration: 'none' ,color:'white'}}>   <FacebookIcon/></Link> 
                      <Link to="" style={{ padding: "5px", textDecoration: 'none' ,color:'white'}}> <TwitterIcon/></Link>  
                    </p>
                    </div>
                        
                    

                </div>
                <div className={CSSFooter.foot}>
                    <p className="text-xs text-center">
                        &copy;{new Date().getFullYear()}  City Guide App - All Rights |
                    </p>
                </div>
            
        </div>
    )
}

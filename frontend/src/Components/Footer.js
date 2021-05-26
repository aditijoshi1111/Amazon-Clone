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
                        <h4>Get to know Us</h4>
                        <Link to="" > <li>Blog</li></Link>
                        <Link to="/aboutUs" > <li>About Us</li></Link>
                        <Link to="/contactUs" > <li>Contact Us</li></Link>
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
                      <Link to="" ><GitHubIcon className={CSSFooter.social}/></Link>     
                      <Link to="" ><InstagramIcon className={CSSFooter.social}/></Link>
                      <Link to="" ><FacebookIcon className={CSSFooter.social}/></Link> 
                      <Link to="" ><TwitterIcon className={CSSFooter.social}/></Link>  
                    </p>
                    </div>
                        
                    

                </div>
                <div className={CSSFooter.foot}>
                    <p className="text-xs text-center"style={{margin:"3px"}}>
                        &copy;{new Date().getFullYear()}  City Guide App - All Rights |
                    </p>
                </div>
            
        </div>
    )
}

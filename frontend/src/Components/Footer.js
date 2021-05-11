import React from 'react'
import {Link} from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
export default function Footer() {
    
    let footerstyle={
        position:'relative',
        top:'100%',
        width:'100%' ,
        
    }
    return (
        <div className="main-footer" style={footerstyle}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                
                        <ul className="list-unstyled">
                        <Link to="" style={{paddingLeft: 5, textDecoration: 'none' ,color:'black'}}> <li>SEARCH OUR STORE</li></Link>
                        <Link to="" style={{paddingLeft: 5, textDecoration: 'none' ,color:'black'}}> <li>BLOG</li></Link>
                        <Link to="" style={{paddingLeft: 5, textDecoration: 'none' ,color:'black'}}> <li>ABOUT US</li></Link>
                        <Link to="" style={{paddingLeft: 5, textDecoration: 'none' ,color:'black'}}> <li>CONTACT US</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <ul className="list-unstyled">
                    <Link to="" style={{paddingLeft: 5, textDecoration: 'none' ,color:'black'}}>    <li>Github</li></Link>
                    <Link to="" style={{paddingLeft: 5, textDecoration: 'none' ,color:'black'}}>      <li>Instagram</li></Link>
                    <Link to="" style={{paddingLeft: 5, textDecoration: 'none' ,color:'black'}}>  <li>Facebook</li></Link>
                    <Link to="" style={{paddingLeft: 5, textDecoration: 'none' ,color:'black'}}>     <li>Twitter</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <ul className="list-unstyled">
                    <Link to="" style={{paddingLeft: 5, textDecoration: 'none' ,color:'black'}}>  <li> <GitHubIcon/></li></Link>
                    <Link to="" style={{paddingLeft: 5, textDecoration: 'none' ,color:'black'}}>   <li><InstagramIcon></InstagramIcon></li></Link>
                    <Link to="" style={{paddingLeft: 5, textDecoration: 'none' ,color:'black'}}>   <li><FacebookIcon/></li></Link>  
                    <Link to="" style={{paddingLeft: 5, textDecoration: 'none' ,color:'black'}}>   <li><TwitterIcon/></li></Link>   
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

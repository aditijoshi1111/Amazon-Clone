import React from 'react';
import CSSNav from '../CSSstyles/Navbar.module.css';

class Navbar extends React.Component{
    render(){
        return(
            <div className={CSSNav.container}>
                AMAZON-CLONE
            </div>
        )
    }
}

export default Navbar;
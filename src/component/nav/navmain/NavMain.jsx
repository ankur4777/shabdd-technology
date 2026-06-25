import React from 'react';
import './NavMain.css';
import NavLogo from "../navlogo/NavLogo";
import NavCenter from "../navcenter/NavCenter";
import NavRight from "../navright/NavRight";


function NavMain(){
    return(
        <div className="nav-main">
            <NavLogo />
            <NavCenter/>
            <NavRight/>
        </div>
    );
}

export default NavMain;
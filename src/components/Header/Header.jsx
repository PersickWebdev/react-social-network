import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/logo.png';
import background from '../../assets/images/headerBackground02.jpg';

const Header = (props) => {
    return (
        <header className={style.header} style={{backgroundImage: `url("${background}")`}}>
            <div className={style.logoBox}>
                <img className={style.logo} src={logo}/>
            </div>
            <div className={style.nameBox}>
                <span className={style.name}>
                    <span>R</span>adio<span>A</span>ctive
                </span>
            </div>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div className={style.loginName}> {props.login} - <button className={style.logoutButton} onClick={props.logOutThunk}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;
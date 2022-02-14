import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

export const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <Link to="/">
                    <h2>123Projetei</h2>
                </Link>
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/"><span>Home</span></Link></li>
                    <li><Link to="/cadastro"><span>Cadastrar</span></Link></li>
                    <li><Link to="/login"><span>Login</span></Link></li>
                </ul>
            </div>
        </div>
    );
}
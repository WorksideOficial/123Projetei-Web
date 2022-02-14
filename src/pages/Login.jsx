import React from "react";
import "../styles/login.scss";

export const Login = () => {
    
    return(
        <div className="login">
            <h2>Faça Login no Sistema</h2>
            <div className="infor">
                <p>Para acessar: NOME: Admin; SENHA: admin;</p>
            </div>
            <div className="form">
                <form>
                    <div className="input">
                        <label htmlFor="">NOME:</label>
                        <input name="name" type="text" placeholder="Informe o seu Nome:" />
                    </div>
                    <div className="input">
                        <label htmlFor="">SENHA:</label>
                        <input name="password" type="password" placeholder="Informe sua senha:" />
                    </div>
                    <div className="input">
                    <button>Login Usuário</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
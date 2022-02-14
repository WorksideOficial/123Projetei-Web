import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import { useHistory } from "react-router-dom";
import "../styles/register.scss";

export const Register = () => {
    let dispatch = useDispatch();
    let history = useHistory();

    const[error, setError] = useState("");
    const[ user, setUser ] = useState({
            cpf: "",
            name: "",
            telefone: "",
            date: "",
            password: ""
    });
    const {cpf, name, telefone, date, password } = user;

    const handleInput = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubimit = (e) => {
        e.preventDefault();
        if(!cpf || !name || !telefone || !date || !password){
            setError("Oppss: Existem campos em branco!")
        }else{
            dispatch(addUser(user));
            history.push("/cadastro");
            setError("Usuário cadastrado com sucesso!")
        }
    }

    return(
        <div className="register">
            <h2>Cadastro de pessoa Física</h2>
                {error && <div className="error"><h3>{error}</h3></div>}
            <div className="form">
                <form autoComplete="off" onSubmit={handleSubimit}>
                <div className="input">
                    <label htmlFor="">CPF:</label>
                    <input 
                    type="text" 
                    value={cpf}
                    name="cpf"
                    onChange={handleInput}
                    placeholder="Informe o seu Cpf:"
                    />
                </div>
                <div className="input">
                    <label htmlFor="">NOME:</label>
                    <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={handleInput}
                    placeholder="Informe o seu Nome:" 
                    />
                </div>
                <div className="input">
                    <label htmlFor="">TELEFONE:</label>
                    <input 
                    type="text"
                    name="telefone" 
                    value={telefone}
                    onChange={handleInput}
                    placeholder="Informe o seu Telefone:" 
                    />
                </div>
                <div className="input">
                    <label htmlFor="">DATA:</label>
                    <input 
                    type="text"
                    name="date" 
                    value={date}
                    onChange={handleInput}
                    placeholder="Informe a Data:" 
                    />
                </div>
                <div className="input">
                    <label htmlFor="">SENHA:</label>
                    <input 
                    type="password"
                    name="password" 
                    value={password}
                    onChange={handleInput}
                    placeholder="Informe sua senha:" 
                    />
                </div>
                <div className="input">
                   <button>Cadastrar Usuário</button>
                </div>
                </form>
            </div>
        </div>
    );
}
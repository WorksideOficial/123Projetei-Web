import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/actions";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";
import "../styles/register.scss";

export const Editar = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let{ id } = useParams();
    const{ user } = useSelector((state) => state.data);

    const[error, setError] = useState("");
    const[ state, setState ] = useState({
            cpf: "",
            name: "",
            telefone: "",
            date: "",
            password: ""
    });
    const {cpf, name, telefone, date, password } = state;

    useEffect(() => {
        dispatch(getSingleUser(id));
    },[]);

    useEffect(() => {
       if(user){
            setState({...user})
       }
    },[user]);

    const handleInput = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const handleSubimit = (e) => {
        e.preventDefault();
        if(!cpf || !name || !telefone || !date || !password){
            setError("Oppss: Existem campos em branco!")
        }else{
            dispatch(updateUser(state));
            history.push("/");
            setError("")
        }
    }

    return(
        <div className="register">
            <h2>Atualizar pessoa Física</h2>
                {error && <h3>{error}</h3>}
            <div className="form">
                <form autoComplete="off" onSubmit={handleSubimit}>
                <div className="input">
                    <label htmlFor="">CPF:</label>
                    <input 
                    type="text" 
                    value={cpf || ""}
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
                    value={name || ""}
                    onChange={handleInput}
                    placeholder="Informe o seu Nome:" 
                    />
                </div>
                <div className="input">
                    <label htmlFor="">TELEFONE:</label>
                    <input 
                    type="text"
                    name="telefone" 
                    value={telefone || ""}
                    onChange={handleInput}
                    placeholder="Informe o seu Telefone:" 
                    />
                </div>
                <div className="input">
                    <label htmlFor="">DATA:</label>
                    <input 
                    type="text"
                    name="date"
                    value={moment(date).format('L') || ""}
                    onChange={handleInput}
                    placeholder="Informe a Data:" 
                    />
                </div>
                <div className="input">
                    <label htmlFor="">SENHA:</label>
                    <input 
                    type="password"
                    name="password" 
                    value={password || ""}
                    onChange={handleInput}
                    placeholder="Informe sua senha:" 
                    />
                </div>
                <div className="input">
                   <button>Atualizar Usuário</button>
                </div>
                </form>
            </div>
        </div>
    );
}
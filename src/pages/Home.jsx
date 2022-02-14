import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import { useHistory } from "react-router-dom";
import moment from "moment";

import "../styles/home.scss";


export const Home = () => {

    let dispatch = useDispatch();
    let history = useHistory();
    const { users } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(loadUsers());
    },[])

    const handleDelete = (id) => {
        if(window.confirm("Você deseja deletar o usuário?")){
            dispatch(deleteUser(id));
        }
    }


    return(
        <div className="home">
            <div className="section">
                <h2>Lista de Pessoa Física</h2>
                <button className="edit" onClick={() => history.push("/cadastro")}>Cadastrar Usuário</button>
            </div>
            <table>
            <thead>
                <tr>
                <th>Cpf:</th>
                <th>Nome:</th>
                <th>Telefone:</th>
                <th>Data:</th>
                <th>Editar:</th>
                <th>Remover:</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.cpf}</td>
                        <td>{user.name}</td>
                        <td>{user.telefone}</td>
                        <td>{moment(user.date).format('L')}</td>
                        <td><button className="edit" onClick={() => history.push(`/edit/${user.id}`)}>Editar</button></td>
                        <td><button className="remove" onClick={() => handleDelete(user.id)}>Remover</button></td>
                    </tr> 
                ))}
                             
            </tbody>
            </table>

        </div>
    )
}
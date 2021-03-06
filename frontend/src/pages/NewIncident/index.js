import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

function NewIncident() {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile');
        } catch(err) {
            alert('Erro ao cadastrar caso, tente novamente.');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Título do caso"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                    />
                    <textarea
                        placeholder="Descrição"
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    />
                    <input
                        placeholder="Valor em reais"
                        onChange={e => setValue(e.target.value)}
                        value={value}
                    />

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;
import React from 'react';

import { Form } from './styled';
import { ButtonContainer } from '../Button';

export default function FormContainer() {
    return (
        <Form>
            <h3>Entre com seus dados</h3>
            <div>
                <p>Nome</p>
                <input type="text" placeholder="Seu nome" />
            </div>
            <div>
                <p>Email</p>
                <input type="email" placeholder="Seu email" />
            </div>
            <div>
                <p>Senha</p>
                <input type="password" placeholder="Sua senha" />
            </div>
            <div>
                <p>Confirme a senha</p>
                <input type="password" placeholder="Repita a senha" />
            </div>
            <ButtonContainer />
        </Form>
    );
}

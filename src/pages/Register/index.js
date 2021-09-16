import React from 'react';

import FormContainer from '../../components/Form';
import { Title, MainContainer, Section } from '../../styles/GlobalStyles';
import uniLogo from '../../assets/img/uniLogo.png';

export default function Register() {
    return (
        <MainContainer>
            <Title>
                <h1>Registre-se</h1>
            </Title>
            <Section>
                <img src={uniLogo} alt="" />
                <FormContainer />
            </Section>
        </MainContainer>
    );
}

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { userRegisterFetch } from '../../../_redux/actions/actionAuth';

import { Container } from '../../../globalStyle';
import { SignContainer, SignContent, SignBoxOne, ButtonSignIn, FormBox, Input, TitleForm } from '../styles';


function RegisterPage({ dispatch }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        dispatch(userRegisterFetch(email, password, history))

    }

    let enableButton = email.length > 0 && password.length > 0
    let style;
    if (!enableButton) {
        style = { opacity: 0.8 }
    }

    return (
        <>
            <Container>
                <SignContainer>
                    <SignContent>
                        <SignBoxOne>
                            <FormBox onSubmit={handleSubmit}>
                                <TitleForm>
                                    Cadastro
                                </TitleForm>
                                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <ButtonSignIn style={style} disabled={!enableButton}>
                                    Confirmar
                                </ButtonSignIn>
                            </FormBox>
                        </SignBoxOne>
                    </SignContent>
                </SignContainer>
            </Container>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

export default connect(null, mapDispatchToProps)(RegisterPage);

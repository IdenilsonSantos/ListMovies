import React, { useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { userLoginFetch } from '../../../_redux/actions/actionAuth';

import { Container } from '../../../globalStyle';
import { SignContainer, SignContent, SignBoxOne, SignBoxTwo, ButtonSignIn, ButtonSignUp, FormBox, Input, TitleForm, DescriptionSignup } from '../styles';

function LoginPage({ dispatch }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        dispatch(userLoginFetch(email, password, history));
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
                                    Login
                                </TitleForm>
                                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <ButtonSignIn style={style} disabled={!enableButton}>
                                    Entrar
                                </ButtonSignIn>
                            </FormBox>
                        </SignBoxOne>
                        <SignBoxTwo>
                            <TitleForm>
                                Cadastrar
                            </TitleForm>
                            <DescriptionSignup>
                                Se chegou aqui é porque está interessado, se cadastre para poder usufruir de tudo que temos preparado para você.
                            </DescriptionSignup>
                            <Link to="/register">
                                <ButtonSignUp>
                                    Vamos lá
                                </ButtonSignUp>
                            </Link>
                        </SignBoxTwo>
                    </SignContent>
                </SignContainer>
            </Container>
        </>
    )
}

const mapStateToProps = state => {
    return {
        token: state.token.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));

import styled from 'styled-components';

const SignContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SignContent = styled.div`
    width: 700px;
    height: 500px;
    margin-top: 75px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 1.6px 3.6px rgba(0,0,0,0.2), 0px 0px 2.9px rgba(0,0,0,0.2);
    display: flex;

    @media screen and (max-width: 340px) {
        flex-direction: column;
    }
`;

const SignBoxOne = styled.div`
    width: 100%;
    height: 500px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px 0px 0px 4px;

    @media screen and (max-width: 340px) {
        width: 100%;
        height: 250px;
    }
`;

const SignBoxTwo = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0px 4px 4px 0px;
    background-color: #c03;

    h1 {
        color: #FFF;
    }

    @media screen and (max-width: 340px) {
        width: 100%;
        height: 250px;
    }
`;

const DescriptionSignup = styled.p`
    color: #fff;
    text-align: justify;
    margin-top: 20px;
`;

const ButtonSignIn = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border: 1px solid #fff;
    border-radius: 4px;
    background: #c03;
    color: #fff;
    cursor: pointer;
    transition: 0.5s all;

    &:hover {
        color: #c03;
        border: 1px solid #c03;
        background: none;
    }
`;
const ButtonSignUp = styled.button`
    width: 120px;
    padding: 10px;
    margin-top: 30px;
    border: none;
    border: 1px solid #fff;
    border-radius: 4px;
    background: none;
    color: #fff;
    cursor: pointer;
    transition: 0.5s all;

    &:hover {
        color: #c03;
        background: #FFF
    }
`;

const FormBox = styled.form`
`;

const TitleForm = styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #b7b7b7;
    color: #b7b7b7;
    padding: 7px;
    margin-bottom: 10px;
    border-radius: 4px;
`;


export { SignContainer, SignContent, SignBoxOne, SignBoxTwo, DescriptionSignup, ButtonSignIn, ButtonSignUp, FormBox, TitleForm, Input };

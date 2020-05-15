import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background: #c03
`;

const HeaderContent = styled.header`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SearchBar = styled.form`
    width: 400px;
    height: 40px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #cccccc;
    display: flex;
    align-items: center;
`;

const InputSearch = styled.input`
    width: 90%;
    padding: 10px;
    color: #333;
    border: none;
`;

const ButtonSearch = styled.button`
    width: 10%;
    height: 100%;
    font-size: 20px;
    color: #c03;
    display: flex;
    justify-content: center;
    border:none;
    background: transparent;
    cursor: pointer;
    transition: .5s all;

    &:hover {
        color: #b3012d;
    }
`;

const ButtonLogout = styled.button`
    width: 90px;
    height: 40px;
    padding: 10px;
    font-size: 14px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 8px;
    cursor: pointer;
    background: transparent;
    transition: 1s all;

    &:hover{
        background: #fff;
        color: #545454;
    }
`;

export { HeaderWrapper, HeaderContent, SearchBar, InputSearch, ButtonSearch, ButtonLogout };

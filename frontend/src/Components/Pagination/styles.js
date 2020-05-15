import styled from "styled-components";

const PaginationContainer = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: center;
`;

const Item = styled.span`
    cursor: pointer;
    color: black;
    width: 30px;
    height: 30px;
    float: left;
    padding: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    text-align: center;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
    border-radius: 50px;
`;

export { PaginationContainer, Item }

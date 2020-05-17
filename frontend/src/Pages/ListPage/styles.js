import styled from "styled-components";

const CardWrapper = styled.div`
    height: 100%;
    margin-top: 30px;
`;

const Card = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 8px;
    background-color: #FFF;
    background-size: cover;
    box-shadow: 2px 3px 2px rgba(0,0,0, .2);
    margin-right: 10px;
    margin-bottom: 10px;


    &:nth-child(4n){
        margin-right: 0;
    }
`;

const CardContent = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 10px;
    display: block;
    color: #FFF;
    background: rgba(0, 0, 0, .6);
`;

const ContentWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    height: 230px;
    border-radius: 4px;
    box-shadow: 2px 3px 2px rgba(214, 214, 214, .2);
`;

const Text = styled.div`
    width: 100%;
    margin-left: 10px;
`;

const Title = styled.h2`
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`;

const ReleaseDate = styled.p`
    font-size: 12px;
    text-align: center;
`;

const Overview = styled.p`
    width: 100%;
    text-align: justify;
    margin-top: 10px;
`;

const ActionsInfo = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    color: #000;
`;

const PopularityCount = styled.span`
    width: 50px;
    height:50px;
    margin-right: 10px;
    background-color: #FFF;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid #99e601;
    border-radius: 50px;
    color: #99e601;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
`;

const AddFavorite = styled.button`
    width: 50px;
    height:50px;
    background-color: #72ab01;
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    border: none;
    border-radius: 50px;
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    transition: 1s all;

    &:hover{
        background-color: #99e601;
    }
`;

export { CardWrapper, Card, CardContent, ContentWrapper, Image, Text, Title, ReleaseDate, Overview, ActionsInfo, PopularityCount, AddFavorite };
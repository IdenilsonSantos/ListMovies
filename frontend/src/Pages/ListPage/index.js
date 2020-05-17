import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';

import Header from '../../Components/Header';
import Pagination from '../../Components/Pagination';

import { Container } from '../../globalStyle';
import { CardWrapper, Card, CardContent, ContentWrapper, Image, Text, Title, ReleaseDate, Overview, ActionsInfo, PopularityCount, AddFavorite } from './styles';
import { authHeader } from '../../helpers/authHeader';
import { apiCustom } from '../../services/api';


function ListPage({ data, dispatch }) {
    const [results, setResults] = useState([]);

    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };

    useEffect(async () => {
        await apiCustom.get('movies', requestOptions)
            .then(res => {
                setResults([res.data])
            }).catch(err => {
                if (err.response.status === 400) {
                    //dispatch({ type: FETCH_ERROR });
                }
            });
    }, [])

    return (
        <>
            <Header />
            <Container>
                <CardWrapper>
                    {results.map(res => (
                        res.docs.map(res => (
                            <Card key={res.id} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${res.poster_path})` }}>
                                <CardContent>
                                    <ContentWrapper>
                                        <Image src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${res.poster_path}`} />
                                        <Text>
                                            <Title>{res.title}</Title>
                                            <ReleaseDate>{res.release_date ? format(new Date(res.release_date), 'dd/MM/yyyy') : ''}</ReleaseDate>
                                            <Overview>{res.overview}</Overview>
                                        </Text>
                                    </ContentWrapper>
                                </CardContent>
                            </Card>
                        ))
                    ))}
                </CardWrapper>

            </Container>
        </>
    )
}

const mapStateToProps = ({ data }) => {
    return {
        data: data.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListPage);

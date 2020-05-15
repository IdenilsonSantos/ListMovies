import React from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { MdList } from 'react-icons/md';

import Header from '../../Components/Header';

import { Container } from '../../globalStyle';
import { CardWrapper, Card, CardContent, ContentWrapper, Title, ReleaseDate, Overview, ActionsInfo, PopularityCount, AddFavorite } from './styles';

function HomePage({ data }) {
    return (
        <>
            <Header />
            <Container>
                <CardWrapper>
                    {data.map(res => (
                        res.results.map(res => (
                            <Card key={res.id} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${res.poster_path})` }}>
                                <CardContent>
                                    <ContentWrapper>
                                        <Title>{res.title}</Title>
                                        <ReleaseDate>{res.release_date ? format(new Date(res.release_date), 'dd/MM/yyyy') : ''}</ReleaseDate>
                                        {res.overview.length < 200 ? <Overview>{res.overview}</Overview> : <Overview>{res.overview.substring(0, 200)}...</Overview>}
                                    </ContentWrapper>
                                    <ActionsInfo>
                                        <PopularityCount>
                                            {((res.popularity * 100) / 100).toFixed(0)}% votos
                                    </PopularityCount>
                                        <AddFavorite>
                                            <MdList />
                                        </AddFavorite>
                                    </ActionsInfo>
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

export default connect(mapStateToProps)(HomePage);

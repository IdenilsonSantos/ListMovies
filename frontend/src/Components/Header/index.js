import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { tmdbFetch } from '../../_redux/actions/actionData';
import { userLogout } from '../../_redux/actions/actionAuth';

import { MdSearch } from 'react-icons/md'

import { Container } from '../../globalStyle';
import { HeaderWrapper, HeaderContent, SearchBar, InputSearch, ButtonSearch, ButtonLogout } from './styles';

function Header({ dispatch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        dispatch(tmdbFetch(searchTerm, null));
        localStorage.setItem('term', searchTerm);
    }

    async function handleLogout() {
        dispatch(userLogout(history));
    }

    return (
        <HeaderWrapper>
            <Container>
                <HeaderContent>
                    <SearchBar onSubmit={handleSubmit}>
                        <InputSearch value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                        <ButtonSearch>
                            <MdSearch />
                        </ButtonSearch>
                    </SearchBar>
                    <ButtonLogout onClick={() => handleLogout()}>Sair</ButtonLogout>
                </HeaderContent>
            </Container>
        </HeaderWrapper>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};


export default connect(null, mapDispatchToProps)(Header);

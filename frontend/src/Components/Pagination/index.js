import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import { tmdbFetch } from '../../_redux/actions/actionData';

import { PaginationContainer, Item } from './styles';


function Pagination({ total_pages, page, dispatch }) {
    const [currentPage, setCurrentPage] = useState(page);

    let renderPageNumbers;

    let style = {
        backgroundColor: '#c03',
        color: 'white',
        border: '1px solid #c03'
    }

    async function handleMakeRequestPage(pageNumber) {
        const term = localStorage.getItem('term')
        //dispatch(tmdbFetch(term, pageNumber));
        setCurrentPage(page)
    }

    const pageNumbers = [];
    if (total_pages !== null) {
        for (let i = 1; i <= Math.ceil(total_pages / 20); i++) {
            pageNumbers.push(i);
        }
    }

    renderPageNumbers = pageNumbers.map(number => {
        let classes = currentPage === number ? style : '';
        return (
            <Item key={number} style={{ backgroundColor: classes.backgroundColor, color: classes.color, border: classes.border }} onClick={() => handleMakeRequestPage(number)}>{number}</Item>
        );
    });

    return (
        <PaginationContainer>
            {renderPageNumbers.length > 1 ? <Item onClick={() => handleMakeRequestPage(currentPage - 1)}><MdChevronLeft /></Item> : <div></div>}
            {renderPageNumbers.length > 1 ? renderPageNumbers : ''}
            {renderPageNumbers.length <= currentPage ? <div></div> : <Item onClick={() => handleMakeRequestPage(currentPage + 1)}><MdChevronRight /></Item>}
        </PaginationContainer>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(null, mapDispatchToProps)(Pagination);

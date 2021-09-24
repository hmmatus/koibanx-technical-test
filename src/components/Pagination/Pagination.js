/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-line react-hooks/exhaustive-deps
import React, { useState, useEffect } from "react";
import Pagination from 'react-bootstrap/Pagination';
import PropTypes from 'prop-types';

const PaginationComponent = ({
  currentPage,
  totalPages,
  onChangeCurrentPage
}) => {

  const [items, setItems] = useState([]);

  const getItems = () => {
    let auxItems = [];
    for(let i = currentPage;i <= currentPage + 5; i++) {
      if (i <= totalPages) {
        auxItems.push(
          <Pagination.Item key={i} active={currentPage === i} onClick={() => onChangeCurrentPage(i)}>
            {i}
          </Pagination.Item>
        )
      }
    setItems(auxItems);
  }
}

  useEffect(() => {
    getItems();
  }, []); 

  return  (
    <Pagination>
      <Pagination.First onClick={() => onChangeCurrentPage(1)}/>
        {items}
        <Pagination.Ellipsis />
        <Pagination.Item active={currentPage === totalPages} onClick={() => onChangeCurrentPage(totalPages)}>{totalPages}</Pagination.Item>
      <Pagination.Last />
    </Pagination>
  )
}

export default PaginationComponent;

PaginationComponent.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChangeCurrentPage: PropTypes.func.isRequired,
}

PaginationComponent.defaultProps = {
  currentPage: 1,
  totalPages: 1,
}
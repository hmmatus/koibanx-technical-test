import React, { useState, useEffect } from "react";
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({
  currentPage,
  totalPages,
}) => {

  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);

  const getItems = () => {
    let auxItems = [];
    for(let i = currentPage; i <= currentPage + 5; i++) {
    auxItems.push(
      <Pagination.Item key={i} active={active === i} onClick={() => onChangePage(i)}>
        {i}
      </Pagination.Item>
    )
    setItems(auxItems);
  }
}
const onChangePage = () => {

}

  useEffect(() => {
    getItems();
  });

  return  (
    <Pagination>
      <Pagination.First onClick={onChangePage(1)}/>
        {items}
        <Pagination.Ellipsis />
        <Pagination.Item onClick={onChangePage(totalPages)}>{totalPages}</Pagination.Item>
      <Pagination.Last />
    </Pagination>
  )
}

export default PaginationComponent;

PaginationComponent.defaultProps = {
  currentPage: 1,
  totalPages: 1,
}
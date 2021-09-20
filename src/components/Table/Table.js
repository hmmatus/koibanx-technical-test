import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '../TableRow/TableRow';
import './index.css'

const Table = ({ data }) => {
  return <table className='table-container'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Comercio</th>
        <th>CUIT</th>
        <th>Concepto 1</th>
        <th>Concepto 2</th>
        <th>Concepto 3</th>
        <th>Concepto 4</th>
        <th>Concepto 5</th>
        <th>Concepto 6</th>
        <th>Balance Actual</th>
        <th>Activo</th>
        <th>Ultima Venta</th>
      </tr>
    </thead>
    <tbody>
    {data.map((item) => (
      <TableRow item={item} key={item.id}/>
    ))}
    </tbody>
  </table>
};

export default Table;

Table.popTypes = {
  data: PropTypes.arrayOf({

  }).isRequired
};
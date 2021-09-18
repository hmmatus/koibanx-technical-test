import React from 'react';

const TableRow = ({ item }) => (
  <tr>
    <td>{item?.id}</td>
    <td>{item?.commerce}</td>
    <td>{item?.cuit}</td>
    <td>{item?.concept1}</td>
    <td>{item?.concept2}</td>
    <td>{item?.concept3}</td>
    <td>{item?.concept4}</td>
    <td>{item?.concept5}</td>
    <td>{item?.concept6}</td>
    <td>{item?.balance}</td>
    <td>{item?.active}</td>
    <td>{item?.lastSell}</td>
  </tr>
)

export default TableRow;
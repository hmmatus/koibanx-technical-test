import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ActiveIcon = ({status}) => {
  return (<div className="status-icon" style={{backgroundColor: status ? 'green' : 'red'}}></div>)
}

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
    <td className="status-container">
      <ActiveIcon status={item?.active}/>
      {item?.active ? 'Activo' : 'Inactivo'}
      </td>
    <td>{item?.lastSell}</td>
  </tr>
)

export default TableRow;

TableRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    commerce: PropTypes.string,
    cuit: PropTypes.string,
    concept1: PropTypes.number,
    concept2: PropTypes.number,
    concept3: PropTypes.number,
    concept4: PropTypes.number,
    concept5: PropTypes.number,
    concept6: PropTypes.number,
    active: PropTypes.bool,
    lastSell: PropTypes.string,
  }),
};

TableRow.defaultProps = {
  item: {
    id: "",
    commerce: "",
    cuit: "",
    active: false,
    lastSell: "",
  }
};
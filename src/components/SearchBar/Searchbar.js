import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import './index.css';

const SearchBar = ({
  advancedSearchbar,
  handleOnSubmit
}) => {
  // State
  const [idSearchInput, setIdSearchInput] = useState('');
  const [commerceSearchInput, setCommerceSearchInput] = useState('');
  const [cuitSearchInput, setCuitSearchInput] = useState('');
  const [statusSearchInput, setStatusSearchInput] = useState(2);

  const handleOnChangeSearch = (index, value) => {
      switch(index) {
        case "id":
          setIdSearchInput(value);
          break;
        case "commerce":
          setCommerceSearchInput(value);
          break;
        case "cuit":
          setCuitSearchInput(value);
          break;
        case "status":
          setStatusSearchInput(value);
          break;
        default:
          console.log(value);
      }
    }
    const handleSubmitSearch = (event) => {
      event.preventDefault();
      handleOnSubmit({
        id: idSearchInput,
        commerce: commerceSearchInput,
        cuit: cuitSearchInput,
        status: statusSearchInput,
      }, true);
    }

    if (!advancedSearchbar) return null;

    return (
      <Form onSubmit={handleSubmitSearch} className="form-container">
        <Form.Group className="mb-3" controlId="formId">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" value={idSearchInput} onChange={(event) => handleOnChangeSearch('id', event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCommerce">
          <Form.Label>Commerce</Form.Label>
          <Form.Control type="text" value={commerceSearchInput} onChange={(event) => handleOnChangeSearch('commerce', event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCuit">
          <Form.Label>CUIT</Form.Label>
          <Form.Control type="text" value={cuitSearchInput} onChange={(event) => handleOnChangeSearch('cuit', event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formId">
          <Form.Label>Estado</Form.Label>
          <Form.Check
            required
            type="radio"
            id="true-checkbox"
            name="group1"
            label="Activo"
            value={statusSearchInput}
            onChange={() => handleOnChangeSearch('status', true)} />
          <Form.Check
            required
            type="radio"
            id="false-checkbox"
            label="Inactivo"
            name="group1"
            value={statusSearchInput}
            onChange={() => handleOnChangeSearch('status', false)} />
        </Form.Group>
        <Button type="submit">Buscar</Button>
      </Form>
    )
};

export default SearchBar;

SearchBar.propTypes = {
  advancedSearchbar: PropTypes.bool.isRequired,
  onChangeNormalSearch: PropTypes.func,
  onChangeAdvancedSearch: PropTypes.func,
};
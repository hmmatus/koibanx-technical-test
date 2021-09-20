import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ advancedSearchbar,
  onChangeAdvancedSearchBar,
  handleOnSubmit,
}) => {
  // State
  const [normalSearchInput, setNormalSearchInput] = useState('');
  const [idSearchInput, setIdSearchInput] = useState('');
  const [commerceSearchInput, setCommerceSearchInput] = useState('');
  const [statusSearchInput, setStatusSearchInput] = useState(2);

  // Components 
  const NormalSearchBar = () => {
    return <>
    <form onSubmit={handleOnSearchSubmit}>
      <input className="search-input" name="searchInput" type="text" placeholder="Puedes buscar por ID, comercio o CUIT" value={normalSearchInput} onChange={(event) => handleOnChangeSearch('',event.target.value)} />
      <input type="submit" value="Enviar" />
    </form>
    <button onClick={() => onChangeAdvancedSearchBar(true)}>Busqueda avanzada</button>
  </>
  };

  // Functions
  const AdvancedSearchBar =  () => {
    return <> 
      <form onSubmit={handleOnSubmit}>
        <label>ID 
        <input className="search-input" name="searchInput" type="text" placeholder="Puedes buscar por ID, comercio o CUIT" value={idSearchInput} onChange={(event) => handleOnChangeSearch('id',event.target.value)} />
        </label>
        <label>Commerce 
        <input className="search-input" name="searchInput" type="text" placeholder="Puedes buscar por ID, comercio o CUIT" value={commerceSearchInput} onChange={(event) => handleOnChangeSearch('commerce',event.target.value)} />
        </label>
        <label>Active
          <input id="active" name="status" type="radio" value={statusSearchInput} onChange={handleOnChangeSearch('status',0)}/>
          <input id="inactive" name="status" type="radio" value={statusSearchInput} onChange={handleOnChangeSearch('status',0)}/>
        </label>
      <input type="submit" value="Enviar" />
    </form>
    <button onClick={() => onChangeAdvancedSearchBar(false)}>Busqueda normal</button>
  </>
  };

  const handleOnChangeSearch = (index, value) => {
    console.log("🚀 ~ file: Searchbar.js ~ line 16 ~ handleOnChangeSearch ~ value", value);
      switch(index) {
        case "id":
          setIdSearchInput(value);
          break;
        case "commerce":
          setCommerceSearchInput(value);
          break;
        case "status":
          setStatusSearchInput(value);
          break;
        default:
          setNormalSearchInput(value);
      }
    }
  
    const handleOnSearchSubmit = (event) => {
      event.preventDefault();
      let data = {};
      if (advancedSearchbar) {
        data = {
          id: idSearchInput,
          commerce: commerceSearchInput,
          status: statusSearchInput
        }
      } else {
        data = {
          input: normalSearchInput
        }
      }
      handleOnSubmit(data);
  
    };


  return (
    <>
      {advancedSearchbar ? <AdvancedSearchBar/> : <NormalSearchBar /> }
    </>
  )
};

export default SearchBar;

SearchBar.propTypes = {
  advancedSearchbar: PropTypes.bool.isRequired,
  onChangeNormalSearch: PropTypes.func,
  onChangeAdvancedSearch: PropTypes.func,
};
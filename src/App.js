import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table/Table';
import tableData from './constants/tableData.json';
const App = () => {
  // State
   const [data, setData] = useState([]);
   const [searchValue, setSearchValue] = useState('');

   // Functions
   const handleOnChangeSearch = (event)  => {
     setSearchValue(event.target.value);
   }

   const handleOnSumit = (event) => {
    event.preventDefault();
     const data = tableData.data;
     if (searchValue !== '') {
       const newArray = data.filter((commerce) => {
        return commerce?.id.indexOf(searchValue) > -1 || commerce?.commerce.indexOf(searchValue) > -1 || commerce?.cuit.indexOf(searchValue) > -1
       });
       console.log("🚀 ~ file: App.js ~ line 22 ~ newArray ~ newArray", newArray);     
       setData(newArray);
    } else {
      setData(tableData.data);
    }
    console.log(searchValue);
   };
   
   // useEffect
   useEffect(() => {
    setData(tableData.data);
   },[]);

  return (
    <div className="App">
      <header className="App-Header"></header>
      <div className="searchbar-container">
        <form onSubmit={handleOnSumit}>
          <input className="search-input" name="searchInput" type="text" placeholder="Puedes buscar por ID, comercio o CUIT" value={searchValue} onChange={handleOnChangeSearch} />
          <input type="submit" value="Enviar" />
        </form>
      </div>
      <div className="table-container">
        <Table data={data} />
      </div>
    </div>
  );
}

export default App;

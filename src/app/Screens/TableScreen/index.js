import React, { useState, useEffect } from 'react';
import './index.css';
import Table from '../../../components/Table/Table';
import tableData from '../../../constants/tableData.json';
import SearchBar from '../../../components/SearchBar/Searchbar';
const TableScreen = () => {
  // State
   const [data, setData] = useState([]);
   const [advancedSearch, setAdvancedSearch] = useState(false);


   const handleOnSubmit = (formData) => {
   console.log("🚀 ~ file: index.js ~ line 14 ~ handleOnSubmit ~ formData", formData);
    const searchValue = formData?.input ? formData?.input : formData?.id
     const data = tableData.data;
     if (searchValue !== '') {
       const newArray = data.filter((commerce) => {
       console.log("🚀 ~ file: index.js ~ line 18 ~ newArray ~ commerce", `SearchValue ${searchValue} includes ${commerce?.id.includes(searchValue)}`)
        return commerce?.id.includes(searchValue) || commerce?.commerce.includes(searchValue) || commerce?.cuit.includes(searchValue)
       });   
       setData(newArray);
    } else {
      setData(tableData.data);
    } 
   };

   // useEffect
   useEffect(() => {
    setData(tableData.data);
   },[]);

  return (
    <div className="App">
      <div className="searchbar-container">
        <SearchBar advancedSearchbar={advancedSearch} onChangeAdvancedSearchBar={(status) => setAdvancedSearch(status)} handleOnSubmit={(data) => handleOnSubmit(data)}/>
      </div>
      <div className="table-container">
        <Table data={data} />
      </div>
    </div>
  );
}

export default TableScreen;

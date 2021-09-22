import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import './index.css';
import TableComponent from '../../../components/Table/Table';
import tableData from '../../../constants/tableData.json';
import SearchBar from '../../../components/SearchBar/Searchbar';
import PaginationComponent from '../../../components/Pagination/Pagination';
const TableScreen = () => {
  // State
   const [data, setData] = useState([]);
   const [advancedSearch, setAdvancedSearch] = useState(false);
   const [localLoading, setLocalLoading] = useState(false);


   const handleOnSubmit = (formData) => {
     // setLocalLoading(true);
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

   // Funcion que simula la llamada a la api
   const tableQuery = () => {

   }

   const onChangeCurrentPage = (page) => {

   }

   // useEffect
   useEffect(() => {
     setData(tableData);
    console.log("🚀 ~ file: index.js ~ line 43 ~ useEffect ~ tableData", tableData);
   },[]);

  return (
    <div className="table-container">
      {!localLoading ? <>
      <div className="searchbar-container">
        <SearchBar advancedSearchbar={advancedSearch} onChangeAdvancedSearchBar={(status) => setAdvancedSearch(status)} handleOnSubmit={(data) => handleOnSubmit(data)}/>
      </div>
      <div className="table-container">
        <TableComponent data={data.data} />
      </div>
      <div className="pagination-container">
        <PaginationComponent currentPage={data?.page} totalPages={data?.pages}/>
      </div>
      </> : <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>}
    </div>
  );
}

export default TableScreen;

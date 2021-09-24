import React, { useState, useEffect, useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import './index.css';
import TableComponent from '../../../components/Table/Table';
import tableData from '../../../constants/tableData.json';
import SearchBar from '../../../components/SearchBar/Searchbar';
import PaginationComponent from '../../../components/Pagination/Pagination';
import {selectAllFromTable, getQuery} from '../../../api/TableQuery';

// Context
import { Context } from '../../../context'
const TableScreen = () => {
  const {
    data,
    setData
  } = useContext(Context);

  // State
   const [currentData, setCurrentData] = useState([]);
   const [advancedSearch, setAdvancedSearch] = useState(false);
   const [localLoading, setLocalLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(tableData?.page || 1);


   const handleOnSubmit = async (formData) => {
   console.log("🚀 ~ file: index.js ~ line 27 ~ handleOnSubmit ~ formData", formData);
    setLocalLoading(true);
    setData({
      ...data,
      searchData: {
        ...formData
      },
      page: currentPage,
    });
    const queryResponse = await getQuery({
      ...formData?.data,
      page: currentPage
    });
    if (queryResponse?.status !== 'error') {
      // setCurrentData(queryResponse?.data);
      console.log('Query Success');
    } else {
      alert('There was an error with the query, try later');
    }
    setLocalLoading(false);
   };

   const onChangeCurrentPage = (page) => {
    setCurrentPage(page);
   }

   // useEffect
   useEffect(() => {
     selectAllFromTable();
     setCurrentData(tableData);
     setData({
       ...tableData,
     });
     setLocalLoading(false);
   },[]);

   useEffect(() => {
    handleOnSubmit(data?.searchData);
   },[currentPage]);

  return (
    <div className="table-container">
      {!localLoading ? <>
      <div className="searchbar-container">
        <SearchBar advancedSearchbar={advancedSearch} onChangeAdvancedSearchBar={setAdvancedSearch} handleOnSubmit={handleOnSubmit}/>
        <br />
        <Button variant={advancedSearch ? "outline-primary" : "primary"} onClick={() => setAdvancedSearch((current => !current))}>Busqueda Avanzada</Button>
      </div>
      <div className="table-container">
        <TableComponent data={currentData.data} />
      </div>
      <div className="pagination-container">
        <PaginationComponent onChangeCurrentPage={(current) => onChangeCurrentPage(current)} currentPage={currentPage} totalPages={currentData?.pages}/>
      </div>
      </> : <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>}
    </div>
  );
}

export default TableScreen;

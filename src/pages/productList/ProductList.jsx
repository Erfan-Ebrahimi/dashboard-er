import React , {useState} from 'react';
import { Link } from 'react-router-dom';

import "./productList.scss";

import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import {productRows} from "../../dummyData"; //rows hara az dummy gereftim v anra dar data  set kardim v be datagrid dadim



const ProductList = () => {

  const[data , setData] = useState(productRows);
  
  const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id ));
      console.log("dddddddddd")
    };
  
    const columns= [
      {field: 'id', headerName: 'ID', width: 70,headerClassName:"fi",cellClassName: 'fe', },
      {field: 'product',headerName: 'Product',width: 170, renderCell: (params) => {
        return (
          <div className="list">
            <img className='listImg' src={params.row.img} alt="imgUser"/>
            <p className='listTitle'>{params.row.name}</p>
          </div>
        );
      },headerClassName:"fi",cellClassName: 'fe'},
      {field: 'stock', headerName: 'Stock', width: 240 , headerClassName:"fi",cellClassName: 'fe'},
      {field: 'status',headerName: 'Status', width: 90,headerClassName:"fi" ,cellClassName:"fe"},
      {field: 'price',headerName: 'Price',width: 160,headerClassName:"fi" ,cellClassName: 'fe'},
      {field: 'action',headerName: 'Action', width: 90,headerClassName:"fi" ,cellClassName: 'fe', renderCell:(params) => {
        return (
          <div className='actionList'>
            <Link to={"/product/"+params.row.id}>
              <button className='alButton'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='alIcon' onClick={() => handleDelete(params.row.id)}/>
          </div>
        )
      }},
  
    ];  

  return (
    <div className='productList'>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      /> 
    </div>
  )
}

export default ProductList;
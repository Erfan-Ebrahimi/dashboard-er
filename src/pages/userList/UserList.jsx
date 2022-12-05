import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import "./userList.scss";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {userRows} from "../../dummyData"; //rows hara az dummy gereftim v anra dar data  set kardim v be datagrid dadim



const UserList = () => {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id ));
    console.log("dddddddddd")
  };

  const columns= [
    {field: 'id', headerName: 'ID', width: 70,headerClassName:"fi",cellClassName: 'fe', },
    {field: 'username',headerName: 'Username',width: 170, renderCell: (params) => {
      return (
        <div className="list">
          <img className='listImg' src={params.row.avatar} alt="imgUser"/>
          <p className='listTitle'>{params.row.username}</p>
        </div>
      );
    },headerClassName:"fi",cellClassName: 'fe'},
    {field: 'email', headerName: 'Email', width: 240 , headerClassName:"fi",cellClassName: 'fe'},
    {field: 'status',headerName: 'Status', width: 90,headerClassName:"fi" ,cellClassName:"fe"},
    {field: 'transaction',headerName: 'Transaction',width: 160,headerClassName:"fi" ,cellClassName: 'fe'},
    {field: 'action',headerName: 'Action', width: 90,headerClassName:"fi" ,cellClassName: 'fe', renderCell:(params) => {
      return (
        <div className='actionList'>
          <Link to={"/user/"+params.row.id}>
            <button className='alButton'>Edit</button>
          </Link>
          <DeleteOutlineIcon className='alIcon' onClick={() => handleDelete(params.row.id)}/>
        </div>
      )
    }},

  ];
  

  return (
    <div className='userList'>
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

export default UserList;
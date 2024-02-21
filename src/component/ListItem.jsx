import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getDetails } from '../features/loan/loanSlice';

const ListItem = ({ loan }) => {

    const dispatch = useDispatch()

    const detailHandler = (id)=>{
    dispatch(getDetails(id))
    }
   

    return (
        <li className="list-group-item rounded-0 my-2 mx-2">{loan.firstName}
           <Link to={"/detail"} className="btn btn-danger float-end rounded-0 btn-sm" onClick={()=>detailHandler(loan._id)}>view details </Link>
        
           

        </li>

        
            
        

    )
}

export default ListItem

import React, { useEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { getAllloans } from '../features/loan/loanSlice'


const ListGroup = () => {

const dispatch = useDispatch()

const {allLoans} = useSelector((state)=> state.loan)

useEffect(()=>{
dispatch(getAllloans())
},[])


  return (
   <ul className="list-group my-3">
    
   {
    allLoans.map((loan)=>  <ListItem key={loan._id} loan={loan}/>)
   }
   </ul>
  )
}

export default ListGroup

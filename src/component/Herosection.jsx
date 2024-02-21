import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDetails } from '../features/loan/loanSlice'

const Herosection = () => {
  const dispatch = useDispatch()
  const { detail, allLoans } = useSelector((state) => state.loan)
  

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(
    detail
  );

  const [showLink, setshowLink] = useState(false)



  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    showLink ? setshowLink(false) : setshowLink(true)
    const results = allLoans.filter((item) => {
      const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  };


  const detailHandler = (id) => {
    console.log(id);
    dispatch(getDetails(id))
  }



  return (
    <>

      <div className="container p-3 text-center">
        <h2 className='mb-4'>LUCKY SOLUTIONS</h2>
        <h3>About</h3>
        <p>Lucky Solutions is a leading financial technology company dedicated to revolutionizing the lending industry. With our innovative loan management platform, we empower lenders to streamline their operations, enhance customer experiences, and drive financial inclusivity.</p>
      </div>

      <form className='d-flex' onSubmit={handleSubmit}>
       
        <input class="form-control me-2"
         type="search"
         value={searchTerm}
         onChange={handleChange}
          placeholder="Search by Name" 
          aria-label="Search"/>
        <button class="btn btn-outline-success rounded-0" type="submit">Search</button>
      </form>

      <div>
        {
          showLink ? (searchResults.map((item) => (
            <li className="list-group-item rounded-0 my-2 mx-2" key={item._id}>{item.firstName}
              <Link to={"/detail"} className="btn btn-danger float-end rounded-0 btn-sm" onClick={() => detailHandler(item._id)}>view details </Link>
            </li>
          ))) : <></>
        }
      </div>

    
      <div className="container my-3">
        <h5>Total Number. Of Loan Holders :- {allLoans.length} </h5>



      </div>








    </>
  )

}
export default Herosection

















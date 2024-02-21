import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createLoan } from '../features/loan/loanSlice'
import { useNavigate } from 'react-router-dom'

const Newloanholder = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    contact: "",
    Email: "",
    street: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",
    bankName: "",
    accountNumber: "",
    IRFCCode: "",
    loanAmount: "",
    installments: "",
    totalLoanDuration: "",
    interestRate: "",
    month: "",
    year: ""
  })

  const { firstName, lastName, dateOfBirth, contact, Email, street, postalCode, city, state, country,
    bankName, accountNumber, IRFCCode, loanAmount, installments, totalLoanDuration, interestRate, month,
    year } = formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createLoan(formData))
    navigate("/")
    // console.log( formData);
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h5>Personal Informaton :-</h5>
        <span className='d-flex '>
          <input type="text"
            required
            className="form-control w-50 rounded-0 "
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={handleChange} />

          <input type="text"
            required
            className="form-control w-50 mx-2 rounded-0"
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={handleChange}
          />


        </span>
        <input type="date"
          required
          className="form-control s rounded-0 my-3"
          placeholder='D.O.B'
          name='dateOfBirth'
          value={dateOfBirth}
          onChange={handleChange}
        />
        <input type="number"
          required
          className="form-control rounded-0 my-3"
          placeholder='Contac No.'
          name='contact'
          value={contact}
          onChange={handleChange}
        />
        <input type="email"
          required
          className="form-control rounded-0 my-3"
          placeholder='Email'
          name='Email'
          value={Email}
          onChange={handleChange}
        />
        <h5>Address</h5>

        <span className='d-flex'>
          <input type="text"
          required
          className="form-control rounded-0 mx-2 my-2"
            placeholder='street'
            name='street'
            value={street}
            onChange={handleChange} />

          <input type="number"
          required
          className="form-control rounded-0 mx-2 my-2"
            placeholder='postal code'
            name='postalCode'
            value={postalCode}
            onChange={handleChange}
          />

        </span>

        <span className='d-flex'>

          <input type="text"
          required
          className="form-control w-50 rounded-0 mx-2"
            placeholder='city'
            name='city'
            value={city}
            onChange={handleChange} />

          <input type="text"
          required
          className="form-control w-50 rounded-0 mx-2"
            placeholder='state'
            name='state'
            value={state}
            onChange={handleChange}
          />

        </span>
        <input type="text"
          required
          className="form-control rounded-0 w-90 mx-2 my-2"
          placeholder='country'
          name='country'
          value={country}
          onChange={handleChange} />

        <span>
          <h5>Bank Details :-</h5>
          <input type="text"
          required
          className="form-control s rounded-0 my-3"
            placeholder='Bank Name'
            name='bankName'
            value={bankName}
            onChange={handleChange} />

          <input type="number"
          required
          className="form-control s rounded-0 my-3"
            placeholder='Account Number'
            name='accountNumber'
            value={accountNumber}
            onChange={handleChange}
          />

          <input type="text"
          required
          className="form-control s rounded-0 my-3"
            placeholder='IFSC Code'
            name='IRFCCode'
            value={IRFCCode}
            onChange={handleChange}
          />

        </span>
        <h5>Loan amount & Details :-</h5>
        <input type="number"
          required
          className="form-control s rounded-0 my-3"
          placeholder='Loan Amount'
          name='loanAmount'
          value={loanAmount}
          onChange={handleChange}
        />

        <input type="number"
          required
          className="form-control s rounded-0 my-3"
          placeholder='Installments'
          name='installments'
          value={installments}
          onChange={handleChange}
        />

        <input type="number"
          required
          className="form-control s rounded-0 my-3"
          placeholder='Total Loan Duration'
          name='totalLoanDuration'
          value={totalLoanDuration}
          onChange={handleChange}
        />

        <input type="number"
          required
          className="form-control s rounded-0 my-3"
          placeholder='Interest Rate'
          name='interestRate'
          value={interestRate}
          onChange={handleChange}
        />

        <span>
          <h5>Loan Allotment  :-</h5>
          <input type="date"
          required
          className="form-control s rounded-0 my-3"
            placeholder='Month'
            name='month'
            value={month}
            onChange={handleChange}
          />

          <input type="date"
          required
          className="form-control s rounded-0 my-3"
            placeholder='Date'
            name='year'
            value={year}
            onChange={handleChange}
          />



        </span>

        <button className="btn btn-success w-100 rounded-0">Create</button>

      </form>
    </>
  )
}

export default Newloanholder

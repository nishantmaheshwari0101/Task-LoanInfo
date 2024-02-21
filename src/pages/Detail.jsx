import React from 'react'
import { useSelector } from 'react-redux'



const Detail = () => {
  // const indianDOB = new Date({dateOfBirth}).toLocaleDateString('en-IN');
  // console.log(indianDOB);


  const {isLoading , isError , isSuccess , detail} = useSelector((state)=>state.loan)
  
  // console.log(detail.address.street)
  // console.log(detail);

  return (
    <>
     
     <div class="card" style={{width: "auto"}}>
  <div class="card-body">
    <h2 class="card-title text-center">Loan Holder Details</h2>
    {/* <h3 class="card-subtitle mb-2 text-body-secondary text-center"> {detail?.firstName} {detail?.lastName} </h3> */}

    <h4 class="card-subtitle mb-2 text-body-secondary">Personal details :-</h4>
    <h5 class="card-text"> Name :- {detail?.firstName} {detail?.lastName} </h5>
    <h5 class="card-text"> D.O.B :- {new Date(detail.dateOfBirth).toDateString("%d/%m/%y")} </h5>
    <h5 class="card-text"> Contact No. :-  {detail?.contact} </h5>
    <h5 class="card-text"> Email :-  {detail?.Email} </h5>
     
    <div className="container my-5">
    <h4 class="card-subtitle mb-2 text-body-secondary"> Address :-</h4>
    <h5 class="card-text"> street :-  {detail?.address?.street}  </h5>
    <h5 class="card-text"> city :-  {detail?.address?.city} </h5>
    <h5 class="card-text"> postalCode :-  {detail?.address?.postalCode} </h5>
    <h5 class="card-text"> state :-  {detail?.address?.state} </h5>
    <h5 class="card-text"> country :-  {detail?.address?.country} </h5>
    </div>

    <div className="container my-5">
    <h4 class="card-subtitle mb-2 text-body-secondary"> Bank Details :-</h4>
    <h5 class="card-text"> bankName :-  {detail?.bankDetails?.bankName}</h5>
    <h5 class="card-text"> accountNumber :- {detail?.bankDetails?.accountNumber} </h5>
    <h5 class="card-text"> IRFCCode :-   {detail?.bankDetails?.IRFCCode}</h5>
    </div>

    <div className="container my-5">
    <h4 class="card-subtitle mb-2 text-body-secondary"> Loan Amount & Details :-</h4>
    <h5 class="card-text"> loanAmount :-  {detail?.loanAmount}</h5>
    <h5 class="card-text"> installments :-  {detail?.installments} </h5>
    <h5 class="card-text"> totalLoanDuration :-  {detail?.totalLoanDuration} Year </h5>
    <h5 class="card-text"> interestRate :- {detail?.interestRate} % </h5>
    </div>

    {/* <div className="container my-5">
    <h4 class="card-subtitle mb-2 text-body-secondary"> Loan Allotment :-</h4>
    <h5 class="card-text"> Date Of Allotment :- {loanStartDate.month} </h5>
      </div> */}
    

    
    
    


    


    
    
  </div>
</div>




    </>
  )
}

export default Detail

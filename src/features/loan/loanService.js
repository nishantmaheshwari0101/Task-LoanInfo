import axios from "axios";
const API_URL = "api/loan"

const getAllLons = async()=>{
    const response = await axios.get(API_URL)
   const personDetails = response.data.map((person) =>(
    {
        firstName : person.firstName,
        _id : person._id,
    }
   ))
//    console.log(personDetails);
    return personDetails;
}

// const createLoanholder = async(formData)=>{
//     const response = await axios.post(API_URL , formData)
//     console.log( "hello" , response);
//     // return response.data
// }

const createLoanholder = async(formData)=>{
    // console.log(formData , "hello");
    const response = await axios.post(API_URL , formData)
    // console.log(response.data);
    return response.data
}

 const getDetail = async(id)=>{
 const response = await axios.get(`${API_URL}/${id}`)
//  console.log(response.data);
  return response.data

 }


const loanService = {
    getAllLons,
    createLoanholder,
    getDetail
}

export default loanService





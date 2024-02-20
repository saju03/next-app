import axios, { AxiosResponse } from "axios"

export const getResults = async ()=>{
    
        const data:AxiosResponse = await axios.get(`http://localhost:3000/api/get-search-id`)
      
}
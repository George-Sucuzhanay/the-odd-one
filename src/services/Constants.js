import axios from "axios";

export default async function SearchQueryResults(){
    try{
        const BASE_URL = `https://api.data.gov/ed/collegescorecard/v1/schools.json?&school.name=CUNY%20&page=0&api_key=${process.env.REACT_APP_API_KEY}`;
        
        const response = await axios.get(BASE_URL)
        return response
    }
    catch(error) {
        console.log(error)
    }
}
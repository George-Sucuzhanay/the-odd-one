import { useState, useEffect } from "react"
import SearchQueryResults from "../services/Constants"
import SetCollege from "./SetCollege"

function SearchColleges(){

    const [colleges, setColleges] = useState([])

    const gettingResults = async() => {
        const response = await SearchQueryResults()
        const { results } = response.data;
        setColleges(results)
    }
    useEffect(() => {
        gettingResults()
    }, [])


    if (!colleges.length) return <h3>Loading...</h3>;

    return (
        <ul style={{ marginTop: 25 }}>
            <h1>My Search</h1>
            
            {console.log(colleges)}

            {(colleges || []).map((college) => {
                const { school, latest } = college;
                return <SetCollege 
                        name={school.name} 
                        schoolUrl={school.school_url} 
                        state={school.state}
                        zip={latest.school.zip}
                        size={latest.student.size}
                        key={college.id} 
                        />
            })}

        </ul>
    )
}
export default SearchColleges;
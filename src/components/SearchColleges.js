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
        <div className="mainDiv">

            <h1>My Search</h1>

            {console.log(colleges)}


            <input className="myInput"placeholder="Enter College Name"type="text" id="fname" name="fname"/>
            <button type="button">Click Me!</button>
            <br></br>
            <br></br>
            <div className="main-div">
                 {(colleges || []).map((college, index) => {
                const { school, latest } = college;
                
                return (
                    <SetCollege 
                        name={school.name} 
                        schoolUrl={school.school_url} 
                        state={school.state}
                        zip={latest.school.zip.slice(0,5)}
                        size={latest.student.size}
                        coa={latest.cost.attendance.academic_year}
                        tuitionLowPublic={latest.cost.net_price.public.by_income_level["0-30000"]}
                        tuitionLowPrivate={latest.cost.net_price.private.by_income_level["0-30000"]}
                        percentFirst={String(latest.student.share_firstgeneration).slice(2,4)}
                        finaidLink={school.price_calculator_url}
                        key={index} 
                        />
                )
            })}
            </div>
           

        </div>
    )
}
export default SearchColleges;
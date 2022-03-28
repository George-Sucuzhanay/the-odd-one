import axios from "axios"
import { useState, useEffect } from "react"
import SetCollege from "./SetCollege"

function SearchColleges(){

    const [colleges, setColleges] = useState([])
    const [searchWord, setSearchWord] = useState("CUNY")

    useEffect(() => {
       
        gettingResults()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const gettingResults = async() => {
        try{
            const BASE_URL = `https://api.data.gov/ed/collegescorecard/v1/schools.json?&school.name=${searchWord}&page=0&api_key=${process.env.REACT_APP_API_KEY}`;
            
            const response = await axios.get(BASE_URL)
            const { results } = response.data;
            console.log(results)
            setColleges(results)
        }
        catch(error) {
            console.log(error)
        }
    }
   


    if (!colleges.length) return <h3>Loading...</h3>;

    return (
        <div className="mainDiv">

            <div className="search">
                <h1>Search for Colleges</h1>
                    <i class="fa-solid fa-magnifying-glass"></i>
                        <input value={searchWord} onChange={(e) => setSearchWord(e.target.value)} className="myInput" placeholder="Enter College Name"/>

                        <button id="searchButton" onClick={gettingResults}type="button">Click Me!</button>
            </div>

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
                        medianIncome={latest.earnings["10_yrs_after_entry"].consumer.overall_median}
                        key={index} 
                        />
                )
            })}
            </div>
           

        </div>
    )
}
export default SearchColleges;
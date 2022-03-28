const SetCollege = ({name, schoolUrl, state, zip, size, coa, tuitionLowPublic, tuitionLowPrivate, percentFirst, medianIncome, finaidLink}) => {

   
    return(

        <div className="searchDiv">
        
            <a href={schoolUrl} target="_blank" rel="noopener noreferrer">
                <h1 className="collegeName">{name}</h1>
            </a>
            <h2 className="subheading">{state}, {zip}</h2>
            <h2 className="subheading">College Size: {size}</h2>
            <div className="mainSubDiv">
                <div className="row">
                    <div className="innerDivItems">
                        <h3>Average Cost of Attendance:</h3>
                    </div>

                    <div className="innerDivItems">
                        <h3>{coa ? "$" + coa + "/per year" : "N/A"}</h3>
                    </div>

                </div>
                <div className="row">
                    <div className="innerDivItems">
                        <h3>Tuition for Low-Income:</h3>
                    </div>
                    <div className="innerDivItems">
                        <h3>{ tuitionLowPublic ? "$" + (tuitionLowPublic) : (tuitionLowPrivate)?  "$" + (tuitionLowPrivate): ("N/A")}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="innerDivItems">
                            <h3>% of First-Gen Population:</h3>
                            {/* <h3>% of First-Gen Who Graduate in 4 Yrs</h3>
                            */}
                    </div>
                    <div className="innerDivItems">
                        <h3>{percentFirst}%</h3>

                    </div>
                    
                </div>
                <div className="row">
                    <div className="innerDivItems">
                        <h3>Median Income After Graduation:</h3>
                        
                    </div>
                    <div className="innerDivItems">
                        <h3>${medianIncome}</h3>
                    </div>

                </div>
                <div className="row">
                    <div className="innerDivItems">
                        <h3>Financial Aid Calculator:</h3>
                    </div>
                    <div className="innerDivItems">
                        <h3><a href={finaidLink}>Link</a></h3>
                    </div>

                </div>
                <div className="row">
                    <div className="innerDivItems">

                    </div>
                    <div className="innerDivItems">

                    </div>

                </div>
            </div>
            

        </div>
     
    )
   
};
export default SetCollege;
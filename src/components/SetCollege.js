import { useEffect } from "react";
const SetCollege = ({name, schoolUrl, state, zip, size}) => {

    return(
        <div>
            
            <a href={schoolUrl} target="_blank" rel="noopener noreferrer">
                <h1>{name}</h1>
            
            </a>

            {/* <a href="https://example.com" target="_blank" rel="noopener noreferrer"> */}
          

            <h2>{state} {zip} {size}</h2>

        </div>
    )
   
};
export default SetCollege;
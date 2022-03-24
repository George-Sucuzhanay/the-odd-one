const SetCollege = ({name, schoolUrl, state, zip, size}) => {

    return(

        <div className="item">
        
            <a href={schoolUrl} target="_blank" rel="noopener noreferrer">
                <h1>{name}</h1>
            </a>
            <h2>{state} {zip} {size}</h2>

        </div>
     
    )
   
};
export default SetCollege;
import homeLogo from '../assets/homeLogo.png'

function Home() {
    return(
        <div className="homepage">
            <div className="homeDiv">
                <div className="homeSubDiv">
                    <img src={homeLogo}></img>
                </div>
                <div className="homeSubDiv subDiv">
                    <h1>The Odd One</h1>
                    <h3>Simplifies the college search</h3>
                    <h3>for first generation college</h3>
                    <h3>students</h3>
                </div>
            </div>
            <div className="homeDiv">

               <h1>Outside</h1>
            </div>
            
        </div>
    )
}
export default Home;
import homeLogo from '../assets/homeLogo.png'

function Home() {
    return(
        <div className="homepage">
            <div className="homeDiv">
                <div className="homeSubDiv">
                    <img alt="theOddOne Logo"src={homeLogo}></img>
                </div>
                <div className="homeSubDiv subDiv">
                    <h1>The Odd One</h1>
                    <h3>Simplifies the college search</h3>
                    <h3>for first generation college</h3>
                    <h3>students</h3>
                </div>
            </div>

            <div className="homeDiv">
                <div className="homeSubDiv">
                    <h1>Why use The Odd One?</h1>
                </div>
                <div className='homeSubDiv subDiv'>
                    <ul>
                        <li>Easily search for college's data</li>
                        <li>Find the college's school size</li>
                        <li>Compare colleges by search and location</li>
                    </ul>
                </div>

            </div>
            
        </div>
    )
}
export default Home;
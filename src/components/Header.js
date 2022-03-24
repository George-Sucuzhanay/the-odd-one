import logo from '../assets/logo.png'
function Header() {
    return(
        <div>
            <h1>This is my header</h1>
            <img src={logo} alt="The Odd One Logo" width="500"/>
        </div>
    )
}
export default Header;
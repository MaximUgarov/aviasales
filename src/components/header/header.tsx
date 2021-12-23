import logo from './Logo.png';
import './index.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" className='logo' />
        </div>
    );
};

export default Header;
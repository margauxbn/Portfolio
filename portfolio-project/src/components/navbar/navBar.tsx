import './navBar.css';
import logoNavBar from '../../assets/logo/logo-navbar.webp';

function NavBar() {

  return (
    <>
        <div className='navbar'>
            <div className='logo-navbar'>
                <img src={logoNavBar} alt='Logo où il est écrit MB' className='img-logo-navbar'/>
            </div>
            <div>
                <ul className='list-navbar'>
                    <li className='element-list-navbar'>présentation</li>
                    <li className='element-list-navbar'>projets</li>
                </ul>
            </div>            
        </div>
    </>
  )
}

export default NavBar

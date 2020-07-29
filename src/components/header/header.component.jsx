import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {auth} from "../../firebase/firebase.utils"
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropDown from "../cart-dropdown/cart-dropdown.component"
const Header = ({currentUser , hidden}) =>
(
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>

            <Link className='option' to='/contact'>
                Contact
            </Link>
            {
            currentUser ? 
            <div className="option" onClick={() => auth.signOut()}>
                Sign out
            </div>
            :
            <Link className="option" to="/signin">
                Sign in
            </Link>
        }
        <CartIcon />
        </div>
        {hidden? null : <CartDropDown />}
    </div>
)

const mapStateToProp = ( {user : {currentUser} , cart : {hidden}} ) =>
({
    currentUser,
    hidden
});


export default connect(mapStateToProp)(Header);
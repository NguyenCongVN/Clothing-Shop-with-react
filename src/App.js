import React from 'react';
import { Route , Switch , Redirect } from 'react-router-dom';
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCurrentUser} from "./redux/user/user.selector"
import './App.css';
import {HomePage} from './pages/homepage.component'
import ShopPage from './components/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'
import {auth , createUserProfile} from "./firebase/firebase.utils"
import {setCurrentUser} from "./redux/user/user.actions"
class App extends React.Component {
  unsubcribeFromAuth = null;

  componentDidMount()
  {
    const {setCurrentUser} = this.props;
    console.log(this.props);
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth)
    {
      const userRef = await createUserProfile(userAuth);
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          currentUser : {
          id : snapShot.id,
          ...snapShot.data()
        }})
      })
    }
    else
    {
      setCurrentUser(userAuth);
    }
  })

    
  }

  componentWillUnmount()
  {
    this.unsubcribeFromAuth();
  }

  render()
  {
    return (
      <div>
      <Header />
      <Switch>
        <Route exact path='/signin' 
        render={() => this.props.currentUser ? 
        (<Redirect to='/' />) : (<SignInAndSignUpPage />)} 
        />
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
      </div>
    );
  }
}

const mapStateToProp = createStructuredSelector
({
  currentUser : selectCurrentUser
})

const mapDispatchToProp = dispatch => 
({
  setCurrentUser : user => dispatch(
    setCurrentUser(user)
  )
})

export default connect(mapStateToProp , mapDispatchToProp )(App);

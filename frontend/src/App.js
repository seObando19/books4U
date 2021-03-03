import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './navBar';
import HomePage from './Home';
import BuyPage from './buy';
import DonatePage from './donate';
import ContactPage from './contact';
import LoginPage from './login';
import SignupPage from './signup';
import ForgotPage from './forgot';


function App() {
  return (
    <section className='main'>
      <NavBar></NavBar>
      <Switch >
        <Route exact path='/'>
          <HomePage></HomePage>
        </Route>
        <Route exact path='/buy'>
          <BuyPage></BuyPage>
        </Route>
        <Route exact path='/donate'>
          <DonatePage></DonatePage>
        </Route>
        <Route exact path='/contact'>
          <ContactPage></ContactPage>
        </Route>
        <Route exact path='/login'>
          <LoginPage></LoginPage>
        </Route>
        <Route exact path='/signup'>
          <SignupPage></SignupPage>
        </Route>
        <Route exact path='/forgot'>
          <ForgotPage></ForgotPage>
        </Route>
        <Route path='*'>
          <div className='not-found'>Error 404: <p>Page not found</p></div>
        </Route>
      </Switch>
    </section>
  );
}

export default App;

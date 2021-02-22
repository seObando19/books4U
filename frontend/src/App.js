import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './navBar';
import HomePage from './Home';
import BuyPage from './buy';
import DonatePage from './donate';
import ContactPage from './contact';




function App() {
  return (
    <Router>
      <section className='main'>
        <NavBar></NavBar>
        <Switch>
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
        </Switch>
      </section>
    </Router>
  );
}

export default App;

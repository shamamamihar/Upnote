
import './App.css';
import Header from "./components/Header/Header";
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route} from "react-router-dom";
import MyNotes from './screens/MyNotes/MyNotes';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import LoginPage from './screens/LoginPage/LoginPage';

const App = () => (

  <BrowserRouter>
  <Header/>

  <main>

  <Route path = '/' component={LandingPage} exact/>
  <Route path = '/login' component={LoginPage} exact/>
  <Route path = '/register' component={RegisterPage} exact/>
    <Route path = '/mynotes' component={MyNotes}/>
  </main>
  
  </BrowserRouter>
  

  );


export default App;

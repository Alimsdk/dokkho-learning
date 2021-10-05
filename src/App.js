import './App.css';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import NoResult from './components/NoResult/NoResult';
import Tutor from './components/Tutor/Tutor';
import Form from './components/Form/Form';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Home></Home>
        <Switch>
           <Route exact path='/'>
                 <Courses></Courses>
           </Route>
           <Route path='/home'>
                 <Courses></Courses>
           </Route>
           <Route path="/about">
              <About></About>
           </Route>
           <Route path="/about-us">
              <About></About>
           </Route>
           <Route path="/services">
             <Services></Services>
           </Route>
           <Route exact path="/tutor">
            <Tutor></Tutor>
           </Route>
           <Route path="/tutor/form">
            <Form></Form>
           </Route>
           <Route path="*">
           <NoResult></NoResult>
           </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

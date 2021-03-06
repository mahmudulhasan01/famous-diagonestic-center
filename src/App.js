import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Bill from './Components/Bill/Bill';
import Footer from './Components/Footer/Foooter';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Appointment from './Components/myAppointment/Appointment';
import MyReport from './Components/MyReport/MyReport';
import Navbar from './Components/Navbar/Navbar';
import Notfound from './Components/NotFound/NotFound';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import SingUp from './Components/SingUp/SingUp';
import AuthProvaider from './Contexts/AuthProvaider';

function App() {
  return (
    <div className="">
      <AuthProvaider>

          
      <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          {/* <Route exact path='/home:#services'>
            <Home></Home>
          </Route> */}
          <Route exact path='/login'>
          <Login></Login>
          </Route>
          <Route exact path='/singup'>
          <SingUp></SingUp>
          </Route>

          <PrivateRoute exact path='/service/:id'>
          <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute exact path='/appointment'>
          <Appointment></Appointment>
          </PrivateRoute>

          <PrivateRoute exact path='/report'>
          <MyReport></MyReport>
          </PrivateRoute>
          <PrivateRoute exact path='/billing'>
          <Bill></Bill>
          </PrivateRoute>

          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

      </AuthProvaider>
      
    </div>
  );
}

export default App;

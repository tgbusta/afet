import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AidScreen from "./Screens/AidScreen";
import DonationScreen from "./Screens/DonationScreen";
import RegionScreen from "./Screens/RegionScreen";
import UserScreen from "./Screens/UserScreen";
import NotFound from './Screens/NotFound';
import { Container } from "react-bootstrap";
import Navi from "./Components/Navi";
import Footer from "./Components/Footer";
import Login from "./Screens/Login";


function App() {
  return (
    <Router>
      <Navi />
      <Container
        className="shadow p-3 mb-5 rounded"
        
      >
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/home" component={HomeScreen} />
          <Route path="/aids" component={AidScreen} />
          <Route path="/donations" component={DonationScreen} />
          <Route path="/regions" component={RegionScreen} />
          <Route path="/users" component={UserScreen} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

  
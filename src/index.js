import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
// Pages
import App from './compoments/App';
import Contact from './compoments/Contact';
import Home from './compoments/Home';
import NotFound from './compoments/NotFound';
import Event from './compoments/Event';
import Party from './compoments/Party';
import Catering from './compoments/Catering';
import Dinner from './compoments/Dinner';
import About from './compoments/About';
import Footer from './compoments/Footer';
// navbar
import Navbar from './compoments/Navbar';
import NavbarBootstrap from './compoments/NavbarBootstrap';
import registerServiceWorker from './compoments/registerServiceWorker';

const Root = () => (
  <Router>
    <div className="">
      {/*  <Navbar /> */}
      <Navbar />
      <NavbarBootstrap />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/event" exact component={Event} />
        <Route path="/party" exact component={Party} />
        <Route path="/catering" exact component={Catering} />
        <Route path="/dinner" exact component={Dinner} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/store/:storeId" component={App} /> {/* means anything :storeId */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

render(<Root />, document.getElementById('root'));
registerServiceWorker();

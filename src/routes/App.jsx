import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

// Layouts
import Home from '../Layouts/Home/Home';

// Pages
import Dates from '../Pages/Dates/Dates';
import Detail from '../Pages/Detail/Detail';
import Welcome from '../Pages/Welcome/Welcome';

const App = () => {
  return(
    <BrowserRouter>
    <Home>
      <Switch>
        <Route exact path='/' component={Welcome}></Route>
        <Route exact path='/dates' component={Dates}></Route>
        <Route exact path='/detail' component={Detail}></Route>
      </Switch>
    </Home>
    </BrowserRouter>
  );
}

export default App;

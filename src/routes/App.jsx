import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

// Layouts
import Home from '../layouts/Home/Home';
import Detail from '../layouts/Detail/Detail';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/detail' component={Detail}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

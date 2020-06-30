import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component='Hello World'></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

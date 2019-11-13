import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import NotFound from './containers/NotFound/NotFound';
import Orders from './containers/Orders/Orders';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;

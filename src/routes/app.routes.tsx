import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Exit from '../components/Exit';
import List from '../pages/List';

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true} component={Dashboard} />
        <Route path="/dashboard" exact={true} component={Dashboard} />
        <Route path="/list/:type" exact={true} component={List} />
        <Route path="/exit" exact={true} component={Exit} />
      </Switch> 
    </Layout>
  )
}

export default AppRoutes;
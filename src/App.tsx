import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './containers/Layout/Layout';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
};

export default App;

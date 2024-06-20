import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Product Catalog</h1>
        <ProductForm />
        <ProductList />
      </div>
    </Provider>
  );
};

export default App;

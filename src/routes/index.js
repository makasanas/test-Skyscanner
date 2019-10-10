import { Route } from 'react-router-dom';
import Home from '../Containers/Home';
import About from './../Containers/About';
import Login from './../Containers/Login';
import Products from './../Containers/Products';
import ProductDetails from '../Containers/Products/ProductDetails';
import Cart from '../Containers/Cart';
import Forum from '../Containers/Forum/Forum';
import ProtectedRoute from './config/ProtectedRoutes';

export default [
  {
    type: Route,
    path: ['/'],    
    component: Home,
    exact: true,
  },
  {
    type: Route,
    path: ['/about'],
    component: About,
    exact: true,      
  },
  {
    type: Route,
    path: ['/login'],
    component: Login,
    exact: true,      
  },
   {
    type: Route,
    path: ['/products'],
    component: Products,
    exact: true,
  },
  {
    type: Route,
    path: ['/products/:productId'],
    component: ProductDetails,
    exact: true,
  },
  {
    type: Route,
    path: ['/cart'],
    component: Cart,
    exact: true,
  },
  {
    type: Route,
    path: ['/forum'],
    component: Forum,
    exact: true,
  },
  {
    type: ProtectedRoute,
    path: ['/secure'],
    component: Cart,
    exact: true,
  }
];

import { createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx';
import Start from './routes/Start.jsx'
import Admin from './routes/Admin.jsx';
import Products from './routes/Products.jsx';
import Cart from './routes/Cart.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Users from './components/Users.jsx';
import AddProducts from './components/AddProducts.jsx';
import ProductDetail from './components/ProductDetail.jsx';


const router = createHashRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Start />
            },
            {
                path: 'Products',
                element: <Products />
            },
            {
                path: 'Admin',
                element: <Admin />
            },
            {
                path: 'Cart',
                element: <Cart />
            },
            {
                path: 'Users',
                element: <Users />
            },
            {
                path: 'Product/:id',
                element: <ProductDetail />
            },
            {
                path: 'AddProducts',
                element: <AddProducts />
            }
        ],
        errorElement: <ErrorPage />
    }
]);


// TODO Glöm inte att importera loader när det är dags
export default router
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx';
import Start from './routes/Start.jsx'
import Admin from './routes/Admin.jsx';
import ProductGrid from './routes/ProductGrid.jsx';
import Cart from './routes/Cart.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Users from './components/Users.jsx';
import Products from './components/Products.jsx';
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
                path: 'ProductGrid',
                element: <ProductGrid />
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
                path: 'Products',
                element: <Products />
            }
        ],
        errorElement: <ErrorPage />
    }
]);


// TODO Glöm inte att importera loader när det är dags
export default router
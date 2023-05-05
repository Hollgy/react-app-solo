import { createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx';
import Start from './routes/Start.jsx'
import Admin from './routes/Admin.jsx';
import ProductGrid from './routes/ProductGrid.jsx';
import Cart from './routes/Cart.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import AdminPage from './routes/AdminPage.jsx';
import Register from './components/Register.jsx';


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
                path: 'AdminPage',
                element: <AdminPage />
            },
            {
                path: 'Cart',
                element: <Cart />
            },
            {
                path: 'Register',
                element: <Register />
            }
        ],
        errorElement: <ErrorPage />
    }
]);


// TODO Glöm inte att importera loader när det är dags
export default router
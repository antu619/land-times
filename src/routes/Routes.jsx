import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('news.json')
            },
            {
                path: '/news/:id',
                element: <News />
            }
        ]
    }
]);

export default routes;
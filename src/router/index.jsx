import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/login/login";
import Main from "../pages/main/main"
import Albums from "../pages/albums/albums"
import Comments from "../pages/comments/comments"
import Newproject from "../pages/newproject/newproject";
import Product from "../pages/product/product";
const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
            <Route index element={<Login/>}/>
            <Route path="main/*" element={<Main/>}>
            <Route path="albums" element={<Albums/>}/>
            <Route path="comments" element={<Comments/>}/>
            <Route path="product" element={<Product/>}/>
            </Route>
             </Route>
        )
    );
    return <RouterProvider router={router}/>
};
export default Index;

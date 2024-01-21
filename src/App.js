import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Footer from "./component/Footer.js";
import RestaurantMenu from "./component/RestaurantMenu";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./component/Cart.js";



function App(){
    return(
        <>
        <Provider store={appStore}>
        <Header/>
        <Outlet/>
        <Footer/>
        </Provider>
        </>
    )
}
const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[

            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
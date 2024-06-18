import Home from "../Pages/Home";
import MainAdmin from "../Pages/admin/dashboard";
import AdminProduct from "../Pages/admin/dashboard/ProductPage";
import AdminSettings from "../Pages/admin/dashboard/SettingsPage";
import ProductGrid from "../components/Home/Product/grid";
import AddCreds from "../components/auth/addcreds";
import SignIn from "../components/auth/signup";

  
  
  export function RootRoute(){
    const routes = [
        { path: '/', element: ''},
        { path: "*", element: '' },
    ];
    return routes
  }
  export const AuthRoute= (user, isLogged , setLogged ,  setLoading)=>{
      const routes =[
           { path: '/login' , element:<SignIn  setLogged={setLogged}
           isLogged={isLogged}
           setLoading={setLoading}/>} ,
           { path: '/signIn/addCreds' , element:<AddCreds user={user}/>} ,
           { path: '/', element: <Home/>},
           { path: '/dash/home', element: <MainAdmin/>},
           { path: '/dash/product', element: <AdminProduct userData={user}/>},
           { path: '/dash/settings', element: <AdminSettings/>},
       ]
       return routes
  }
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./page/Home";
import Landing from "./page/Landing";
import Products, { loder as loderproducts } from "./page/Products";
import Customers from "./page/Customers";
import Reports from "./page/Reports";
import Settings from "./page/Settings";
import Addproduct, {
  action as actionpostdataproduct,
  loder as lodearQuerycatogers,
} from "./page/Addproduct";
import { loader as getCategorislodeaer } from "./page/Categories";
import { action as actionDeleteProduct } from "./components/ProductT";
import { loader as loderdataedit } from "./page/Editproduct";
import { action as deleaetCategery } from "./components/CategroiesT";
import Editproduct from "./page/Editproduct";
import Categories from "./page/Categories";
import AddCategories from "./page/AddCategories";
import { action as actionAddCategero } from "./page/AddCategories";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { action as actionLoginform } from "./components/FormAouth";
import { action as actionregester } from "./page/Auth/Regester";
import { loder as lodergetUser } from "./page/Profile";
import { action as actionModelData } from "./components/Model";
import { loder as getQueryCustemor } from "./page/Customers";
import { action as actionProductEidt } from "./page/Editproduct";
import { loader as getdatauserId } from "./page/EditCustomer";
import { action as posUpduetuser } from "./page/EditCustomer";
import { loder as getOrderLoderCusetmor } from "./page/CustomersOrder";
import { loader as lodergetorderID } from "./page/EditStuetOredor";
import { action as actionOrderEditStues } from "./page/EditStuetOredor";
import { loder as getloderUsers } from "./page/Users";
import { action as actionAddUser } from "./page/AddUser";
import Error from "./page/Error";
import { store } from "./stor";
import Login from "./page/Auth/Login";
import Regester from "./page/Auth/Regester";
import ProtectedRout from "./page/Auth/ProtectedRout";
import Landeing from "./page/Auth/Landeing";
import Profile from "./page/Profile";
import CustomersOrder from "./page/CustomersOrder";
import Users from "./page/Users";
import Errors from "./page/Errors";
import EditCustomer from "./page/EditCustomer";
import { action as deletIDcustomerid } from "./components/CustamarT";
import EditStuetOredor from "./page/EditStuetOredor";
import AddUser from "./page/AddUser";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 6,
    },
  },
});
const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRout>
        <Home />
      </ProtectedRout>
    ),
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <Errors />,
        // loader:
      },
      {
        path: "Products",
        element: <Products />,
        errorElement: <Errors />,
        loader: loderproducts(store),
      },
      {
        path: "products/:IDproduct/Delete",
        element: <Products />,
        errorElement: <Errors />,
        action: actionDeleteProduct(store),
      },
      {
        path: "Addproduct",
        element: <Addproduct />,
        errorElement: <Errors />,
        action: actionpostdataproduct(store),
        loader: lodearQuerycatogers(store),
      },
      {
        path: "products/:IDproduct",
        element: <Editproduct />,
        errorElement: <Errors />,
        loader: loderdataedit(store),
        action: actionProductEidt(store),
      },
      {
        path: "Categories",
        element: <Categories />,
        errorElement: <Errors />,
        loader: getCategorislodeaer(queryClient, store),
      },
      {
        path: "categories/:IDproduct/Delete",
        element: <Categories />,
        errorElement: <Errors />,
        action: deleaetCategery(store),
      },
      {
        path: "AddCategories",
        element: <AddCategories />,
        errorElement: <Errors />,
        action: actionAddCategero(store),
      },
      {
        path: "Customers",
        element: <Customers />,
        errorElement: <Errors />,
        loader: getQueryCustemor(store),
      },
      {
        path: "User/:IDuser",
        element: <EditCustomer />,
        errorElement: <Errors />,
        loader: getdatauserId(queryClient, store),
        action: posUpduetuser(queryClient, store),
      },
      {
        path: "User/:IDuser/Delete",
        element: <Customers />,
        errorElement: <Errors />,
        action: deletIDcustomerid(store),
      },
      {
        path: "Reports",
        element: <Reports />,
        errorElement: <Errors />,
        // loader:
      },
      {
        path: "/Profile",
        element: <Profile />,
        errorElement: <Errors />,
        loader: lodergetUser(store),
        action: actionModelData(store),
      },
      {
        path: "CustomersOrder",
        element: <CustomersOrder />,
        loader: getOrderLoderCusetmor(store),
      },
      {
        path: "CustomersOrder/:IDCustomersOrder",
        element: <EditStuetOredor />,
        loader: lodergetorderID(store),
        action: actionOrderEditStues(store),
      },
      {
        path: "Users",
        element: <Users />,
        loader: getloderUsers(store),
      },
      {
        path: "AddUsers",
        element: <AddUser />,
        action: actionAddUser(store),
      },
      {
        path: "Settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/Landeing",
    element: <Landeing />,
  },
  {
    path: "/Login",
    element: <Login />,
    action: actionLoginform(store),
  },
  {
    path: "/Regester",
    element: <Regester />,
    action: actionregester(store),
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </>
  );
}

export default App;

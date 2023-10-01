import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Components/Home/Home";
import Donation from "../Components/Donation/Donation";
import Statistics from "../Components/Statistics/Statistics";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import CardDetails from "../Components/CardDetails/CardDetails";

 
const myCreateRouter = createBrowserRouter([
  {
    path: '/',
    element:  <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        loader: () => fetch('Data.json'),
        element : <Home></Home>
      },
      {
        path: '/donation',
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/homecard/:id',
        element: <CardDetails></CardDetails>,
        loader: ()=> fetch('Data.json'),
      }
    ]
  }
])
 

export default myCreateRouter;
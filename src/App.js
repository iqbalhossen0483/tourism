import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import AddService from "./Component/AddService/AddService";
import NotFound from "./Component/NotFound/NotFound";
import PlaceOrder from "./Component/PlaceOrder/PlaceOrder";
import Services from "./Component/ServicesPage/Services";
import ManageOrder from "./Component/ManageOrder/ManageOrder";
import LogIn from "./Component/Firebase/LogIn";
import SignUp from "./Component/Firebase/SignUp";
import PrivateRouter from "./Component/Firebase/PrivateRouter";
import MyOrder from "./Component/MyOrder/MyOrder";
import Blog from "./Component/Blog";
import AddBlog from "./Component/AddBlog";
import BlogDetails from "./Component/BlogDetails";
import Desboard from "./Component/Desboard";
import Footer from "./Component/Footer/Footer";
function App() {
  const location = useLocation();
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<PrivateRouter element={<Blog />} />} />
        <Route
          path='/blogs/:id'
          element={<PrivateRouter element={<BlogDetails />} />}
        />
        <Route
          path='/add-blog'
          element={<PrivateRouter element={<AddBlog />} />}
        />
        <Route
          path='/place-order/:id'
          element={<PrivateRouter element={<PlaceOrder />} />}
        />
        <Route path='/services' element={<Services />} />

        <Route path='/admin' element={<PrivateRouter element={<Desboard />} />}>
          <Route
            path='manage-orders'
            element={<PrivateRouter element={<ManageOrder />} />}
          />
          <Route
            path='add-service'
            element={<PrivateRouter element={<AddService />} />}
          />
        </Route>

        <Route path='/sign-in' element={<LogIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route
          path='/my-order'
          element={<PrivateRouter element={<MyOrder />} />}
        />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      {!/^\/admin/.test(location.pathname) && <Footer />}
    </div>
  );
}

export default App;

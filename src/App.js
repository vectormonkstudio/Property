import React from "react";
import { useScroll } from "./utils";
import { Header, Landing, Introduction, AboutPartner, Footer, OrderItem, } from './components';
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import HomePage5 from "./HomePage5/HomePage5";
import Buy from "./Buy/Buy";
import Rent from "./Rent/Rent";
import Share1 from "./Share1/Share1";
import Share2 from "./Share2/Share2";
import ProductDetailsForSell from "./ProductDetailsForSell/ProductDetailsForSell";
import AddNewProperty from "./AddNewProperty/AddNewProperty";
import AddNewProperty2 from "./AddNewProperty2/AddNewProperty2";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import StudentAccommodation from "./StudentAccommodation/Student Accommodation";
import Commercial from "./Commercial/Commercial";

function App() {
  const [scrollToContent, contentRef] = useScroll()

  return (
    <div className="box-border">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage5 />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/share1" element={<Share1 />} />
          <Route path="/share2" element={<Share2 />} />
          <Route path="/product_details_for_sell" element={<ProductDetailsForSell />} />
          <Route path="/add_new_property" element={<AddNewProperty />} />
          <Route path="/add_new_property2" element={<AddNewProperty2 />} />

          
          <Route path="/student_accommodation" element={<StudentAccommodation />} />
          <Route path="/commercial" element={<Commercial />} />







        </Routes>
      </BrowserRouter>





      {/* <HomePage5 /> */}

      {/* <HomePage5/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <Buy/> */}
      {/* <Rent/> */}
      {/* <Share1/> */}
      {/* <Share2/> */}
      {/* <ProductDetailsForSell /> */}
      {/* <AddNewProperty /> */}
      {/* <AddNewProperty2/> */}
      {/* <Introduction/> */}
      {/* <SubCategories/> */}
      {/* <StudentAccommodation /> */}
      {/* <Commercial/> */}









      <Footer />






    </div>
  );
}

export default App;

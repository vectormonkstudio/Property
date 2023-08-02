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
import ParkingForSale from "./ParkingForSale/ParkingForSale";
import HollidayHouse from "./HollidayHouse/HollidayHouse";
import ProductDetailsForRent from "./ProductDetailsForRent/ProductDetailsForRent";
import ActiveAd from "./AllAds/ActiveAd";
import MyAds from "./AllAds/MyAds";
import Sold from "./AllAds/Sold";
import Expired from "./AllAds/Expired";
import SavedSearches from "./SavedSearches/SavedSearches";
import Message from "./Message/Message";
import Message_1 from "./Message_1/Message_1";
import Profile from "./Profile/Profile";
import Profile_2 from "./Profile_2/Profile_2";
import Profile_3 from "./Profile_3/Profile_3";

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
          <Route path="/product_details_for_rent" element={<ProductDetailsForRent />} />
          <Route path="/add_new_property" element={<AddNewProperty />} />
          <Route path="/add_new_property2" element={<AddNewProperty2 />} />

          <Route path="/student_accommodation" element={<StudentAccommodation />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/parking_for_sale" element={<ParkingForSale />} />
          <Route path="/holliday_house" element={<HollidayHouse />} />

          <Route path="/my_ads" element={<MyAds />} />
          <Route path="/active_ad" element={<ActiveAd />} />
          <Route path="/sold" element={<Sold />} />
          <Route path="/expired" element={<Expired />} />

          <Route path="/saved_searches" element={<SavedSearches />} />
          <Route path="/message" element={<Message />} />
          <Route path="/message_1" element={<Message_1 />} />
          <Route path="/Profile_1" element={<Profile />} />
          <Route path="/Profile_2" element={<Profile_2 />} />
          <Route path="/Profile_3" element={<Profile_3 />} />




        </Routes>
      </BrowserRouter>






      {/* <HomePage5/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <Buy/> */}
      {/* <Rent/> */}
      {/* <Share1/> */}
      {/* <Share2/> */}
      {/* <ProductDetailsForSell /> */}
      {/* <ProductDetailsForRent/> */}
      {/* <AddNewProperty /> */}
      {/* <AddNewProperty2/> */}
      {/* <Introduction/> */}
      {/* <SubCategories/> */}
      {/* <StudentAccommodation /> */}
      {/* <Commercial/> */}
      {/* <ParkingForSale/> */}
      {/* <HollidayHouse/> */}
      {/* <SavedSearches/> */}
      {/* <Message/> */}
      {/* <Message_1/> */}
      {/* <Profile/> */}
      {/* <Profile_2/> */}
      {/* <Profile_3/> */}


      {/* <ActiveAd /> */}
      {/* <MyAds/> */}
      {/* <Sold/> */}
      {/* <Expired/> */}




      <Footer />






    </div>
  );
}

export default App;

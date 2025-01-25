import {createBrowserRouter, Route, Link, NavLink, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout"
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import CareerLayout from "./layouts/CareerLayout";
import Careers from "./pages/careers/Careers";
import { careersLoader } from "./pages/careers/Careers";
import CareerDetails, { CareerDetailsLoader } from "./pages/careers/CareerDetails";
import CareerErrors from "./pages/careers/CareersError";
const router = createBrowserRouter(createRoutesFromElements(<Route path = "/" element = {<RootLayout>
</RootLayout>}>
  <Route index element = {<Home></Home>}></Route>
    <Route path = "/about" element = {<About></About>}></Route>
    <Route path = "help" element = {<HelpLayout></HelpLayout>}>
      <Route path ="faq" element = {<Faq></Faq>}></Route>
      <Route path ="contact" element = {<Contact></Contact>} action={contactAction}></Route>
    </Route>
    <Route path ="careers" element = {<CareerLayout></CareerLayout>} errorElement ={<CareerErrors></CareerErrors>}>
      <Route index element = {<Careers></Careers>} loader ={careersLoader}></Route>
      <Route path =":id" element ={<CareerDetails></CareerDetails>} loader = {CareerDetailsLoader} > </Route>
    </Route>
    <Route path = "*" element ={<NotFound></NotFound>}></Route>
  </Route>))
function App() {
  return (
  <RouterProvider router = {router}></RouterProvider>
   

  );
}

export default App

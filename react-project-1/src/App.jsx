import {BrowserRouter, Routes, Route} from "react-router-dom";
import ScrollToTop from "./Links/ScrollToTop";
import { Layout } from "./Pages/Layout";
import Home from "./Component/Home";
import Event from "./Component/Event";
import HomeOnline from "./Component/HomeOnline";
import Mirage from "./Links/Mirage"
import Pages from "./Component/Pages";
import MiragePage from "./Links/MiragePage";
import Contact from "./Component/Contact";
import CreateEvent from "./Component/CreateEvent";
import CreateYourEvent from "./Component/CreateYourEvent";


function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={ <Home />}/>
            <Route path="event" element={ <Event />}></Route>
            <Route path="event/:id" element={<Mirage />}></Route>
            <Route path="homeonline" element={<HomeOnline />}></Route>
            <Route path="HomeOnline/homeonline/:id" element={<Mirage />}></Route>
            <Route path="event/online/:id" element={<Mirage />}></Route>
            <Route path="pages" element={<Pages />}></Route>
            <Route path="pages/Blog/:id" element={<MiragePage />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
          
          <Route path="add-event" element={<CreateEvent />}></Route>
          <Route path="createYourEvent" element={<CreateYourEvent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

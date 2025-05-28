import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Layout } from "./Pages/Layout";
import Home from "./Component/Home";
import Event from "./Component/Event";
import Mirage from "./Links/Mirage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={ <Home />}/>
            <Route path="event" element={ <Event />}></Route>
            <Route path="event/:id" element={<Mirage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import MainPage from "./components/MainPage"
import Restaurant from "./components/Restaurant"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:restaurantId" element={<Restaurant />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App

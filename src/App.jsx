import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Page404 from "./pages/page404.jsx";
import { HoroscopeProvider } from "./components/horoscopecontext.jsx";
// import Horoscope from "./components/horoscope.jsx";

function App() {
  return (
    <Router>
      <HoroscopeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
          {/* <Route path="/" exact component={Horoscope} /> */}
        </Routes>
      </HoroscopeProvider>
    </Router>
  )
}

export default App
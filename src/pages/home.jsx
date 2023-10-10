import Header from "../components/header";
import Horoscope from "../components/horoscope";
// import HoroscopeProvider from "../components/horoscopecontext";

import '../styles/arrow.css'
import '../styles/home.css'
import '../styles/base.css'

function Home() {
    return(
        <>
        <Header />

        {/* <HoroscopeProvider /> */}
        <Horoscope />
        </>
    )
}

export default Home
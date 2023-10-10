import { createContext, useContext, useState } from "react";

import horoscopeDatas from '../data/horoscope.json'

const HoroscopeContext = createContext()

export function HoroscopeProvider ({ children }) {
    const [horoscopeData, setHoroscopeData] = useState(horoscopeDatas);
    const [currentIndex, setCurrentIndex] = useState(0);
    
        // const fetchHoroscopeData = () => {
        //     // Contenu de la fonction fetchHoroscopeData
        //     fetch('/public/data/horoscope.json')
        //     .then(response => response.json())
        //     // Récupérer les données de l'horoscope.
        //     .then(data => {
        //         setHoroscopeData(data);
        //     })
        //     .catch(error => console.error(error));
    
        //     // // console.log(horoscopeData);
        //     // // Mettre à jour l'état avec setHoroscopeData.
        //     setHoroscopeData(horoscopeData);
        // };

    // const showHoroscope = () => {
    //     // Vérifiez d'abord si les données de l'horoscope sont disponibles.
    //     if (horoscopeData.length === 0) {
    //         return null;
    //     }

    //     const horoscope = horoscopeData[currentIndex];
    //     return (
    //         <div>
    //             <h1 id="title-sign">{horoscope.signe}</h1>
    //             <span id="date">{horoscope.date}</span>
    //             <div>
    //                 <p id="amour">Amour : {horoscope.amour}</p>
    //                 <p id="travail">Travail : {horoscope.travail}</p>
    //                 <p id="argent">Argent : {horoscope.argent}</p>
    //                 <p id="sante">Santé : {horoscope.sante}</p>
    //                 <p id="famille">Famille et amis : {horoscope.famille}</p>
    //                 <p id="conseil">Conseil : {horoscope.conseil}</p>
    //             </div>
    //         </div>
    //     );
    // };
    
    // const changeTop = () => {
    //     // Changer currentIndex pour afficher le signe précédent.
    //     setCurrentIndex(prevIndex =>
    //         prevIndex === 0 ? horoscopeData.length - 1 : prevIndex - 1
    //     );
    // };

    // const handleArrowClick = (direction) => {
    //     // Gérer les clics sur les flèches className=arrow-left et arrow-right
    //     if (direction === '.arrow-left') {
    //         setCurrentIndex(currentIndex =>
    //             currentIndex === 0? horoscopeData.length - 1 : currentIndex - 1
    //         );
    //     } else if (direction === '.arrow-right') {
    //         setCurrentIndex(currentIndex =>
    //             currentIndex === horoscopeData.length - 1? 0 : currentIndex + 1
    //         );
    //     }
    // };
    
    return (
        <HoroscopeContext.Provider value={{
            horoscopeData,
            currentIndex,
            setCurrentIndex,
            setHoroscopeData,
            // showHoroscope,
            // changeTop,
            // handleArrowClick
        }}>
            {children}
        </HoroscopeContext.Provider>
    )
}

export function useHoroscopeContext() {
    return useContext(HoroscopeContext);
}
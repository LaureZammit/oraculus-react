import { useState } from "react";

const HoroscopeContext = createContext()

export const useHoroscopeContext = () => {
    return useContext(HoroscopeContext)
}

export const HoroscopeProvider = ({ children }) => {
    const [horoscopeData, setHoroscopeData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const fetchHoroscopeData = () => {
        // Contenu de la fonction fetchHoroscopeData
        fetch('/public/data/horoscope.json')
        .then(response => response.json())
        // Récupérer les données de l'horoscope.
        .then(data => {
            setHoroscopeData(data);
        })
        .catch(error => console.error(error));

        // // console.log(horoscopeData);
        // // Mettre à jour l'état avec setHoroscopeData.
        setHoroscopeData(horoscopeData);
    };

    const showHoroscope = () => {
        // Vérifiez d'abord si les données de l'horoscope sont disponibles.
        if (horoscopeData.length === 0) {
            return null; // Ou un message de chargement, ou tout autre chose selon votre préférence.
        }
        
        const horoscope = horoscopeData[currentIndex];
        return (
            <div>
                <h1 id="title-sign">{horoscope.signe}</h1>
                <span id="date">{horoscope.date}</span>
                <div>
                    <p id="amour">Amour : {horoscope.amour}</p>
                    <p id="travail">Travail : {horoscope.travail}</p>
                    <p id="argent">Argent : {horoscope.argent}</p>
                    <p id="sante">Santé : {horoscope.sante}</p>
                    <p id="famille">Famille et amis : {horoscope.famille}</p>
                    <p id="conseil">Conseil : {horoscope.conseil}</p>
                </div>
            </div>
        );
    };
    
    const changeTop = () => {
        // Changer currentIndex pour afficher le signe précédent.
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? horoscopeData.length - 1 : prevIndex - 1
        );
    };

    const handleArrowClick = (direction) => {
        // Gérer les clics sur les flèches className=arrow-left et arrow-right
        if (direction === '.arrow-left') {
            setCurrentIndex(prevIndex =>
                prevIndex === 0 ? horoscopeData.length - 1 : prevIndex - 1
            );
        } else if (direction === '.arrow-right') {
            setCurrentIndex(prevIndex =>
                prevIndex === horoscopeData.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    return (
        <HoroscopeContext.Provider value={{
            horoscopeData,
            setHoroscopeData,
            currentIndex,
            fetchHoroscopeData,
            showHoroscope,
            changeTop,
            handleArrowClick
        }}>
            {children}
        </HoroscopeContext.Provider>
    )
}
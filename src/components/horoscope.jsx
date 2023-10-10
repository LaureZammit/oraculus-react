import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Horoscope() {
    const [horoscopeData, setHoroscopeData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchHoroscopeData = () => {
        // Obtenir les données de l'horoscope à partir du fichier ../data/horoscope.json.
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

    useEffect(() => {
        fetchHoroscopeData(); // Charger les données lorsque le composant est monté.
    }, []);

    const showHoroscope = () => {
        // Vérifiez d'abord si les données de l'horoscope sont disponibles.
        if (horoscopeData.length === 0) {
            return null; // Ou un message de chargement, ou tout autre chose selon votre préférence.
        }

        // Sortir les données de l'horoscope en fonction de currentIndex et de l'index du fichier data/horoscope.json. et récupérer les données dans un tableau: signe, date, amour, travail, argent, sante, famille, conseil, image
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

    useEffect(() => {
        showHoroscope();
    }, [currentIndex, showHoroscope]);

    const handleArrowClick = (direction) => {
        // Gérer les clics sur les flèches className=arrow-left et arrow-right
        if (direction === '.arrow-left') {
            setCurrentIndex(currentIndex =>
                currentIndex === 0? horoscopeData.length - 1 : currentIndex - 1
            );
        } else if (direction === '.arrow-right') {
            setCurrentIndex(currentIndex =>
                currentIndex === horoscopeData.length - 1? 0 : currentIndex + 1
            );
        }
    };

    return (
        <main>
            <section>
                <div className="div-change-signe">
                    <Link to="#" onClick={() => changeTop()}>
                        <span className="prev-sign">
                            {horoscopeData[currentIndex === 0 ? horoscopeData.length - 1 : currentIndex - 1]?.signe}
                        </span>
                        <span className="date-prev-sign">
                            {horoscopeData[currentIndex === 0 ? horoscopeData.length - 1 : currentIndex - 1]?.date}
                        </span>
                    </Link>

                    <Link to="#" onClick={() => handleArrowClick('.arrow-right')}>
                        <span className="next-sign">
                            {horoscopeData[currentIndex === horoscopeData.length - 1 ? 0 : currentIndex + 1]?.signe}
                        </span>
                        <span className="date-next-sign">
                            {horoscopeData[currentIndex === horoscopeData.length - 1 ? 0 : currentIndex + 1]?.date}
                        </span>
                    </Link>
                </div>

                <article>
                    <p id="datejour">10/10/2023</p>
                    {showHoroscope()}
                </article>
            </section>
            
            <aside>
                <img id="sign-img" src={horoscopeData[currentIndex]?.image} alt={horoscopeData[currentIndex]?.signe} />
            </aside>
        </main>
    )
}

export default Horoscope;
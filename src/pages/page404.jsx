import { Link } from "react-router-dom";

import '../styles/page404.css'
import '../styles/base.css'


function Page404() {
    return (
        <div>
            <h1 className="title404">404</h1>
            <p className="p404">Merci de revenir à la <Link to="/" className="a404">page principale</Link>.</p>
        </div>
    );
}

export default Page404;
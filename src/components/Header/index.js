import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/survey/11">Questionnaire</Link>
        </nav>
    )  
}

export default Header 
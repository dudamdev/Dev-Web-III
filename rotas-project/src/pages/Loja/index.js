import { Link } from 'react-router-dom';
import './style.css';

function Loja() {
    return (
        <div className='container'>
            <Link to="/produtos/playstation" className="loja-link">
                <div className="loja-container">
                    PlayStation
                </div>
            </Link>
            <Link to="/produtos/xbox" className="loja-link">
                <div className="loja-container">
                    Xbox
                </div>
            </Link>
            <Link to="/produtos/atari" className="loja-link">
                <div className="loja-container">
                    Atari
                </div>
            </Link>
            <Link to="/produtos/supernintendo" className="loja-link">
                <div className="loja-container">
                    Super Nintendo
                </div>
            </Link>
        </div>
    );
}

export default Loja;
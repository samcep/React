import './Header.css';
import foto from './foto.jpeg';

function Header(){
    return(
        <header>
        <div className="header">
            
          
            <div className="header__me">
                <h2 className="header__name">Samuel Casallas Cepeda</h2>
                <span>Desarrollador web</span>
                <div className="header__content__foto" >
                <img className="header__foto" src={foto} alt=""/>
                </div>
            </div>
        </div>
                
        </header>

    );
}

export default Header;
import logoMesto from '../images/logo-mesto.svg';

function Header () {
    return (
        <header className="header">
        <img src={logoMesto} alt="Логотип Место" className="header__logo" />
      </header>
    )
}

export default Header;
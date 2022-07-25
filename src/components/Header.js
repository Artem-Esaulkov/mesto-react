import logoMesto from '../images/logo-mesto.svg';
import {Link, Route, Switch, withRouter} from 'react-router-dom';

function Header (props) {
    return (
      <>
      <Switch>
        <Route exact path="/">
            <div className={props.isOpen ? `header__burger-container header__burger-container_active` : `header__burger-container`}>
              <p className="header__text header__text_email">{props.email}</p>
              <Link to="/sign-in" className="header__text header__text_quit" onClick={props.handleLoggedToggle}>Выйти</Link>
            </div>
          </Route>
        </Switch>
        <header className="header">
          <img src={logoMesto} alt="Логотип Место" className="header__logo" />
          <Switch>
              <Route exact path="/">
                <div className="header__container">
                  <p className="header__text header__text_email">{props.email}</p>
                  <Link to="/sign-in" className="header__text header__text_quit" onClick={props.handleLoggedToggle}>Выйти</Link>
                </div>
                <div className={!props.isOpen ? `header__burger-link header__burger-link_active` : `header__burger-link`} onClick={props.burgerToggle}>
                  <div className='header__burger-line'></div>
                  <div className='header__burger-line'></div>
                  <div className='header__burger-line'></div>
                </div>
                <button type="button" className={props.isOpen ? `header__burger-close header__burger-close_active` : `header__burger-close`} aria-label="Закрыть" onClick={props.onClose} />
              </Route>
              <Route exact path="/sign-in">
                <Link to="/sign-up" className="header__text header__text_link">Регистрация</Link>
              </Route>
              <Route exact path="/sign-up">
                <Link to="/sign-in" className="header__text header__text_link">Вход</Link>
              </Route>
          </Switch>
        </header>
      </>
    )
}

export default withRouter(Header);
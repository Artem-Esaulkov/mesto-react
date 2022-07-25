import authLogo from '../images/InfoAuth.png';
import notAuthLogo from '../images/InfoNotAuth.png';

function InfoToolTip(props) {
    const messages = {
      "login": "Вы успешно вошли в систему!",
      "register": "Вы успешно зарегистрировались!"
    }
    return (
        <>
          <div
            className={
              !props.isOpen
                ? `popup popup_infotooltip`
                : `popup popup_infotooltip popup_opened`
            }
          >
            <div className="popup__overlay" onClick={props.onClose}></div>
            <div
              className={`popup__container popup__container_infotooltip`}
            >
              <img className="popup__info-image" src={props.auth ? (`${authLogo}`) : (`${notAuthLogo}`)}></img>
              <h2 className="popup__title popup__title_tip">{props.auth ? messages[props.type] : `Что-то пошло не так! Попробуйте ещё раз.`}</h2>
              <button
                type="button"
                className="popup__close"
                aria-label="Закрыть"
                onClick={props.onClose}
              />
            </div>
          </div>
        </>
      );
}

export default InfoToolTip;
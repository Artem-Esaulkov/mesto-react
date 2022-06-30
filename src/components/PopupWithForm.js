import React from "react";

function PopupWithForm(props) {
    return (
        <>
            <div className={!props.isOpen ? (`popup popup_${props.name}`) : (`popup popup_${props.name} popup_opened`)}>
                <div className="popup__overlay" onClick={props.onClose}></div>
                <form className={`popup__container popup__container_${props.name}`} name={props.name}>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children.info.map((item, i) => (
                        <div key={i}>
                            <input type={props.children.type} className={`popup__field popup__field_${item}`} name={`profile-${item}`} id={item} required minLength="2" maxLength="40" />
                            <span className={`${item}-error`}></span>
                        </div>
                   ))}
                    <button type="submit" className="popup__button" aria-label={props.children.label}>{props.children.submit}</button>
                    <button type="button" className="popup__close" aria-label="Закрыть" onClick={props.onClose} />
                </form>
            </div>
        </>
    )
}

export default PopupWithForm;
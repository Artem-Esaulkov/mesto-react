import React from "react";

function PopupWithForm(props) {
  return (
    <>
      <div
        className={
          !props.isOpen
            ? `popup popup_${props.name}`
            : `popup popup_${props.name} popup_opened`
        }
      >
        <div className="popup__overlay" onClick={props.onClose}></div>
        <form
          className={`popup__container popup__container_${props.name}`}
          name={props.name}
          onSubmit={props.onSubmit}
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button
            type="submit"
            className="popup__button"
            aria-label={props.buttonText}
          >
            {!props.isLoad ? (props.buttonText) : (props.type)}
          </button>
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть"
            onClick={props.onClose}
          />
        </form>
      </div>
    </>
  );
}

export default PopupWithForm;

import React from "react";
import PopupWithForm from "./PopupWithForm";
import { cardId } from './Card';

function DeletePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onDeletePopup(cardId);
    props.onLoading();
  }

  return (
    <PopupWithForm
      name="delete"
      type={props.type}
      isLoad={props.isLoad}
      title="Вы уверены?"
      buttonText="Да"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default DeletePopup;

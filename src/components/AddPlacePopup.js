import React from "react";
import { CardsContext } from "../contexts/CardsContext";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');
  const currentCards = React.useContext(CardsContext);

  function handleTitleChange(evt) {
    setTitle(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
        name: title,
        link: link
    });
    props.onLoading();
  }

  React.useEffect(() => {
    setTitle('');
    setLink('');
  }, [currentCards])

  return (
    <PopupWithForm
      name="add"
      type={props.type}
      isLoad={props.isLoad}
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
        <input
            type="text"
            className="popup__field popup__field_title"
            placeholder="Название"
            name="title"
            id="title"
            value={`${title}` || ""}
            onChange={handleTitleChange}
            required
            minLength="2"
            maxLength="40"
        />
        <span className="title-error"></span>
        <input
            type="url"
            className="popup__field popup__field_link"
            placeholder="Ссылка на картинку"
            name="link"
            id="link"
            value={`${link}` || ""}
            onChange={handleLinkChange}
            required
            minLength="2"
            maxLength="200"
        />
        <span className="link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const nameRef = React.useRef();
  const descriptionRef = React.useRef();

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
    props.onLoading();
  }

  return (
    <PopupWithForm
      name="edit"
      type={props.type}
      isLoad={props.isLoad}
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label>
        <input
          type="text"
          className="popup__field popup__field_name"
          name="profile-name"
          id="name"
          ref={nameRef}
          value={`${name}` || ""}
          onChange={handleNameChange}
          required
          minLength="2"
          maxLength="40"
        />
        <span className="name-error"></span>
      </label>
      <label>
        <input
          type="text"
          className="popup__field popup__field_description"
          name="profile-description"
          id="description"
          ref={descriptionRef}
          value={`${description}` || ""}
          onChange={handleDescriptionChange}
          required
          minLength="2"
          maxLength="200"
        />
        <span className="description-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

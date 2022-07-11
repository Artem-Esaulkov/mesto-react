import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [avatar, setAvatar] = React.useState('');
  const avatarRef = React.useRef();

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser])

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value);
    props.onLoading();
  }

  return (
    <PopupWithForm
      name="src"
      type={props.type}
      isLoad={props.isLoad}
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
        <input
            type="url"
            className="popup__field popup__field_src"
            name="src"
            id="src"
            ref={avatarRef}
            value={`${avatar}` || ""}
            onChange={handleAvatarChange}
            required
            minLength="2"
            maxLength="200"
        />
        <span className="src-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
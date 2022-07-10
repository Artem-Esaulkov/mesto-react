import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardsContext } from "../contexts/CardsContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeletePopup from "./DeletePopup";
import { validateForm } from "../utils/FormValidator";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const handleEditAvatarClick = () => {
    setLoading(false);
    setEditAvatarPopupOpen(true);
    validateForm('src');
  };
  const handleEditProfileClick = () => {
    setLoading(false);
    setEditProfilePopupOpen(true);
    validateForm('edit');
  };
  const handleAddPlaceClick = () => {
    setLoading(false);
    setAddPlacePopupOpen(true);
    validateForm('add');
  };
  const handleDeleteClick = () => {
    setLoading(false);
    setDeletePopupOpen(true);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  function handleLoading() {
    setLoading(true);
  }

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeletePopupOpen(false);
    setSelectedCard("");
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    const request = isLiked
      ? api.dislikeCard(card._id, !isLiked)
      : api.likeCard(card._id, !isLiked);
    request
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCardDelete = (card) => {
    api
      .deleteCard(card)
      .then(() => {
        setCards((item) => item.filter((data) => data._id !== card));
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  const setUser = (res) => {
    setCurrentUser(res);
    closeAllPopups();
  };

  function handleUpdateUser(obj) {
    api
      .editProfile(obj)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(link) {
    api
      .editAvatar(link)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlace(obj) {
    api
      .addCard(obj)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    api
      .getInitialProfile()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
        <div className="page">
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            isLoad={loading}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            onLoading={handleLoading}
            type="Сохранение..."
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            isLoad={loading}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            onLoading={handleLoading}
            type="Сохранение..."
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            isLoad={loading}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
            onLoading={handleLoading}
            type="Создание..."
          />
          <DeletePopup
            isOpen={isDeletePopupOpen}
            isLoad={loading}
            onClose={closeAllPopups}
            onDeletePopup={handleCardDelete}
            onLoading={handleLoading}
            type="Удаление..."/>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onDeletePopup={handleDeleteClick}
          />
          <Footer />
        </div>
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;

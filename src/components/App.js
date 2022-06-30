import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Card from './Card';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };
  const handleCardClick = (value) => {
    setSelectedCard(value);
  }
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard('');
  }
  return (
    <div className="page">
      <PopupWithForm name="edit" title="Редактировать профиль" children={{info: ['name', 'description'], label: "Сохранить", type: "text", submit: 'Сохранить'}} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      <PopupWithForm name="add" title="Новое место" children={{info: ['title', 'link'], label: "Создать", type: "text", submit: 'Создать'}} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <PopupWithForm name="avatar" title="Обновить аватар" children={{info: ['src'], label: "Сохранить", type: "url", submit: 'Сохранить'}} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
      <PopupWithForm name="delete" title="Вы уверены?" children={{info: [], label: "Удалить", type: "", submit: 'Да'}}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>  
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} cardClick={handleCardClick}/>
      <Footer />
    </div>
  );
}

export default App;

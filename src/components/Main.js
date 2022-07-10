import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardsContext } from "../contexts/CardsContext";
import Card from "./Card";

function Main(props) {
  const userContext = React.useContext(CurrentUserContext);
  const cardsContext = React.useContext(CardsContext);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={userContext.avatar}
            alt="аватар профиля"
            className="profile__avatar"
          />
          <div
            className="profile__avatar-edit"
            onClick={props.onEditAvatar}
          ></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userContext.name}</h1>
          <button
            type="button"
            className="profile__edit-button"
            aria-label="Редактировать"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__description">{userContext.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cardsContext.map((item, _id) => (
          <div className="elements__card" key={_id}>
            <Card
              id={props.id}
              card={item}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onDeletePopup}
            />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Main;

import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
        api.getInitialProfile().then(data => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        }).catch(err => {console.log(err)});
        api.getInitialCards().then(res => {
            setCards([res.map((item, _id) => (
                <div className="elements__card" key={_id}>
                    <Card card={item} onCardClick={props.cardClick}/>
                </div>
            ))])
        }).catch(err => {console.log(err)});
    }, [])
        
    return (
        <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img src={userAvatar} alt="аватар профиля" className="profile__avatar" />
            <div className="profile__avatar-edit" onClick={props.onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            <p className="profile__description">{userDescription}</p>
          </div>
          <button type="button" className="profile__add-button" aria-label="Добавить" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">{cards}</section>
      </main>
    )
}

export default Main;
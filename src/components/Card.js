import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
export let cardId;

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `element__like ${isLiked ? 'element__like_active' : ''}`; 
    const cardDeleteButtonClassName = `element__delete${isOwn ? ("") : (" element__delete_hidden")}`

    function handleClick () {
        props.onCardClick(props.card);
    }
    function handleLikeClick () {
        props.onCardLike(props.card);
    }

    function handleDeleteClick () {
        props.onCardDelete(props.card);
        cardId = props.card._id;
    }

    return (
        <article className="element">
            <img src={props.card.link} alt={props.card.name} className="element__image" onClick={handleClick} />
            <div className="element__description">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like-container">
                    <button type="button" className={cardLikeButtonClassName} aria-label="Нравится" onClick={handleLikeClick}></button>
                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
            <button type="button" className={cardDeleteButtonClassName} aria-label="Удалить" onClick={handleDeleteClick}></button>
        </article>
    )
}

export default Card;
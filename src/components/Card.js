function Card(props) {
    function handleClick () {
        props.onCardClick(props.card);
    }

    return (
        <article className="element">
            <img src={props.card.link} alt={props.card.name} className="element__image" onClick={handleClick} />
            <div className="element__description">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like-container">
                    <button type="button" className="element__like" aria-label="Нравится"></button>
                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
            <button type="button" className="element__delete" aria-label="Удалить"></button>
        </article>
    )
}

export default Card;
function ImagePopup(props) {
    return (
        <div className={!props.card ? ("popup popup_image") : ("popup popup_image popup_opened")}>
            <div className="popup__overlay" onClick={props.onClose}></div>
            <figure className="popup__image-container">
                <img src={props.card ? (props.card.link) : ('')} alt={props.card ? (props.card.name) : ('')} className="popup__image-element" />
                <figcaption className="popup__image-title">{props.card ? (props.card.name) : ('')}</figcaption>
                <button type="button" className="popup__close" aria-label="Закрыть" onClick={props.onClose}></button>
            </figure>
        </div>
    )
}

export default ImagePopup;
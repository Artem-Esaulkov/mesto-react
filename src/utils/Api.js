class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkPromise(res) {
    if (res.ok) {
      return res.json();
    } return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => this._checkPromise(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    })
    .then((res) => this._checkPromise(res));
  }

  editProfile({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
    .then((res) => this._checkPromise(res));
  }

  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
    .then((res) => this._checkPromise(res));
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then((res) => this._checkPromise(res));
  }

  likeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
    .then((res) => this._checkPromise(res));
  }

  dislikeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then((res) => this._checkPromise(res));
  }

  editAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .then((res) => this._checkPromise(res));
  }

register (email, password) {
  return fetch(`${this._baseUrl}/signup`, {
    method: 'POST',
    headers: this._headers,
    body: JSON.stringify({email, password})
  })
  .then((res) => this._checkPromise(res));
  };

  authorize (email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({email, password})
    })
    .then((res) => this._checkPromise(res));
    };
  
    getContent = (token) => {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
      .then(res => this._checkPromise(res))
    }
} 

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-40",
  headers: {
    authorization: "ec3562dc-38d6-49a4-b958-d2cdacbbc00f",
    "Content-Type": "application/json",
  },
});

export const auth = new Api({
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    "Content-Type": "application/json",
  },
})

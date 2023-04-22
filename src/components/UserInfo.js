export default class UserInfo {
  constructor({ userNameSelector, userJobSelector, avatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
    this._avatarLink = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent
    };
  }

  setUserInfo({ userName, userJob }) {
    this._userName.textContent = userName;
    this._userJob.textContent = userJob;
  }

  setUserAvatar(avatarLink) {
    this._avatarLink.src = avatarLink;
  }
}
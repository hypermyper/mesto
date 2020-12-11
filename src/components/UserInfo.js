export default class UserInfo {
  constructor({id, profileInfo, profileDescription, profileAvatarImage}) {
    this._id = id;
    this._profileInfo = profileInfo;
    this._profileDescription = profileDescription;
    this._profileAvatarImage = profileAvatarImage;
  }
  getUserInfo() {
    const userInfo = {
      _id: this._id,
      profileInfo: this._profileInfo.textContent,
      profileDescription: this._profileDescription.textContent,
      profileAvatarImage: this._profileAvatarImage
    };
    return userInfo;
  }
  setUserInfo(id, profileInfo, profileDescription, profileAvatarImage) {
    this._id = id;
    this._profileInfo.textContent = profileInfo;
    this._profileDescription.textContent = profileDescription;
    this._profileAvatarImage.src = profileAvatarImage;
    document.querySelector('.profile__avatar-image').alt = profileInfo;
    document.querySelector('.profile__avatar-image').title = profileInfo + ' / ' + profileDescription;
  }
}

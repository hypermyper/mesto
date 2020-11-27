export default class UserInfo {
  constructor({profileInfo, profileDescription}) {
    this._profileInfo = profileInfo;
    this._profileDescription = profileDescription;
  }
  getUserInfo() {
    const userInfo = {
      profileInfo: this._profileInfo.textContent,
      profileDescription: this._profileDescription.textContent
    };
    return userInfo;
  }
  setUserInfo(profileInfo, profileDescription) {
    this._profileInfo.textContent = profileInfo;
    this._profileDescription.textContent = profileDescription;
  }
}

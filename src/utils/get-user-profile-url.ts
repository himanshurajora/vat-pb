import { serverUrl } from "../config/url.config";
import { UserModel } from "../models/user-model";

export const getUserProfileUrl = (user: UserModel) => {
  return `${serverUrl}/api/files/${user.collectionName}/${user.id}/${user.avatar}`;
};

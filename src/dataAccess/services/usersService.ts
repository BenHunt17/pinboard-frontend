import axios from "axios";

export const usersService = { deleteCurrentUser };

const baseUri = process.env.REACT_APP_API_BASE_URI || "";

function deleteCurrentUser(accessToken: string) {
  return axios.delete(`${baseUri}/users/current`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

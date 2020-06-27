import { postRequest } from "../helpers/APIClient";

export function signIn(credentials) {
  return function () {
    postRequest("/signin", credentials).then(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  };
}

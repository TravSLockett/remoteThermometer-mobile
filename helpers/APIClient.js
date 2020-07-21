const baseURL = "http://localhost:1205/";

export const postRequest = async (url, params = null, token = null) => {
  //const token = "TOKEN";
  //const token = await Storage.get("sessionToken");

  var res = await fetch(baseURL + url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(params),
  });

  if (!(res.status >= 200 && res.status < 300)) {
    console.log(res.status);
    console.log("invalid status code");
    throw res;
  }
  res = res.json().catch((err) => {
    console.log("there is an error on API client file");
    console.log(err);
    console.log("after the err on the second one");
  });

  return res;
};

export const getRequest = async (url, token) => {
  //const token = "TOKEN";
  //const token = await Storage.get("sessionToken");

  var res = await fetch(baseURL + url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(params),
  });

  if (!(res.status >= 200 && res.status < 300)) {
    console.log(res.status);
    console.log("invalid status code");
    throw res;
  }
  res = res.json().catch((err) => {
    console.log("there is an error on API client file");
    console.log(err);
    console.log("after the err on the second one");
  });

  return res;
};

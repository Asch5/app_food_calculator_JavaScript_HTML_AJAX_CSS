///function sending data to server
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });
  return await res.json();
};

//// trial localStorage///////////
const postLocal = (form) => {
  const foJSON = JSON.stringify(form);
  localStorage.setItem(`${form.name}`, foJSON);
};

///function getting data from server/////
const getData = async (url) => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }
  return await res.json();
};

export { postData, postLocal, getData };

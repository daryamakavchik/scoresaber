const baseUrl = "https://scoresaber.com/api/";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const fetchPlayers = async () => {
  return fetch(`${baseUrl}players`).then((res) => checkResponse(res));
};

export const fetchUserId = async (playerId) => {
  return fetch(`${baseUrl}player/${playerId}/full`).then((res) =>
    checkResponse(res)
  );
};

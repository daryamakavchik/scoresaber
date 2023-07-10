import { fetchPlayers, fetchUserId } from "../../utils/api";

export const GET_PLAYERS_REQUEST = "GET_PLAYERS_REQUEST";
export const GET_PLAYERS_SUCCESS = "GET_PLAYERS_SUCCESS";
export const GET_PLAYERS_FAILED = "GET_PLAYERS_FAILED";

export const GET_PLAYER_REQUEST = "GET_PLAYER_REQUEST";
export const GET_PLAYER_SUCCESS = "GET_PLAYER_SUCCESS";
export const GET_PLAYER_FAILED = "GET_PLAYER_FAILED";

export const SEND_USER_ID = "SEND_USER_ID";
export const SET_USER_ID = "SET__USER_ID";
export const SEND_OPPONENT_ID = "SEND_OPPONENT_ID";
export const SET_OPPONENT_ID = "SET_OPPONENT_ID";

export const SET_SONG = "SET_SONG";

export const setActiveSong = (song) => ({
    type: SET_SONG,
    song
});

export const setUserId = (value) => {
  return function(dispatch) {
    dispatch({
      type: SET_USER_ID,
      value: value,
    });
  };
};

export const sendUserId = (id) => {
  return function(dispatch) {
    dispatch({
      type: SEND_USER_ID,
      id: id,
    });
  };
};

export const setOpponentId = (value) => {
  return function(dispatch) {
    dispatch({
      type: SET_OPPONENT_ID,
      value: value,
    });
  };
};

export const sendOpponentId = (id) => {
  return function(dispatch) {
    dispatch({
      type: SEND_OPPONENT_ID,
      id: id,
    });
  };
};

export const setPlayersData = () => {
  return function(dispatch) {
    dispatch({
      type: GET_PLAYERS_REQUEST,
    });
    fetchPlayers().then((res) => {
      if (res) {
        dispatch({
          type: GET_PLAYERS_SUCCESS,
          players: res.players
        });
      }
      else {
        dispatch({
          type: GET_PLAYERS_FAILED,
        });
      }
    });
  };
};


export const setCurrentPlayer = (userId) => {
  return function(dispatch) {
    dispatch({
      type: GET_PLAYER_REQUEST,
    });
    fetchUserId(userId).then((res) => {
      if (res) {
        dispatch({
          type: GET_PLAYER_SUCCESS,
          player: res
        });
      }
      else {
        dispatch({
          type: GET_PLAYER_FAILED,
        });
      }
    });
  };
};
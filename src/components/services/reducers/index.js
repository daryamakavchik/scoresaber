import { combineReducers } from "redux";
import { SET_SONG, SET_USER_ID, SEND_USER_ID, SET_OPPONENT_ID, SEND_OPPONENT_ID, GET_PLAYERS_REQUEST, GET_PLAYERS_SUCCESS, GET_PLAYERS_FAILED, GET_PLAYER_REQUEST, GET_PLAYER_SUCCESS, GET_PLAYER_FAILED } from "../actions";
import { songs } from "../../utils/songs";

export const initialState = {

    players: [],
    player: {},

    isLoading: true,
    hasError: false,

    userInputValue: '',
    userId: '',

    opponentInputValue: '',
    opponentId: '',
    
    isIdSubmitted: false,
    isOpponentIdSubmitted: false
  };

  export const initialSongState = {
    activeSong: `${songs[0].artist} - ${songs[0].name}`,
  }
  
  export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER_ID: {
        return {
          ...state,
          userInputValue: action.value
        }
      }
      case SEND_USER_ID: {
        return {
          ...state,
          userId: action.id,
          isIdSubmitted: true
        }
      }
      case SET_OPPONENT_ID: {
        return {
          ...state,
          opponentInputValue: action.value
        }
      }
      case SEND_OPPONENT_ID: {
        return {
          ...state,
          opponentId: action.id,
          isOpponentIdSubmitted: true
        }
      }
      case GET_PLAYERS_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case GET_PLAYERS_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          players: action.players,
        };
      }
      case GET_PLAYERS_FAILED: {
        return {
          ...state,
          hasError: true,
        };
      }
      case GET_PLAYER_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case GET_PLAYER_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          player: action.player,
        };
      }
      case GET_PLAYER_FAILED: {
        return {
          ...state,
          hasError: true,
        };
      }
      default: {
        return state;
      }
    }
  };

  export const activeSongReducer = (state = initialSongState, action) => {
    switch (action.type) {
      case SET_SONG: {
        return {
          ...state,
          activeSong: action.song
        }
      }
      default: {
        return state;
      }
  }
}

export const rootReducer = combineReducers({
    data: dataReducer,
    song: activeSongReducer
});
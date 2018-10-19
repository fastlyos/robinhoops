import merge from "lodash/merge";

import {
  RECEIVE_WATCHLIST_ITEM,
  RECEIVE_ALL_WATCHLIST_ITEMS,
  REMOVE_WATCHLIST_ITEM
} from "./../actions/watchlist_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const watchlistItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_ALL_WATCHLIST_ITEMS:
      return merge({}, state, action.items);
    case RECEIVE_WATCHLIST_ITEM:
      return merge({}, state, action.item);
    case REMOVE_WATCHLIST_ITEM:
      return Object.assign({}, state, {
        items: [...state.items.filter(item => item.id !== action.item.id)]
      });
    default:
      return state;
  }
};

export default watchlistItemsReducer;

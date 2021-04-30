import { Action, Store } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export function thunk<R, S, E, A extends Action>(extraParam: E) {
  return (store: Store) => {
    return (nextDispatch: ThunkDispatch<R, S, A>) => (action: ThunkAction<R, S, E, A>) => {
      if (typeof action === 'function') {
        return action(nextDispatch, store.getState, extraParam)
      } else {
        return nextDispatch(action)
      }
    }
  }
}
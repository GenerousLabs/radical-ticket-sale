import { Action } from "redux";

const SET_TOKEN = "app/token/SET_TOKEN";
interface SetTokenAction extends Action<typeof SET_TOKEN> {
  payload: {
    token: string;
  };
}
export const setToken = (token: string): SetTokenAction => ({
  type: SET_TOKEN,
  payload: { token }
});

type Actions = SetTokenAction;

type State = {
  token: string;
};

const empty = { token: "" };

const reducer = (state: State = empty, action: Actions) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        token: action.payload.token
      };
    }
  }

  return state;
};

export default reducer;

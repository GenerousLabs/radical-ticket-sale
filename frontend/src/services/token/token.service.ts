import { setToken } from "./token.state";
import store from "../../store";

const startup = () => {
  if (window.location.hash !== "") {
    const result = window.location.hash.match(/^#\/t\/(\w+)$/);
    if (result && typeof result[1] === "string") {
      store.dispatch(setToken(result[1]));
    }
  }
};

startup();
// window.setTimeout(startup, 0);

export const getToken = () => {
  const state = store.getState();
  return state.token.token;
};

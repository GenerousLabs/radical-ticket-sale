import { setToken } from "./token.state";
import store from "../../store";
import { history } from "../../scenes/Routes/Routes.scene";

const saveTokenFromHash = () => {
  if (window.location.hash !== "") {
    const result = window.location.hash.match(/^#\/t\/(\w+)$/);
    if (result && typeof result[1] === "string") {
      store.dispatch(setToken(result[1]));
    }
  }
};

saveTokenFromHash();
// window.setTimeout(saveTokenFromHash, 0);

history.listen(saveTokenFromHash);

export const getToken = () => {
  const state = store.getState();
  return state.token.token;
};

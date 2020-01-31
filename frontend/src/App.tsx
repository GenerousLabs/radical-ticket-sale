import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import { StripeProvider } from "react-stripe-elements";

import apollo from "./apollo";
import store from "./store";

import Routes from "./scenes/Routes/Routes.scene";

const key = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || "";
if (key === "") {
  alert("FATAL ERROR #dhGv9Z: Stripe publishable key missing.");
}

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={apollo}>
        <StripeProvider apiKey={key}>
          <Routes />
        </StripeProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;

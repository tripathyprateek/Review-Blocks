import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import Planets from "./components/Planets";
import "./index.css";
import Logo from "./components/shared/Logo";


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://lasting-shad-69.hasura.app/v1/graphql",
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <Logo />
    <Planets />
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
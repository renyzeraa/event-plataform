import { ApolloProvider } from "@apollo/client/react";
import { Router } from "./router";
import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}
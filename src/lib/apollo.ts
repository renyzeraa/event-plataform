import { HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
    link: new HttpLink({
        uri: import.meta.env.VITE_GRAPHQL_API_URL,
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GRAPHQL_API_TOKEN}`
        }
    }),
    cache: new InMemoryCache()
});
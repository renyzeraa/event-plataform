import { HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
    link: new HttpLink({
        //@ts-expect-error not error
        uri: import.meta.env.VITE_GRAPHQL_API_URL,
        headers: {
            //@ts-expect-error not error
            Authorization: `Bearer ${import.meta.env.VITE_GRAPHQL_API_TOKEN}`
        }
    }),
    cache: new InMemoryCache()
});
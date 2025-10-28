import { HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
    link: new HttpLink({ uri: "https://us-west-2.cdn.hygraph.com/content/cmh9sjo2r01c707uytv00thgu/master" }),
    cache: new InMemoryCache(),
});
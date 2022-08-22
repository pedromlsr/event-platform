import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl73wxa6q3qxb01ul40xsf72r/master',
    cache: new InMemoryCache()
})
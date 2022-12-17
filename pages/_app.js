import PageLayout from "../components/PageLayout/PageLayout";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://twstg2.eu.saleor.cloud/graphql/",
  cache: new InMemoryCache(),
});

// I couldn't seem to get a paginated list working, seemed like the cache wasn't updating as expected
// the existing object below continually returned undefined. Possibly my typePolicy is incorrect
// {
//   typePolicies: {
//     Query: {
//       keyFields: [
//         ["pageInfo", ["hasNextPage"]],
//         ["edges", ["node", "_typename"]],
//       ],
//       fields: {
//         products: {
//           merge(existing = {}, incoming, { mergeObjects }) {
//             console.log(JSON.stringify(existing), "EXISTING");
//             console.log(incoming, "INCOMING");
//             // mergeObjects(existing, { products: { ...incoming } })
//             return mergeObjects(existing, { products: { ...incoming } });
//           },
//         },
//       },
//     },
//   },
// }

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ApolloProvider>
  );
}

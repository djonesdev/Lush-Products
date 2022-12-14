import PageLayout from '../components/PageLayout/PageLayout'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://twstg2.eu.saleor.cloud/graphql/', 
    cache: new InMemoryCache()
})

export default function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <PageLayout>
                <Component {...pageProps} />
            </PageLayout>
        </ApolloProvider>
    )
}
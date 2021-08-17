import { Environment, Network, RecordSource, Store } from 'relay-runtime';
/* import fetchGraphql from './fetchGraphql'; */

const fetchRelay = async (operation: any, variables: any) => {
    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjkxNDkwODAsImV4cCI6MjQ5MzA2MjY4MCwic3ViIjoiNjExODNlZWU0ODZiOTgxYzgwMmM0OGI2In0.ubg5DUNvqMvh6EYsXyOndBH3uV3dRu0PZq7PoFf_GxI'
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    });

    return await response.json();
};

export default new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource())
});
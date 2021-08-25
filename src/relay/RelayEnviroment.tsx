import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const getToken = () => {
    return localStorage.getItem('@relayTodo:token');
};

const fetchQuery = (operation: any, variables: any) => {
    const authorization = `Bearer ${getToken()}`;
    return fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': authorization
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        }),
    }).then(response => {
        return response.json();
    });
};

const network = Network.create(fetchQuery);

const store = new Store(new RecordSource());

export default new Environment({
    network,
    store,
});
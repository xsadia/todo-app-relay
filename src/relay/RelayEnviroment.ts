import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const getToken = () => {
    return localStorage.getItem('@relayTodo:token');
};

const token = getToken();

const fetchRelay = async (operation: any, variables: any) => {
    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
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
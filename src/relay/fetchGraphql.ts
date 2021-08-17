const fetchGraphql = async (text: any, variables: any) => {
    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            query: text,
            variables
        })
    });

    return await response.json();
};

export default fetchGraphql;
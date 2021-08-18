import graphql from 'babel-plugin-relay/macro';

export default graphql`
    fragment TodoContentFragment on TodoConnection {
  edges {
    node {
      content
    }
  }
}
`;
import graphql from 'babel-plugin-relay/macro';

export default graphql`
query UserQuery {
  user {
    username
  }
}
`;
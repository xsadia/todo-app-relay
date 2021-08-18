import graphql from 'babel-plugin-relay/macro';

export default graphql`
    fragment UserInfoFragment on UserConnection {
  edges {
    node {
      username
      email
      todos {
        ... TodoContentFragment
      }
    }
  }
}
`;
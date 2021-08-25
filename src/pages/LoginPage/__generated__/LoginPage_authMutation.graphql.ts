/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AuthUserInput = {
    email: string;
    password: string;
    clientMutationId?: string | null;
};
export type LoginPage_authMutationVariables = {
    input: AuthUserInput;
};
export type LoginPage_authMutationResponse = {
    readonly AuthUserMutation: {
        readonly me: {
            readonly id: string;
            readonly username: string;
            readonly email: string;
        } | null;
        readonly token: string | null;
        readonly error: string | null;
    } | null;
};
export type LoginPage_authMutation = {
    readonly response: LoginPage_authMutationResponse;
    readonly variables: LoginPage_authMutationVariables;
};



/*
mutation LoginPage_authMutation(
  $input: AuthUserInput!
) {
  AuthUserMutation(input: $input) {
    me {
      id
      username
      email
    }
    token
    error
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AuthUserPayload",
    "kind": "LinkedField",
    "name": "AuthUserMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginPage_authMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginPage_authMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b35e672874164ec6ac793d69226fd579",
    "id": null,
    "metadata": {},
    "name": "LoginPage_authMutation",
    "operationKind": "mutation",
    "text": "mutation LoginPage_authMutation(\n  $input: AuthUserInput!\n) {\n  AuthUserMutation(input: $input) {\n    me {\n      id\n      username\n      email\n    }\n    token\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = '29f48fd3965fe97767d10ad9e3e72ef7';
export default node;

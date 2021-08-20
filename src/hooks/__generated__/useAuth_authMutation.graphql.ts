/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AuthUserInput = {
    email: string;
    password: string;
    clientMutationId?: string | null;
};
export type useAuth_authMutationVariables = {
    input: AuthUserInput;
};
export type useAuth_authMutationResponse = {
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
export type useAuth_authMutation = {
    readonly response: useAuth_authMutationResponse;
    readonly variables: useAuth_authMutationVariables;
};



/*
mutation useAuth_authMutation(
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
    "name": "useAuth_authMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useAuth_authMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fd4e12c9011dc24f060adccfe5b8097a",
    "id": null,
    "metadata": {},
    "name": "useAuth_authMutation",
    "operationKind": "mutation",
    "text": "mutation useAuth_authMutation(\n  $input: AuthUserInput!\n) {\n  AuthUserMutation(input: $input) {\n    me {\n      id\n      username\n      email\n    }\n    token\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = '3845fea32c679f3991f933fbc7f787a3';
export default node;

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CreateUserInput = {
    username: string;
    email: string;
    password: string;
    clientMutationId?: string | null;
};
export type SignUpPage_CreateUserMutationVariables = {
    input: CreateUserInput;
};
export type SignUpPage_CreateUserMutationResponse = {
    readonly CreateUserMutation: {
        readonly me: {
            readonly id: string;
            readonly username: string;
            readonly email: string;
        } | null;
        readonly token: string | null;
        readonly error: string | null;
    } | null;
};
export type SignUpPage_CreateUserMutation = {
    readonly response: SignUpPage_CreateUserMutationResponse;
    readonly variables: SignUpPage_CreateUserMutationVariables;
};



/*
mutation SignUpPage_CreateUserMutation(
  $input: CreateUserInput!
) {
  CreateUserMutation(input: $input) {
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
    "concreteType": "CreateUserPayload",
    "kind": "LinkedField",
    "name": "CreateUserMutation",
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
    "name": "SignUpPage_CreateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignUpPage_CreateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b6426aff3055e2fb4bf2c5b2212fcee7",
    "id": null,
    "metadata": {},
    "name": "SignUpPage_CreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpPage_CreateUserMutation(\n  $input: CreateUserInput!\n) {\n  CreateUserMutation(input: $input) {\n    me {\n      id\n      username\n      email\n    }\n    token\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f0adec41d23dfc1edf78b83f70d164e9';
export default node;

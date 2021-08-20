/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CreateTodoInput = {
    content: string;
    clientMutationId?: string | null;
};
export type CreateTodoModal_CreateTodoMutationVariables = {
    input: CreateTodoInput;
};
export type CreateTodoModal_CreateTodoMutationResponse = {
    readonly CreateTodoMutation: {
        readonly created: boolean | null;
        readonly error: string | null;
    } | null;
};
export type CreateTodoModal_CreateTodoMutation = {
    readonly response: CreateTodoModal_CreateTodoMutationResponse;
    readonly variables: CreateTodoModal_CreateTodoMutationVariables;
};



/*
mutation CreateTodoModal_CreateTodoMutation(
  $input: CreateTodoInput!
) {
  CreateTodoMutation(input: $input) {
    created
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
    "concreteType": "CreateTodoPayload",
    "kind": "LinkedField",
    "name": "CreateTodoMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created",
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
    "name": "CreateTodoModal_CreateTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTodoModal_CreateTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bf774ec6f7a13258d1bac60956e3eb96",
    "id": null,
    "metadata": {},
    "name": "CreateTodoModal_CreateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTodoModal_CreateTodoMutation(\n  $input: CreateTodoInput!\n) {\n  CreateTodoMutation(input: $input) {\n    created\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = '93badccd162cdd7721f3b81e18bc44c0';
export default node;

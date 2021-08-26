/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CompleteTodoInput = {
    id: string;
    clientMutationId?: string | null;
};
export type Todo_CompleteMutationVariables = {
    input: CompleteTodoInput;
};
export type Todo_CompleteMutationResponse = {
    readonly CompleteTodoMutation: {
        readonly success: boolean | null;
        readonly error: string | null;
    } | null;
};
export type Todo_CompleteMutation = {
    readonly response: Todo_CompleteMutationResponse;
    readonly variables: Todo_CompleteMutationVariables;
};



/*
mutation Todo_CompleteMutation(
  $input: CompleteTodoInput!
) {
  CompleteTodoMutation(input: $input) {
    success
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
    "concreteType": "CompleteTodoPayload",
    "kind": "LinkedField",
    "name": "CompleteTodoMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
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
    "name": "Todo_CompleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Todo_CompleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "16e5e4e852a0b2225431db4e3fdb0b51",
    "id": null,
    "metadata": {},
    "name": "Todo_CompleteMutation",
    "operationKind": "mutation",
    "text": "mutation Todo_CompleteMutation(\n  $input: CompleteTodoInput!\n) {\n  CompleteTodoMutation(input: $input) {\n    success\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ec15ab11b6ef8ef19b6ac00856ca64db';
export default node;

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
        readonly todoEdge: {
            readonly node: {
                readonly isCompleted: boolean;
            } | null;
        } | null;
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
    todoEdge {
      node {
        isCompleted
        id
      }
    }
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isCompleted",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "success",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Todo_CompleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompleteTodoPayload",
        "kind": "LinkedField",
        "name": "CompleteTodoMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TodoEdge",
            "kind": "LinkedField",
            "name": "todoEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Todo",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Todo_CompleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CompleteTodoPayload",
        "kind": "LinkedField",
        "name": "CompleteTodoMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TodoEdge",
            "kind": "LinkedField",
            "name": "todoEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Todo",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7158f937e581772642291ca8d240ce10",
    "id": null,
    "metadata": {},
    "name": "Todo_CompleteMutation",
    "operationKind": "mutation",
    "text": "mutation Todo_CompleteMutation(\n  $input: CompleteTodoInput!\n) {\n  CompleteTodoMutation(input: $input) {\n    todoEdge {\n      node {\n        isCompleted\n        id\n      }\n    }\n    success\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f6fca50eae85ad0a4feccc12a4fa5ce8';
export default node;

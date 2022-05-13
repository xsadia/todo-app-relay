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
    connections: Array<string>;
};
export type CreateTodoModal_CreateTodoMutationResponse = {
    readonly CreateTodoMutation: {
        readonly todoEdge: {
            readonly cursor: string;
            readonly node: {
                readonly id: string;
                readonly content: string;
                readonly isCompleted: boolean;
                readonly createdAt: string;
            } | null;
        } | null;
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
    todoEdge {
      cursor
      node {
        id
        content
        isCompleted
        createdAt
      }
    }
    created
    error
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
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
      "kind": "ScalarField",
      "name": "cursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Todo",
      "kind": "LinkedField",
      "name": "node",
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
          "name": "content",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isCompleted",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateTodoModal_CreateTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateTodoPayload",
        "kind": "LinkedField",
        "name": "CreateTodoMutation",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateTodoModal_CreateTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateTodoPayload",
        "kind": "LinkedField",
        "name": "CreateTodoMutation",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "todoEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "712b66867131a67ee45b77ec838f6623",
    "id": null,
    "metadata": {},
    "name": "CreateTodoModal_CreateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTodoModal_CreateTodoMutation(\n  $input: CreateTodoInput!\n) {\n  CreateTodoMutation(input: $input) {\n    todoEdge {\n      cursor\n      node {\n        id\n        content\n        isCompleted\n        createdAt\n      }\n    }\n    created\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = 'eb75490a6dea5aff63f7744f7949c1b2';
export default node;

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteTodoInput = {
    id: string;
    clientMutationId?: string | null;
};
export type Todo_DeleteTodoMutationVariables = {
    input: DeleteTodoInput;
    connections: Array<string>;
};
export type Todo_DeleteTodoMutationResponse = {
    readonly DeleteTodoMutation: {
        readonly deletedTodo: string | null;
        readonly success: boolean | null;
        readonly error: string | null;
    } | null;
};
export type Todo_DeleteTodoMutation = {
    readonly response: Todo_DeleteTodoMutationResponse;
    readonly variables: Todo_DeleteTodoMutationVariables;
};



/*
mutation Todo_DeleteTodoMutation(
  $input: DeleteTodoInput!
) {
  DeleteTodoMutation(input: $input) {
    deletedTodo
    success
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
  "kind": "ScalarField",
  "name": "deletedTodo",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "success",
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
    "name": "Todo_DeleteTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteTodoPayload",
        "kind": "LinkedField",
        "name": "DeleteTodoMutation",
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
    "name": "Todo_DeleteTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteTodoPayload",
        "kind": "LinkedField",
        "name": "DeleteTodoMutation",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedTodo",
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
    "cacheID": "bb21d3afa412033bd266844800949d1e",
    "id": null,
    "metadata": {},
    "name": "Todo_DeleteTodoMutation",
    "operationKind": "mutation",
    "text": "mutation Todo_DeleteTodoMutation(\n  $input: DeleteTodoInput!\n) {\n  DeleteTodoMutation(input: $input) {\n    deletedTodo\n    success\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fdf80cd4c988ec763ef9d576ec353174';
export default node;

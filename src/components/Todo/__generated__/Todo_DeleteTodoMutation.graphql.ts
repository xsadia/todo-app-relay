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
};
export type Todo_DeleteTodoMutationResponse = {
    readonly DeleteTodoMutation: {
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
    "concreteType": "DeleteTodoPayload",
    "kind": "LinkedField",
    "name": "DeleteTodoMutation",
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
    "name": "Todo_DeleteTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Todo_DeleteTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5f044028014a87e7fd22865389f1740f",
    "id": null,
    "metadata": {},
    "name": "Todo_DeleteTodoMutation",
    "operationKind": "mutation",
    "text": "mutation Todo_DeleteTodoMutation(\n  $input: DeleteTodoInput!\n) {\n  DeleteTodoMutation(input: $input) {\n    success\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = '176bab605c909dec0e557c6f303ccb8e';
export default node;

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type HomePageUserQueryVariables = {};
export type HomePageUserQueryResponse = {
    readonly user: {
        readonly username: string;
        readonly email: string;
        readonly todos: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string;
                    readonly content: string;
                } | null;
            } | null> | null;
        };
    } | null;
};
export type HomePageUserQuery = {
    readonly response: HomePageUserQueryResponse;
    readonly variables: HomePageUserQueryVariables;
};



/*
query HomePageUserQuery {
  user {
    username
    email
    todos {
      edges {
        node {
          id
          content
        }
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "TodoConnection",
  "kind": "LinkedField",
  "name": "todos",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TodoEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
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
              "name": "content",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomePageUserQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomePageUserQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9eb1bb1fc447c90dd2ce16c784de4a17",
    "id": null,
    "metadata": {},
    "name": "HomePageUserQuery",
    "operationKind": "query",
    "text": "query HomePageUserQuery {\n  user {\n    username\n    email\n    todos {\n      edges {\n        node {\n          id\n          content\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '619b3d2d0fc271d6199e00a833727cf9';
export default node;

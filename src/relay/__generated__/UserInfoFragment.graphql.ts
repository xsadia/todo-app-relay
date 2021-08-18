/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserInfoFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly username: string;
            readonly email: string;
            readonly todos: {
                readonly " $fragmentRefs": FragmentRefs<"TodoContentFragment">;
            };
        } | null;
    } | null> | null;
    readonly " $refType": "UserInfoFragment";
};
export type UserInfoFragment$data = UserInfoFragment;
export type UserInfoFragment$key = {
    readonly " $data"?: UserInfoFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"UserInfoFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserInfoFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
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
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "TodoConnection",
              "kind": "LinkedField",
              "name": "todos",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "TodoContentFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "UserConnection",
  "abstractKey": null
};
(node as any).hash = 'a4fb3395e731ef2094c39ffca81571bd';
export default node;

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Todo_todo = {
    readonly id: string;
    readonly content: string;
    readonly isCompleted: boolean;
    readonly createdAt: string;
    readonly " $refType": "Todo_todo";
};
export type Todo_todo$data = Todo_todo;
export type Todo_todo$key = {
    readonly " $data"?: Todo_todo$data;
    readonly " $fragmentRefs": FragmentRefs<"Todo_todo">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo_todo",
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
  "type": "Todo",
  "abstractKey": null
};
(node as any).hash = 'f48c0196674f547c6152acc15c23beef';
export default node;

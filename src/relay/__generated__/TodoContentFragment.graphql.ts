/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type TodoContentFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly content: string;
        } | null;
    } | null> | null;
    readonly " $refType": "TodoContentFragment";
};
export type TodoContentFragment$data = TodoContentFragment;
export type TodoContentFragment$key = {
    readonly " $data"?: TodoContentFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"TodoContentFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoContentFragment",
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
  "type": "TodoConnection",
  "abstractKey": null
};
(node as any).hash = '290f41ceed300f09534b2bfbff27e9a4';
export default node;

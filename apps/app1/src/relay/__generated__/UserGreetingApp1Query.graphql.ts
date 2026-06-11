/**
 * @generated SignedSource<<b6f969e821d1d422e30c8de5fd0afb70>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UserGreetingApp1Query$variables = Record<PropertyKey, never>;
export type UserGreetingApp1Query$data = {
  readonly country: {
    readonly capital: string | null | undefined;
    readonly name: string;
  } | null | undefined;
};
export type UserGreetingApp1Query = {
  response: UserGreetingApp1Query$data;
  variables: UserGreetingApp1Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "code",
        "value": "PL"
      }
    ],
    "concreteType": "Country",
    "kind": "LinkedField",
    "name": "country",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "capital",
        "storageKey": null
      }
    ],
    "storageKey": "country(code:\"PL\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserGreetingApp1Query",
    "selections": (v0/*:: as any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserGreetingApp1Query",
    "selections": (v0/*:: as any*/)
  },
  "params": {
    "cacheID": "4bcf9d57de941d8dfbc6ca0ceb12e393",
    "id": null,
    "metadata": {},
    "name": "UserGreetingApp1Query",
    "operationKind": "query",
    "text": "query UserGreetingApp1Query {\n  country(code: \"PL\") {\n    name\n    capital\n  }\n}\n"
  }
};
})();

(node as any).hash = "b132a0af4f8df5af2adbe7bf975ffdab";

export default node;

/**
 * @generated SignedSource<<a4c35f368bb288b2b97093c0a55802da>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UserGreetingApp2Query$variables = Record<PropertyKey, never>;
export type UserGreetingApp2Query$data = {
  readonly country: {
    readonly capital: string | null | undefined;
    readonly name: string;
  } | null | undefined;
};
export type UserGreetingApp2Query = {
  response: UserGreetingApp2Query$data;
  variables: UserGreetingApp2Query$variables;
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
    "name": "UserGreetingApp2Query",
    "selections": (v0/*:: as any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserGreetingApp2Query",
    "selections": (v0/*:: as any*/)
  },
  "params": {
    "cacheID": "b2eeccfbf5c9ddffa8c6449d07ffc61e",
    "id": null,
    "metadata": {},
    "name": "UserGreetingApp2Query",
    "operationKind": "query",
    "text": "query UserGreetingApp2Query {\n  country(code: \"PL\") {\n    name\n    capital\n  }\n}\n"
  }
};
})();

(node as any).hash = "fbaeab450aae877fac32c0fce4a602a5";

export default node;

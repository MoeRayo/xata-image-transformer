"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getXataClient = exports.XataClient = void 0;
// Generated by Xata Codegen 0.26.5. Please do not edit.
const client_1 = require("@xata.io/client");
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [
  { name: "images", columns: [{ name: "image", type: "file[]" }] },
  {
    name: "users",
    columns: [
      { name: "first_name", type: "string" },
      { name: "last_name", type: "string" },
      { name: "email", type: "string" },
      { name: "password", type: "string" },
    ],
  },
];
/** @type { import('../../client/src').ClientConstructor<{}> } */
const DatabaseClient = (0, client_1.buildClient)();
const defaultOptions = {
  databaseURL:
    "https://Olufunke-Moronfolu-s-workspace-vj48pf.us-east-1.xata.sh/db/image-transformation",
};
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}
exports.XataClient = XataClient;
let instance = undefined;
/** @type { () => XataClient } */
const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};
exports.getXataClient = getXataClient;

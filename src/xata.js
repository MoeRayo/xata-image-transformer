// Generated by Xata Codegen 0.26.5. Please do not edit.
import { buildClient } from "@xata.io/client";
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [
	{ name: "images", columns: [{ name: "image", type: "file[]" }] },
];
/** @type { import('../../client/src').ClientConstructor<{}> } */
const DatabaseClient = buildClient();
const defaultOptions = {
	enableBrowser: true,
	apiKey: import.meta.env.VITE_XATA_API_KEY,
	databaseURL:
		"https://Olufunke-Moronfolu-s-workspace-vj48pf.us-east-1.xata.sh/db/image-transformation",
};
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
export class XataClient extends DatabaseClient {
	constructor(options) {
		super({ ...defaultOptions, ...options }, tables);
	}
}
let instance = undefined;
/** @type { () => XataClient } */
export const getXataClient = () => {
	if (instance) return instance;
	instance = new XataClient();
	return instance;
};

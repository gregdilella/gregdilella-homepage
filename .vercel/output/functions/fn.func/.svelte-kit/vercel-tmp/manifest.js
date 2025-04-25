export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["GD.png","banner.png","favicon.png","fonts/Geist.ttf","robots.txt"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.B0u0_3BI.js","app":"_app/immutable/entry/app.COE6shHc.js","imports":["_app/immutable/entry/start.B0u0_3BI.js","_app/immutable/chunks/entry.BUtArwCO.js","_app/immutable/chunks/scheduler.BXkDTsw4.js","_app/immutable/entry/app.COE6shHc.js","_app/immutable/chunks/scheduler.BXkDTsw4.js","_app/immutable/chunks/index.OxkCvJe9.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Contact",
				pattern: /^\/Contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Projects",
				pattern: /^\/Projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();


export type Callback = (query: string, params:any[], target: object, propertyKey: string, context?: string) => any;
let __callback: Callback;

export function query(query: string, context?: string) {
	return function (target: object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
		descriptor.value = function (...params: any[]): any {
			const rt = __callback(query, params, target, propertyKey, context);
			return rt;
		};
		return descriptor;
	};
}

export function init(callback: Callback) {
	__callback = callback;
}

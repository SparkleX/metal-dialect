# Data Access Decorator


```js
import { init, query } from "metal-dao";

function callback (query: string, params:any[], target: object, propertyKey: string, context?: string){
    // will be called later
    return "data"
}
class DaoTEST {
	@query("select * from TEST","connection 2")
	async find(a: number, b: string):Promise<any> {
		throw -1;
	}
}

const daoTest = new DaoTest();
const rt = await daoTest.find(1, "2");

```
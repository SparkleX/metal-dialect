
import { init, query } from "..";

const mockCallback = jest.fn();

class DaoTEST {
	@query("select * from TEST","connection 2")
	async find(a: number, b: string):Promise<any> {
		throw -1;
	}
}
beforeEach(() => {
	init(mockCallback);
});

test("connection pool", async () => {
	mockCallback
	.mockResolvedValueOnce(123)

	const daoTEST = new DaoTEST();
	const rt = await daoTEST.find(1,"2");

	expect(rt).toBe(123);
	expect(mockCallback.mock.calls.length).toBe(1);
	expect(mockCallback.mock.calls[0][0]).toBe("select * from TEST");
	expect(mockCallback.mock.calls[0][1]).toStrictEqual([1, "2"]);
	expect(mockCallback.mock.calls[0][2]).toStrictEqual(daoTEST);
	expect(mockCallback.mock.calls[0][3]).toBe("find");
	expect(mockCallback.mock.calls[0][4]).toBe("connection 2");

});

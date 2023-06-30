
import { ObjectMetadata } from "../ObjectMetadata.js";

test("test", () => {
	const metadata = new ObjectMetadata();
	const data = {
		a: 1,
		b: 2
	}
	const rt = metadata.getColumns("", data);

	expect(rt).toStrictEqual(["a","b"]);
});

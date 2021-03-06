test("assign", function () {
	var a = "foo";

	assert(a === "foo");

	a = "bar";

	assert(a === "bar");

	var b = true, c = false, d, e;

	d = b ? "b is true" : "b is false";
	e = c ? "c is true" : "c is false";

	assert(d === "b is true");
	assert(e === "c is false");

	var o = {};
	o.undefined = undefined;
	o.null = null;
	o.bool = true;
	o.number = 42;
	o.string = "foo";
	o.f = function () {
		this.number /= 2;
	};
	o[[ 1, 2, 3 ]] = "x";
	o[{}] = "y";

	assert(o["undefined"] === undefined);
	assert(o["null"] === null);
	assert(o["bool"] === true);
	assert(o["number"] === 42);
	assert(o["string"] === "foo");
	assert(typeof o["f"] === "function");
	o["f"]();
	assert(o["number"] === 21);
	assertEqual(o["1,2,3"], "x");
	assertEqual(o["[object Object]"], "y");
	assertEqual(o[[ 1, 2, 3 ]], "x");
	assertEqual(o[{}], "y");

	o[undefined] = "z";
	assertEqual(o["undefined"], "z");
	assertEqual(o[undefined], "z");

	o[null] = "z";
	assertEqual(o["null"], "z");
	assertEqual(o[null], "z");
});

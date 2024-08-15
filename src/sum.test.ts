import { describe, expect, it } from "vitest";

import { sum } from "./sum.js";

describe("sum", () => {
	it("adds two numbers", () => {
		expect(sum(1, 2)).toBe(3);
	});

	it("adds two negative numbers", () => {
		expect(sum(-1, -2)).toBe(-3);
	});

	it("adds a positive and a negative number", () => {
		expect(sum(1, -2)).toBe(-1);
	});

	it("adds two floating point numbers", () => {
		expect(sum(1.1, 2.2)).toBeCloseTo(3.3);
	});
});

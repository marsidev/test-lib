import { describe, expect, it } from "vitest";
import { multiply } from "./multiply.js";

describe("multiply", () => {
	it("multiplies two numbers", () => {
		expect(multiply(2, 3)).toBe(6);
	});

	it("multiplies two negative numbers", () => {
		expect(multiply(-2, -3)).toBe(6);
	});

	it("multiplies a positive and a negative number", () => {
		expect(multiply(2, -3)).toBe(-6);
	});

	it("multiplies two floating point numbers", () => {
		expect(multiply(1.1, 2.2)).toBeCloseTo(2.42);
	});
});

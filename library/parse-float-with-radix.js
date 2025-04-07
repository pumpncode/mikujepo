/**
 * Taken from https://gist.github.com/Hafthor/0a60f918d50113600d7c67252e68a02d
 *
 * @param {string} string
 * @param {number} radix
 * @returns {number}
 * @example
 */
const parseFloatWithRadix = (string, radix = 10) => {
	const [integerPart, decimalPart] = (`${string}.`).split(".");

	const numberOfZeros = Number.parseInt(`1${decimalPart || ""}`, radix).toString(radix).length;

	return Number.parseInt(integerPart, radix) +
		(Number.parseInt(decimalPart || "0", radix) / Number.parseInt(`1${Array.from({ length: numberOfZeros }).join("0")}`, radix));
};

export default parseFloatWithRadix;

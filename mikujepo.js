import {
	shift,
	zip
} from "@radashi-org/radashi";

/**
 * @import { ReadonlyTuple, Join } from "type-fest";
 */

const vowels = /** @type {const} */ ([
	"i",
	"u",
	"e",
	"o"
]);

const consonantParts = /** @type {const} */ ([
	"m",
	"k",
	"j",
	"p",
	"n",
	"t",
	"l",
	"s"
]);

/**
 * @template {unknown} ItemTemplate
 * @template {number} TimesTemplate
 * @param {readonly ItemTemplate[]} array
 * @param {TimesTemplate} times
 * @returns {ReadonlyTuple<ItemTemplate, TimesTemplate>}
 * @example
 */
const repeatArray = (array, times) => /** @type {ReadonlyTuple<ItemTemplate, TimesTemplate>} */ (
	Array.from({ length: times }, () => array).flat()
);

/**
 *
 * @template {unknown} ItemTemplate
 * @param {readonly (readonly ItemTemplate[])[]} arrays
 * @returns {readonly (readonly ItemTemplate[])[]}
 * @example
 */
const adaptArrays = (arrays) => {
	const maxLength = Math.max(...arrays.map((array) => array.length));

	return arrays
		.map((array) => (
			repeatArray(array, Math.ceil(maxLength / array.length))
				.slice(0, maxLength)
		));
};

const [adaptedConsonantParts, adaptedVowels] = adaptArrays([consonantParts, vowels]);

const syllables = consonantParts
	.map((consonantPart, index) => zip(shift(adaptedConsonantParts, -index), adaptedVowels))
	.slice(0, vowels.length).flat()
	.map((letters) => /** @type {Join<letters, "">} */ (letters.join("")));

const base = syllables.length;

/**
 * @template {number | bigint | string} NumberOrStringTemplate
 * @typedef {(
 * NumberOrStringTemplate extends string
 * ? number
 * : NumberOrStringTemplate extends number | bigint
 * ? string
 * : never
 * )} MikujepoReturnType
 */

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

	const l1 = Number.parseInt(`1${decimalPart || ""}`, radix).toString(radix).length;

	return Number.parseInt(integerPart, radix) +
		(Number.parseInt(decimalPart || "0", radix) / Number.parseInt(`1${Array.from({ length: l1 }).join("0")}`, radix));
};

/**
 * @template {number | bigint | string} NumberOrStringTemplate
 * @param {NumberOrStringTemplate} numberOrString
 * @returns {MikujepoReturnType<NumberOrStringTemplate>}
 * @example
 */
const mikujepo = (numberOrString) => {
	if (typeof numberOrString === "number" || typeof numberOrString === "bigint") {
		const digitsInDecimal = [...numberOrString.toString(base)]
			.map((digitOrComma) => (digitOrComma === "." ? digitOrComma : Number.parseInt(digitOrComma, base)));

		const numberSyllables = digitsInDecimal.map((digitOrComma) => (digitOrComma === "." ? "ba" : syllables[digitOrComma]));

		return /** @type {MikujepoReturnType<NumberOrStringTemplate>} */ (
			numberSyllables.join("")
		);
	}

	return /** @type {MikujepoReturnType<NumberOrStringTemplate>} */ (
		parseFloatWithRadix(
			numberOrString
				.split("ba")
				.map((part) => (
					part
						.split(/(?<=^(?:[a-z]{2})+)/v)
						.map((syllable) => (
							syllables
								.indexOf(/** @type {syllables[number]} */ (syllable))
								.toString(base)
						))
						.join("")
				))
				.join("."),
			base
		)
	);
};

export default mikujepo;

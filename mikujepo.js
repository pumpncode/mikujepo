import {
	syllables
} from "./_common/_exports.js";
import {
	base,
	parseFloatWithRadix
} from "./library/_exports.js";

/**
 * @import { MikujepoReturnType } from "./_types/_exports.js";
 */

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

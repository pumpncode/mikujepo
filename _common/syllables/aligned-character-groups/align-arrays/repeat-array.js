/**
 * @import { ReadonlyTuple } from "type-fest";
 */

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

export default repeatArray;

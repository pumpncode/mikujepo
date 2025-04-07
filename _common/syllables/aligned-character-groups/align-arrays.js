import { repeatArray } from "./align-arrays/_exports.js";

/**
 *
 * @template {unknown} ItemTemplate
 * @param {readonly (readonly ItemTemplate[])[]} arrays
 * @returns {readonly (readonly ItemTemplate[])[]}
 * @example
 */
const alignArrays = (arrays) => {
	const maxLength = Math.max(...arrays.map((array) => array.length));

	return arrays
		.map((array) => (
			repeatArray(array, Math.ceil(maxLength / array.length))
				.slice(0, maxLength)
		));
};

export default alignArrays;

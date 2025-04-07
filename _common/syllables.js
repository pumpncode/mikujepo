import {
	shift,
	zip
} from "@radashi-org/radashi";

import { consonants, vowels } from "./_common/_exports.js";
import { alignedCharacterGroups } from "./syllables/_exports.js";

/**
 * @import { Join } from "type-fest";
 */

const [alignedConsonants, alignedVowels] = alignedCharacterGroups;

const syllables = consonants
	.map((consonantPart, index) => zip(shift(alignedConsonants, -index), alignedVowels))
	.slice(0, vowels.length).flat()
	.map((letters) => /** @type {Join<letters, "">} */ (letters.join("")));

export default syllables;

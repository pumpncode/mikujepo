import consonants from "../_common/consonants.js";
import vowels from "../_common/vowels.js";

import { alignArrays } from "./aligned-character-groups/_exports.js";

const alignedCharacterGroups = alignArrays([consonants, vowels]);

export default alignedCharacterGroups;

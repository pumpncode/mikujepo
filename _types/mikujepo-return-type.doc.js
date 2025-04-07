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

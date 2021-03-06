import metadata from './metadata.min.json'

import parseNumberCustom from './es6/parse'
import formatNumberCustom from './es6/format'
import getNumberTypeCustom from './es6/types'
import isValidNumberCustom from './es6/validate'
import findPhoneNumbersCustom, { searchPhoneNumbers as searchPhoneNumbersCustom, PhoneNumberSearch as PhoneNumberSearchCustom } from './es6/findPhoneNumbers'
import AsYouTypeCustom from './es6/AsYouType'
import getCountryCallingCodeCustom from './es6/getCountryCallingCode'
export { default as Metadata } from './es6/metadata'
import { getExtPrefix as getExtPrefixCustom } from './es6/metadata'
import { parseRFC3966 as parseRFC3966Custom, formatRFC3966 as formatRFC3966Custom } from './es6/RFC3966'

export function parseNumber()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return parseNumberCustom.apply(this, parameters)
}

// Deprecated: remove `parse()` export in 2.0.0.
// (renamed to `parseNumber()`)
export function parse()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return parseNumberCustom.apply(this, parameters)
}

export function formatNumber()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return formatNumberCustom.apply(this, parameters)
}

// Deprecated: remove `format()` export in 2.0.0.
// (renamed to `formatNumber()`)
export function format()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return formatNumberCustom.apply(this, parameters)
}

export function getNumberType()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return getNumberTypeCustom.apply(this, parameters)
}

export function isValidNumber()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return isValidNumberCustom.apply(this, parameters)
}

export function findPhoneNumbers()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return findPhoneNumbersCustom.apply(this, parameters)
}

export function searchPhoneNumbers()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return searchPhoneNumbersCustom.apply(this, parameters)
}

export function PhoneNumberSearch(text, options)
{
	PhoneNumberSearchCustom.call(this, text, options, metadata)
}

PhoneNumberSearch.prototype = Object.create(PhoneNumberSearchCustom.prototype, {})
PhoneNumberSearch.prototype.constructor = PhoneNumberSearch

export function AsYouType(country)
{
	AsYouTypeCustom.call(this, country, metadata)
}

AsYouType.prototype = Object.create(AsYouTypeCustom.prototype, {})
AsYouType.prototype.constructor = AsYouType

export function getExtPrefix()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return getExtPrefixCustom.apply(this, parameters)
}

export function parseRFC3966()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return parseRFC3966Custom.apply(this, parameters)
}

export function formatRFC3966()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return formatRFC3966Custom.apply(this, parameters)
}

// Deprecated: remove DIGITS export in 2.0.0 (unused).
export { DIGIT_MAPPINGS as DIGITS } from './es6/common'

// Deprecated: remove this in 2.0.0 and make `custom.js` in ES6
// (the old `custom.js` becomes `custom.commonjs.js`).
export { default as parseCustom } from './es6/parse'
export { default as formatCustom } from './es6/format'
export { default as isValidNumberCustom }    from './es6/validate'
export { default as findPhoneNumbersCustom } from './es6/findPhoneNumbers'
export { searchPhoneNumbers as searchPhoneNumbersCustom } from './es6/findPhoneNumbers'
export { PhoneNumberSearch as PhoneNumberSearchCustom } from './es6/findPhoneNumbers'
export { default as getNumberTypeCustom }    from './es6/types'
export { default as getCountryCallingCodeCustom } from './es6/getCountryCallingCode'

export
{
	default as AsYouTypeCustom,
	// `DIGIT_PLACEHOLDER` is used by `react-phone-number-input`.
	DIGIT_PLACEHOLDER
}
from './es6/AsYouType'

export function getCountryCallingCode(country)
{
	return getCountryCallingCodeCustom(country, metadata)
}

// `getPhoneCode` name is deprecated, use `getCountryCallingCode` instead.
export function getPhoneCode(country)
{
	return getCountryCallingCode(country)
}

// `getPhoneCodeCustom` name is deprecated, use `getCountryCallingCodeCustom` instead.
export function getPhoneCodeCustom(country, metadata)
{
	return getCountryCallingCodeCustom(country, metadata)
}
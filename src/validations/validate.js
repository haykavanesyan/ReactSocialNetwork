import React from 'react'



export const error = (value) =>{
	if(!!value) return undefined

	return "fail"
}


export const maxlength = (max) => (value) => {
	if(value.length < max) return "please write 8 simbols"

		return undefined
}
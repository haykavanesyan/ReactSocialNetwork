import React from 'react'
import style from './login.module.css'

const Element = (Element) => ({input, meta, ...props}) => {
	const errorer = meta.touched && meta.error

	return (
         <div>
         	<Element className={(errorer ? style.error : '')} {...input} {...props} />
         </div>
		)
}


export const input = Element('input')
export const textarea = Element('textarea')

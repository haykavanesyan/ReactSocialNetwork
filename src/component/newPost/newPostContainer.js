import React from 'react'
import NewPost from './newPost'
import {connect} from 'react-redux'


const mapStateToProps = (state) =>{
	return ({
		profile: state.profile,

	})
}

const mapDispatchToProps = (dispatch) =>{
	return ({
		addPost: () => { dispatch({type: "ADD_POST"})},
		textValue: (post) => {dispatch({type: "TEXT_VALUES", text: post})}

	})
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
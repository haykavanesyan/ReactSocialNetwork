import React from 'react'
import Users from './users'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Pagination from "react-js-pagination";
import ReactPaginate from 'react-paginate';
import gif from '../../gif/200.gif'
import {getUsers} from '../../DAL/api'
import style from './users.module.css'
import {getUsersThunk,  follow, unfollow, setUsers, pageChanger, waitChange, button, FollowThunk, unFollowThunk} from '../../redux/usersReducer'


class UsersAPI extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

    componentDidMount(){
           this.props.getUsersThunk()

}

pageChanger = (e) => {
	     this.props.getUsersThunk(e)
       this.setState({activePage: e});
      
}


 
render() {
          
 return <div>
 <div className={style.pagination}>
<Pagination

          hideFirstLastPages
          activePage={this.state.activePage}
          totalItemsCount={5000}
          itemsCountPerPage={20}
          pageRangeDisplayed={10}
          onChange={this.pageChanger}
          prevPageText={'Prev'}
          nextPageText={'Next'}


        />
        </div>
           {this.props.wait ? <img src={gif}/> : 
        
        <Users users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               button={this.props.button}
               buttonDisable={this.props.buttonDisable}
               FollowThunk={this.props.FollowThunk}
               unFollowThunk={this.props.unFollowThunk}
               />
           }
</div>
}}

let mapStateToProps = (state) => {
	return {users: state.usersPage.users,

	activePage: state.usersPage.activePage,
	wait: state.usersPage.wait,
  buttonDisable: state.usersPage.buttonDisable,
}
}




export default connect(mapStateToProps,{getUsersThunk,  follow, unfollow, setUsers, pageChanger, waitChange, button, FollowThunk, unFollowThunk})(UsersAPI)
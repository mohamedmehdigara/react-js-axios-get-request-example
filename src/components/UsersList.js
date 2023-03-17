import React, {Component, useState}from 'react'
import axios from 'axios';
 
class UsersList extends Component{
 
    constructor(props){
        super(props)
        this.state = {
            users: []
         }
    }
 
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const users = res.data;
            this.setState({ users });
          })
      } 
 
    render(){
        return(
            <div>
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <br /><br />
                        <h3>Users List</h3><br />
                        <table class="table table-bordered">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                        {
                            this.state.users ?
                                 
                                    this.state.users.map((user,i)=>
                                        <tr>
                                            <td>{++i}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address.city}</td>
                                        </tr>
                                    )
                            :
                            null
                        }
                        </table>
                    </div>
                </div>
            </div>
        )  
    }
}
 
export default UsersList;
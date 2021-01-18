import React from 'react';
import axios from 'axios';

class GetApi extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            users:[],
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({ users: response.data })
        })
        .catch(error => {
            console.log("getting error from url", error.message)
        })
    }
    render(){
        const { users } = this.state;
        return(
            <div data-test="api-call-component">
                {users.length > 0 ? 
                    <ul>
                        {users.map((user, userIdx) => 
                            <li key={userIdx} data-test="users-list">{user.name}</li>
                        )}
                    </ul>
                    : <h5> Loading... </h5>
                }
            </div>
        )
    }
}
export default GetApi;
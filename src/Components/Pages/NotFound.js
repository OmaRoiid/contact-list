import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                 <h1 className="display-4"><span className="text-danger">404</span> Page Not Found </h1>
                <p className="leed">Sorry we can't find this page</p>
               
            </div>
        )
    }
}

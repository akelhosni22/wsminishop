import React from 'react'
import{Route,Redirect} from 'react-router-dom'

const PrivateRoute = ({component:Component,authed,...rest}) => {
    return (
        <div>
            return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )

        </div>
    )
}

export default PrivateRoute

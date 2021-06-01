import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import Category from './Category'
import Home from './Home'
import Products from './Products'
import Admin from './Admin'
const Nav = () => {
    return (
        
        <div className="Navbarstyle">
          <ul style={{backgroundColor:"gray",display:"flex",justifyContent:"space-around",color:"white" ,listStyleType:"none"}}>
             <li><Link to='/'>Home</Link></li> 
             <li><Link to='/Category'>Category</Link></li>
             <li><Link to='/Products'>Products</Link></li>
             <li><Link to='/Admin'>Admin</Link></li>
            </ul>
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Category' component={Category}/>
            <Route path='/Products' component={Products}/> 
            <Route path='/Admin' component={Admin}/>
            </Switch>
        </div>
    )
}

export default Nav

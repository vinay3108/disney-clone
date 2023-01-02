import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import './App.css'
import AddNew from './Components/AddNew'
import Detail from './Components/Detail'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'
import EditData from './Components/EditData'
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          {/* <Route exact path='/'>
            <Login/>
          </Route> */}
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/detail/:id'>
          <Detail/>
          </Route>
          <Route exact path='/detail/:id/edit'>
          <EditData/>
          </Route>

          <Route exact path='/new'>
          <AddNew/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  )
}

export default App

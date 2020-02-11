import React from 'react'
import Greet from './components/Greet'
import './App.css'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Greet name="Teboho" heroName="Superman"></Greet>
      <Greet name="Thabiso" heroName="Batman"></Greet>
      <Greet name="Tumelo" heroName="Zorro"></Greet> */}
      {/* <Welcome name="Teboho" heroName="Superman"></Welcome> */}
      {/* <Hello></Hello> */}

      {/* <FunctionClick />
      <ClassClick /> */}

      {/* <EventBind /> */}

      {/* <ParentComponent /> */}

      {/* <UserGreeting /> */}

      {/* <NameList /> */}

      <Stylesheet primary={false}/>

    </div>
  )
}

export default App

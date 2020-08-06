import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content  = (props) => {
  return (
    <div>
      <Part part={props.part.part1}/>
      <Part part={props.part.part2}/>
      <Part part={props.part.part3}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.total.exec1 + props.total.exec2 + props.total.exec3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = {
    part1: 'Fundamentals of React',
    part2: 'Using props to pass data',
    part3: 'State of a component',
  }

  const exercises = {
    exec1: 10,
    exec2: 7,
    exec3: 14,
  }

  return (
    <div>
      <Header name = {course}/>
      <Content part = {parts} exec = {exercises}/>
      <Total total = {exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
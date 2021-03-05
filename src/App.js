import React, { Component } from "react"
import "./App.css"
import { CardList } from "./components/card-list/card-list-component"
import { SearchBox } from "./components/search-box/search-box-component"

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ""
    }
    // this.handleChange = this.handleChange.bind(this) - binding this to a function works but using an arrow function is the preferred method
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }
  // using an anonomous function allows you to set this in a global context that can be used in other functions
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    // destructuring the monsters array to create a monsters and a searchField variable
    const { monsters, searchField } = this.state
    // by using the filter method we get back a new array
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />

        {/* <CardList monsters={this.state.monsters} /> */}
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App

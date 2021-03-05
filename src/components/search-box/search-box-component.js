import React from "react"
import "./search-box-styles.css"

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    // onChange={(e) => console.log(e, e.target, e.target.value)}
    // using a callback function to save state from input field because set state is asynchronis
    // onChange={(e) =>
    //   this.setState({ searchField: e.target.value }, () =>
    //     console.log(this.state)
    // onChange={(e) => this.setState({ searchField: e.target.value })}
    onChange={handleChange}
  />
)

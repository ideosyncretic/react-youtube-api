import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange (e) {
    e.preventDefault()
    this.setState({
      searchText: e.target.value
    })
  }
  render () {
    return (
      <input
        onChange={this.onInputChange}
        value={this.state.searchText}
      />
    )
  }
}

export default SearchBar

import React, { Component } from 'react'
import './index.css'

/*********************************Start of Component***************************/
class Sidebar extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
  this.setState({
    query: query
  })
}


/********************************Render Method*********************************/
  render() {

    return (
      <div className="sidebar">
        <div className="filter">
          <input
              aria-label="input"
              className="filterBox"
              type="search"
              placeholder="  Filter by Name"
              value={this.state.query}
              onChange={(event) =>
                this.updateQuery(event.target.value)}
              ></input>
        </div>

        <h2>Results</h2>
          <ol className="filteredList"
              type="1"
              places={this.props.places}
              >
              {this.props.places && this.props.places
                .map((place, index) => (
                  <li key={index}
                      tabIndex="0"
                      id={index}
                      onClick={() => this.props.handleListItemClick(this.props) }>
                        {place.title}
                        <br />
                        <figure>
                        <img src={place.photo} alt={place.title} />
                        <figcaption>Taken by: {place.attribution}</figcaption>
                        </figure>
                  </li>
              ))
            }
          </ol>
      </div>
    );
  }
}

export default Sidebar;

import React from "react";
const resultsArray = [];
class Results extends React.Component {

  constructor(props) {
    super(props);
  }

 

// We can alternatively use an arrow function in both filters and maps
const matched = resultsArray.filter(
  data =>
    // This evaluated to either true or false
    data.title = this.title;
);
 

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">

          <h1>Articles:</h1>
           {this.props.results.map(function(search, i) {
            return (
              <p key={i}>{search.title} - {search.date} - {search.url}</p>
            );
          })}

          <Link to="/Saved"><button
                type="submit"
                className="btn btn-primary"
              >
                Save This Article
              </button></Link>

        </div>
      </div>
    );
  }
}

// Export the component back for use in other files
export default Results;

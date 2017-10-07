import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';


@connect((store) => {
  return {
    query: store.query,
    results: store.results,
    users: store.users,
    currentUser: store.currentUser,
    userSongs: store.userSongs
  };
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    const {location} = this.props;
    if (!location.hash) {
      window.location = window.server + '/hostLogin';
    }
  }

  render(){
    return (
      <div>
        <Banner/>
        <MuiThemeProvider>
          <Navbar/>
        </MuiThemeProvider>
        <Container/>
      </div>
    );
  }
}

export default App;
window.App = App;

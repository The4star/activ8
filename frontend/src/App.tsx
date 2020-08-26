import React, {Component} from 'react';
import axios from 'axios';

// icons
import GroupIcon from '@material-ui/icons/Group';

class App extends Component {

  state = {
    values: []
  }

  componentDidMount = async () => {
    const response = await axios.get('http://localhost:5000/api/values')
    
    this.setState({
      values: response.data
    })
  }

  render() {
    return (
      <div className="container">
        <header>
          <GroupIcon />
          <h1>Activ8</h1>
        </header>
          <ul>
            {
              this.state.values.map((value: any) => (
                <li>{value.name}</li>
              ))
            }
          </ul>
      </div>
    );
  }
}

export default App;

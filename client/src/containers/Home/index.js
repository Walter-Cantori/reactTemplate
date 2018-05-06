import React, { Component } from 'react';

import GreetingList from '../../components/greetingsList';
import { getGreetings, newGreeting } from '../../services/greetings';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: [],
      error: null,
      greeting: '',
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.getGreetings = this.getGreetings.bind(this);
  }

  componentDidMount() {
    this.getGreetings();
  }

  async getGreetings() {
    try {
      const greetings = await getGreetings();
      this.setState({ greetings });
    } catch (err) {
      this.setState({ error: 'Unable to fetch greetings' });
    }
  }

  async handleFormSubmit(e) {
    e.preventDefault();
    const result = await newGreeting({ name: this.state.greeting });
    if (result === 'ok') {
      this.setState({ greeting: '' });
      this.getGreetings();
    }
  }

  render() {
    if (this.state.error) return <h1>{this.state.error}</h1>;
    return (
      <div>
        <GreetingList greetings={this.state.greetings} />
        <form onSubmit={this.handleFormSubmit}>
          <input
            onChange={event => this.setState({ greeting: event.target.value })}
            value={this.state.greeting}
            name="greeting"
            type="text"
          />
          <button type="input">Submit</button>
        </form>
      </div>
    );
  }
}

export default Home;

import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import Player from './Player';
import AddPlayer from './AddPlayer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle={this.props.subtitle}/>
        <div className="wrapper">
          <PlayerList players={this.props.players}/>
          <AddPlayer/> 
        </div>
      </div>
    );
  }
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}
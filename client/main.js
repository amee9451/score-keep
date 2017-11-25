import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

// Collections
import { Players, calculatePlayerPositions } from './../imports/api/players';

// Components
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let title = 'Score Keep';
    let subtitle = 'Created by Arnaud';
    let players = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    ReactDOM.render(<App title={title} players={positionedPlayers} subtitle={subtitle}/>, document.getElementById('app'));
  });
});
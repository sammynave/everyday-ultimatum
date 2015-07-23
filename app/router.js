import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ultimata', function() {
    this.route('ultimatum', { path: ':ultimatum_id'});
  });
});

export default Router;

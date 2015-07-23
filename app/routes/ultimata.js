import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.find('ultimatum');
    //return [{shortTitle: "ultimatum 1"}, {shortTitle: "ultimatum 2"}]; 
  }
});

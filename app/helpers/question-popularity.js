import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(answer.get('questions').get('lenght') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(questionPopularity);

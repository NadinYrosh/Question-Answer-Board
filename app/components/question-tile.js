import Ember from 'ember';

export default Ember.Component.extend({
  favoriteCart: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    },

    addToFavourite(question) {
      this.get('favoriteCart').add(question);
    },
  }
});

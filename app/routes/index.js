import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestionOnQuestionRoute(questionInput){
      var newQuestion = this.store.createRecord('question', questionInput);
      newQuestion.save();
      this.transitionTo('index');
    }
    // destroyAnswer(answer) {
    //   answer.destroyAnswer();
    //   this.transitionTo('index');
    // }
  }
});

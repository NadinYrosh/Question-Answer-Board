import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions:{
    deleteQuestion(question) {
      // if (confirm('Are you sure you want to delete this question?')) {
        var answer_deletition = question.get('answers').map(function(answer) {
          console.log('answer->>>>', answer);
          return question.destroyAnswer(answer);
        });
       Ember.RSVP.all(answer_deletition).then(function() {
         return question.destroyRecord();
       });
       this.transitionTo('index');
      // }
      }
    }
});

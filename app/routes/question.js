import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
    },
    upvote(answer) {
      answer.set('votes', answer.get('votes') + 1);
      answer.save();
    },



    deleteQuestion(question) {
      console.log("ass!!!");
      if (confirm('Are you sure you want to delete this question?')) {
        var answer_deletition = question.get('answers').map(function(answer) {
          return answer.destroyRecord();
        });
       Ember.RSVP.all(answer_deletition).then(function() {
         return question.destroyRecord();
       });
       this.transitionTo('index');
      }
    }
  }
});

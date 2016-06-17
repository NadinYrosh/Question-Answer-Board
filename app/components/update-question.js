import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      console.log("tip!");
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        ask: this.get('ask'),
        author: this.get('author'),
        note: this.get('note')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});

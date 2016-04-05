
Template.header.created = function(){
  this.data = {};
  console.log('header created',this.data);
  //this.data.hasInput = new ReactiveVar();
};

Template.header.rendered = function(){

};

Template.header.helpers({
  hasInput: function(){

  },
  formOpen: function(){
    return Session.get('formOpen');
  }

});

Template.header.events({
  'click #add-link-btn': function(evt, tmplt){
      var linkInput = $('#link-input').val();
      if(!linkInput) return;
      Session.set('formOpen',true);

  },
  // 'keydown #link-input': function(evt, tmplt){
  //         //event.preventDefault();
  //     var linkInput = $('#link-input').val();
  //     if(!linkInput) return;
  //     hasInput.set(linkInput);
  // }
  'click #add-link-btn' : function(evt, templt){
    var linkInput = $('#link-input').val();
      if(!linkInput) return;
      Session.set('formOpen',true);
  }
});
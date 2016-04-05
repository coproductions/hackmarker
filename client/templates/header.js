Template.header.created = function(){
  console.log('header created');
  hasInput = new ReactiveVar();
};

Template.header.rendered = function(){

};

Template.header.helpers({
  hasInput: function(){
    return hasInput.get();
  }

});

Template.header.events({
  'click #add-link-btn': function(evt, tmplt){
      var linkInput = $('#link-input').val();
      if(!linkInput) return;
      hasInput.set(linkInput);

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
      hasInput.set(linkInput);
  }
});
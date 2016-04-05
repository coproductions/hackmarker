Template.bookmarkModal.helpers({
  comments: function(){
    return Session.get('currentModal').comments;
  }
});

Template.bookmarkModal.events({
  'click #addCommentButton': function(evt, template){
    event.preventDefault();
    let linkId = Session.get('currentModal')._id;
    let newComment = {text: $('#comment').val(), timeAdded: moment().unix()};
    Links.update({_id:linkId},{$push:{comments:newComment}})
    $('#comment').val('');
     $('#bookmark-modal').modal('hide');
  }
})
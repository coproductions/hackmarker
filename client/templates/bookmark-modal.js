Template.bookmarkModal.helpers({
  comments: function(){
    return Session.get('currentModal').comments;
  },
  avRating: function(){
    if(!Session.get('currentModal')) return;
    return Session.get('currentModal').avRating;
    let arr = Session.get('currentModal').rating;
    let rating =  _.reduce(arr, function(memo, num) {
        return memo + num;
      }, 0) / (arr.length === 0 ? 1 : arr.length);
     return Math.floor(rating + 0.5);
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
  },
   'click .glyphicon' : function(evt, tmplt){
      event.preventDefault();
      $('.rate-star').removeClass('glyphicon-star');
      $('.rate-star').addClass('glyphicon-star-empty');

      switch(evt.target.id){
        case "rate-star5":
          $('#rate-star5').toggleClass('glyphicon-star-empty');
          $('#rate-star5').toggleClass('glyphicon-star');
        case "rate-star4":
          $('#rate-star4').toggleClass('glyphicon-star-empty');
          $('#rate-star4').toggleClass('glyphicon-star');
        case "rate-star3":
          $('#rate-star3').toggleClass('glyphicon-star-empty');
          $('#rate-star3').toggleClass('glyphicon-star');
        case "rate-star2":
          $('#rate-star2').toggleClass('glyphicon-star-empty');
          $('#rate-star2').toggleClass('glyphicon-star');
        case "rate-star1":
          $('#rate-star1').toggleClass('glyphicon-star-empty');
          $('#rate-star1').toggleClass('glyphicon-star');
      }
      let newRating = tmplt.$('.glyphicon-star').length;

      let arr = Session.get('currentModal').rating;
      let newAvRating =  _.reduce(arr, function(memo, num) {
        return memo + num;
      }, newRating) / (arr.length === 0 ? 1 : arr.length+1);
      newAvRating = Math.floor(newAvRating + 0.5);
      console.log('new av',newAvRating)
      Links.update({_id: Session.get("currentModal")._id},{$set:{avRating: newAvRating},$push:{rating: newRating}})

    }

})
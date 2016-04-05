Template.bookmark.events({
  // rating: function(){

  // }

  'click .showModal' : function(evt, tmplt){
    let link = Template.currentData();
    Session.set('currentModal', link);
    let aveRating = _.reduce(link.rating, function(memo, num) {
        return memo + num;
      }, 0) / (link.rating.length === 0 ? 1 : link.rating.length);
    $('#bookmark-modal').modal('show');
    $('.modal-title').html(link.name);

    $('.aveRating').html(aveRating);


  }
})
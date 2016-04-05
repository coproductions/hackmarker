Template.bookmark.events({
  // rating: function(){

  // }

  'click .showModal' : function(evt, tmplt){
    console.log('show mod');
    $('#bookmark-modal').modal('show');
  }
})
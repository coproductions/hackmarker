Template.bookmark.events({
  // rating: function(){

  // }

  'click .showModal' : function(evt, tmplt){
    let link = Template.currentData();
    Session.set('currentModal', link);

    $('#bookmark-modal').modal('show');
    $('.modal-title').html(link.name);



  }
})
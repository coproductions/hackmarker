  //prefills the data
   var renderAddForm = function(){
    console.log('rendering');

      let url = $('#link-input').val();

    Meteor.call("scrape",url,function(err, res){
      $('#name').val(res.title);
      $('#desc').val(res.description);

    });
  };

Template.addForm.created = function(){
  rating = new ReactiveVar();
};
Template.addForm.rendered = function(){
  let url = $('#link-input').val();
  renderAddForm();
  $("#add-link-btn").on("click",renderAddForm);
   $('.star').removeClass('glyphicon-star');
      $('.star').addClass('glyphicon-star-empty');
};





Template.addForm.events({
  'click #submit-btn' : function(evt, tmplt){
    event.preventDefault();
    let link = $('#link-input').val();
    let comments = $('#comments').val();
    console.log(link)
// create some logic to add topics
    let newLink = {
      url: link,
      name: $('#name').val(),
      desc: $('#desc').val(),

      rating: [tmplt.$('.glyphicon-star').length],
      avRating: tmplt.$('.glyphicon-star').length,
      timeAdded: moment().unix(),
      comments:[{timeAdded:moment().unix(), text:$('#comments').val()}],
      topics:[]
    }
    Links.insert(newLink);
      Session.set('formOpen',false);

  },
  'click .glyphicon' : function(evt, tmplt){
      event.preventDefault();
      $('.star').removeClass('glyphicon-star');
      $('.star').addClass('glyphicon-star-empty');

      switch(evt.target.id){
        case "star5":
          $('#star5').toggleClass('glyphicon-star-empty');
          $('#star5').toggleClass('glyphicon-star');
        case "star4":
          $('#star4').toggleClass('glyphicon-star-empty');
          $('#star4').toggleClass('glyphicon-star');
        case "star3":
          $('#star3').toggleClass('glyphicon-star-empty');
          $('#star3').toggleClass('glyphicon-star');
        case "star2":
          $('#star2').toggleClass('glyphicon-star-empty');
          $('#star2').toggleClass('glyphicon-star');
        case "star1":
          $('#star1').toggleClass('glyphicon-star-empty');
          $('#star1').toggleClass('glyphicon-star');
      }
    }
});
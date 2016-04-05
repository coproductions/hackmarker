import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Session.setDefault('formOpen',false);

Template.registerHelper('formatTime',
  function(time,type){
    switch(type){
      case 'fromNow':
        return moment.unix(time).fromNow();
      case 'iso':
        return moment.unix(time).toISOString();
      default:
        return moment.unix(time).format('LLLL');
    }
  });

Template.registerHelper('getAvRating',function(arr){
     let rating =  _.reduce(arr, function(memo, num) {
        return memo + num;
      }, 0) / (arr.length === 0 ? 1 : arr.length);
     return Math.floor(rating + 0.5);
});

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

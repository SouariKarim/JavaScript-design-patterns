//  === the composite pattern
// Single elements
$('#singleItem').addClass('active');
$('#container').addClass('active');

// Collections of elements
$('div').addClass('active');
$('.item').addClass('active');
$('input').addClass('active');

//==== the adapter pattern
// Cross browser opacity:
// opacity: 0.9; Chrome 4+, FF2+, Saf3.1+, Opera 9+, IE9, iOS 3.2+, Android 2.1+
// filter: alpha(opacity=90); IE6-IE8

// Setting opacity
$('.container').css({ opacity: 0.5 });

// Getting opacity
var currentOpacity = $('.container').css('opacity');

// ====  the facade pattern
$.get(url, data, callback, dataType);
$.post(url, data, callback, dataType);
$.getJSON(url, data, callback);
$.getScript(url, callback);

// $.get()
$.ajax({
  url: url,
  data: data,
  dataType: dataType,
}).done(callback);

// $.post
$.ajax({
  type: 'POST',
  url: url,
  data: data,
  dataType: dataType,
}).done(callback);

// $.getJSON()
$.ajax({
  url: url,
  dataType: 'json',
  data: data,
}).done(callback);

// $.getScript()
$.ajax({
  url: url,
  dataType: 'script',
}).done(callback);

// ==== the observer pattern

// Equivalent to subscribe(topicName, callback)
$(document).on('topicName', function () {
  //..perform some behaviour
});

// Equivalent to publish(topicName)
$(document).trigger('topicName');

// Equivalent to unsubscribe(topicName)
$(document).off('topicName');

// ====the iterator pattern
$.each(['john', 'dave', 'rick', 'julian'], function (index, value) {
  console.log(index + ': ' + value);
});

$('li').each(function (index) {
  console.log(index + ': ' + $(this).text());
});

//=== the proxy pattern
$('button').on('click', function () {
  // Within this function, "this" refers to the element that was clicked
  $(this).addClass('active');
});

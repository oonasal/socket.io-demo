var socket = io();

socket.on('connect', function() {
	console.log('Connected to socket.io server.');
});

socket.on('message', function(message) {
	console.log('New message: ' + message.text);
});

//handles submitting new messages
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		text: $message.val()
	});

	//to clear the input field after sending the message
	$message.val('');
});
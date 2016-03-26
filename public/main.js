'use strict';

var socket = io();

$(document).ready(init);

function.init() {
	console.log('yay jquery!');

	$('#send').click(sendMessage);
}


function sendMessage() {
	var message = $('#message').val();
	console.log('message:', message);
	socket.emit('new message', message);
}


socket.on('message', function(message) {
	console.log('message:', message);
})



socket.on('broadcast message', function(message) {
	console.log('broadcast message',message);
})
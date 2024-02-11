var user;
var account;
/** You had
var=events;
I fixed this. **/
var events;

jQuery["postJSON"] = function(url,data,callback) {
	var options = {
	  url:url,
	  type:'POST',
	  data:JSON.stringify(data),
	  contentType:'application/json',
	  dataType:'json',
	  success: callback
	};
	$.ajax(options);
};

jQuery["deleteJSON"] = function(url,callback) {
  var options = {
    url:url,
    type:'DELETE',
    success: callback
  };
  $.ajax(options);
};

function doLogin(){
	$('#first').hide();
	$('#loginuser').show();
}
function doCreate(){
	$('#first').hide();
	$('#create').show();
}
function Logg(){

		var user = $('#user').val();
		var pwd = $('#password').val();
		$.getJSON('https://='+pwd,loginSuccess);
	}


function	loginSuccess(data){
	user=data;
	$('#loginuser').hide();
	$('#three').show();


function Evee() {
		var iduser = user;
		var start = $('#Start').val();
		var end = $('#End').val();
		var title = $('#eventTitle').val();
		var description=$('#eventDescription').val();
		var access=$('#Access').val();
		var eventObject = {iduser:iduser,pwd,title:title,description:description, start:start,end:end,access:access};
		if(title == ""){
	 window.alert("You must provide a user title.");
 }else if(description == ""){
	 window.alert("You must provide a description.");
 } else if(start == ""){
		 window.alert("You must provide a start time.");
	 }else if(end == ""){
			 window.alert("You must provide a end time.");
	 }else{
	$.postJSON('https://cmsc106.net/calendar/event',eventObject,ID);
}}

/** You had
	function delete(){
delete is a keyword in the JavaScript language. You can't name a function delete.
I fixed this for you. **/
function deleteIt() {


	}

	function Cree() {

			var user = $('#user').val();
			var pwd = $('#password').val();
			var title = $('#title').val();
			var description=$('#description').val();
			var userObject = {name:user,password:pwd,title:title,description:description};
			if(user == ""){
		 window.alert("You must provide a user name.");
	} else if(pwd == ""){
		 window.alert("You must provide a password.");
	 }else if(title == ""){
			 window.alert("You must provide a title.");
		 } else if(description == ""){
			 /** You had
				 window.alert("You must provide a password.");
				 I fixed this. **/
				 window.alert("You must provide a description.");
		} else{
			$.postJSON('https://cmsc106.net/calendar/user',userObject,IDs);
	}	}

function IDs(data){
	user = data;
	account=[];
	$('#create').hide();
	$('#three').show();
	$('#manageaccounts').hide();
	var today = new Date().toISOString().slice(0, 10);
	$.getJSON('https://cmsc106.net/calendar/event?date='+today+'&iduser='+user,showEvents);
}
function doCreate(){
	$('#three').hide();
	$('#create').show();
}
function doHide(){
	$('#event').hide();
	$('#first').show();
}


var available;

function showAvailable(accounts) {
	available = accounts;
	$('#manageaccounts option').remove();
	var n, newOption;
	for(n = 0;n < accounts.length;n++) {
		newOption = $("<option>").val(n).text(available[n].title);
		$('#manageaccounts').append(newOption);
	}
}
function showAv(events){
	/** You had
	av=events;
	I fixed this. **/
	available = events;
	$('#manageevents option').remove();
	var n, newOption;
	for(n = 0;n < accounts.length;n++) {
		newOption = $("<option>").val(n).text(available[n].title);
		$('#manageevents').append(newOption);

}}

function handleNewFollow() {
	var n = $('#followlist').val();
	var newfollow = {iduser:user,follow:available[n].accountid};
	$.postJSON('https://cmsc106.net/calendar/follow',newfollow,followSuccess);
}

function doManage(){
	$('#events').hide();
	$('#manage').show();
	$.getJSON('https://cmsc106.net/calendar/follow/available?iduser='+user,showAvailable);
}
function doCreat(){
	$('#manage').hide();
	$('#event').show();
	/** You had
	$.getJSON('https://cmsc106.net/calendar/event/all?iduser=<key>');
	I fixed this. **/
	$.getJSON('https://cmsc106.net/calendar/event/all?iduser='+user,showAv);
}
function doH(){
	$('#event').hide();
	$('#manage').show();
}

// Event handler function for the document ready event.
function setUpButtons() {
	$('#Post').on('click',doCreat);
		$('#back').on('click',doHide);
		$('#back2').on('click',doH);
		$('#Manage').on('click',doManage);
		$('#eventcreate').on('click',Evee);
	// Set up event handlers for the buttons
	$('#logins').on('click',doLogin);
	$('#creates').on('click',doCreate);
	$('#docreate').on('click',Cree);
  $('#login').on('click',Logg);
  $("#follow").click(handleNewFollow);

	// Hide sections one, two and three
	$('#loginuser').hide();
	$('#create').hide();
	$('#three').hide();
	$('#event').hide();
	$("#manage").hide();
}

$(document).ready(setUpButtons);

/**

In addition to the fixes I made above, you are also missing some features:

You have no code for the Delete button to delete events.

You have not implemented the feature that allows the application to store the
user's key in local storage and log the user in automatically.

You are missing confirmation alerts for adding a new follow and creating a new
event.

50/80

**/

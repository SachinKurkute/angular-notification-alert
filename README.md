#Welcome to  **notify.js**

##Introduction
Notify.js is the best alternative of JavaScript alert, confirm and warning messages

 - It's easy to use inside the Angular 1.x.
 - Easy setup and installation
 - Easy customization of UI
 - One time add `alert-notification` directive
 
Demo : https://sachinkurkute.github.io/angular-notification-alert/ 

##Installation and setup
Download URL : https://github.com/SachinKurkute/angular-notification-alert

Add the ***notify.js*** reference just below the angular.js reference. as per given below
```
<script type="text/javascript" src="resources/lib/angular.min.js"></script>
<script type="text/javascript" src="notify/notify.js"></script>
```
Add app module dependency '`notify`' for the your app.
```
var myapp = angular.module('notifyApp',['notify']);
```
Inject the '***notification***' dependency with controller.
We can call the alert and warning messages using `notify()` function
Add `alert-notification` directive on your root page (`index.html`) inside the angular app
```
<body ng-app="myApp">
<alert-notification></alert-notification>
</body>
```
Now you are ready to use the notification service.
##How to use
####**Create notification object**
Syntax:
Properties of Object:

 1. message - [`string`] : You can pass the message
 2. dismissal - [`bool`] : Default is false, you can set true is required
 3. buttons: [`Object Array`] : Set the number of button as a Object, it will return on callback function. Object properties are: `title`, `result`, `classes`
 4. classes : [`string`] : Set the classes for the notification container and buttons.

**Example**:
```
var notiObj = {
	message:"Your notification message,
	dismissal:true, // On click of overlay alert will close
	buttons:[
	{
		title:"OK",
		result:"ok"
	}
	]
}
```
####**How to call notification message**
Call the `notification.notify()` function with the notification Object and write the callback function to get the response.
```
notification.notify(notiObj, function(res){ // response is the button object
	console.log("You clicked button",res);
	//On the basis of response write your code.
	if(res.result == 'ok'){
		//----
	}
	else{
		// ----
	}
});
```

####Make **Synchronous **  call
We can make it synchronous easily using the nested call.
See the below syntax.
```
notification.notify(notificationObj,function(res){ 
	// On the first call response we can call the otherfunction or alert
	if(res.result === 'ok'){
		callFUnction();
	}else{ // call another alert
		notification.notify(notificationObj2,function(res){ 
			// Next response
		});
	}
});
```

##About me:
I am JavaScript developer (Beginner),  Working on the Web applications and mobile app development. I am try to share my knowledge and Ideas through this platform. 

## Table of contents

You can insert a table of contents using the marker `[TOC]`:

[TOC]


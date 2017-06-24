(function () {
	var myapp = angular.module('notifyApp',['notify']);
	myapp.controller('notifyC',function($scope, notification) {

		$scope.callAlert = function(){
			var notificationObj = {
				message:"Your notification message : Changes are done",
				dismissal:true,  // dismissal default is : false
				buttons:[  // You can set nuber of actions
				{
					title:'OK',
					key:'ok'
				}]
			}

			notification.notify(notificationObj,function(res){ // res is the button object
				console.log("You clicked",res);
			});
		}

		$scope.callConfirm = function(){
			var notificationObj = {
				message:"Your notification confirm message : Sure ?",
				buttons:[  
				{
					title:'Yes',
					key:'yes'
				},
				{
					title:'No',
					key:'no'
				}]
			}

			notification.notify(notificationObj,function(res){ // res is the button object
				console.log("You clicked",res);
			});
		}
	});
})();
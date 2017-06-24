// notify.js v0.1
// Developed by Sachin Kurkute
(function () {
	var nofifyApp = angular.module('notify',[]);
    'use strict';

    nofifyApp.service('notification',function(){
    	var Obj = {};
    	Obj.onCallback = undefined;
    	Obj.on = function (callbackFun) {
    		this.onCallback = callbackFun;
        };
    	Obj.notify = function(config,cb){
    		this.config = config;
			this.broadcast();
			this.CallBack = function (result) {
                if (typeof (cb) == 'function') {
                    setTimeout(function () {
                        cb(result);
                    });
                }
            };
    	};
    	Obj.broadcast = function(){
            angular.isFunction(this.onCallback) && this.onCallback();
    	};
    	return Obj;
    });

   nofifyApp.directive('alertNotification',function(notification){
		return{
			restrict: 'E',
            replace: true,
            scope: {},
            link: function (scope, element, attrs) {
            	scope.show = false;
            	notification.on(function(){
					scope.show = true;
            		scope.config = notification.config;
            	});
            	scope.onClickOverlay = function(){
            		if(scope.config.dismissal === true){
            			scope.show = false; 
            		}
            	}
            	scope.onUserAction = function(result){
            		scope.show = false;
					notification.CallBack(result);  // return the checked button object to controller
        		}
            },
            template:'<div ng-show="show"><div class="notification-overlay" ng-click="onClickOverlay()"></div><div class="notification-container {{config.classes}}"><div class="notification-message">{{config.message}}</div><div class="notification-buttons"><button ng-repeat="btn in config.buttons" class="notification-button {{btn.classes}}" ng-click="onUserAction(btn)">{{btn.title}}</button></div></div></div>'
		}
   });
})();

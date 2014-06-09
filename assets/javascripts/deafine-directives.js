angular.module("Deafine.directives",[])
.directive('myVideo',function () {
    return {
        restrict: 'E',
        require: '?ngModel',
        replace: true,
        transclude: true,
        scope: {
			src: "@",
			height: "@",
			width: "@",
			controls:"@"
		},
        template: '<video width="{{width}}" height="{{height}}" {{controls}} volume="0" class="video unvetted"><source src="{{src}}"/></video>',
        link: function (scope, element, attrs) {
            //element.attr('src', "assets/video/signs/"+attrs.iframeSrc);
            element.attr('type', attrs.type);
        }
    };
});
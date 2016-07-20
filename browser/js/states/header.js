portfolio.config(function ($stateProvider) {
	$stateProvider.state('header', {
		url: '/header',
		templateUrl: '/templates/header.html',
		link: function (a,b,c) {
			console.log("reached here")
		}
	})
})
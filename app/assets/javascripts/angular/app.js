angular
  .module('app', ['ui.router', 'ngResource', 'templates']) 
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('projects', {
        templateUrl: 'navbar/navbar.html',
        controller: 'ProjectsController as ctrl'
      })
      .state('projects.index', {
        url: '/',
        templateUrl: 'projects/index.html',
        controller: 'ProjectsController as ctrl'
      })
      .state('projects.new', {
        url: 'projects/new',
        templateUrl: 'projects/new.html',
        controller: 'ProjectsController as ctrl'
      })
      .state('projects.show', {
        url: 'projects/:id',
        templateUrl: 'projects/show.html',
        controller: 'ProjectsController as ctrl'
      })
      .state('projects.edit', {
        url: 'projects/:id/edit',
        templateUrl: 'projects/edit.html',
        controller: 'ProjectsController as ctrl'
      });
    $urlRouterProvider.otherwise('/');
});
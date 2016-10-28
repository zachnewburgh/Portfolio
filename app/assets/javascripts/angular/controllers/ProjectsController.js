function ProjectsController(Project, $location, $state) {

  var ctrl = this;
  ctrl.projects = Project.query();

};

angular
  .module('app')
  .controller('ProjectsController', ProjectsController);
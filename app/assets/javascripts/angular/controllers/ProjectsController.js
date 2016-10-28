function ProjectsController(Project, $location, $state) {

  var ctrl = this;
  
  ctrl.projects = Project.query();
  ctrl.project = new Project();

  ctrl.addProject = function() {
    ctrl.project.$save(function() {
      $location.path('projects');
    });
  };

};

angular
  .module('app')
  .controller('ProjectsController', ProjectsController);
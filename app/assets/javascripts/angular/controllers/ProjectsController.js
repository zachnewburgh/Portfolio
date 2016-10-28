function ProjectsController(Project, $location, $state, $stateParams) {

  var ctrl = this;
  
  ctrl.projects = Project.query();
  ctrl.projectNew = new Project();
  ctrl.project = Project.get({id: $stateParams.id});

  ctrl.addProject = function() {
    ctrl.projectNew.$save(function() {
      $location.path('projects');
    });
  };

  ctrl.editProject = function() {
    ctrl.project.$update(function() {
      $location.path('projects');
    });
  };

  ctrl.deleteProject = function(project) {
    project.$delete(function() {
      $state.reload();
    });
  };

};

angular
  .module('app')
  .controller('ProjectsController', ProjectsController);
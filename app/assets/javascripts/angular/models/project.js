Project = ['$resource', function($resource) {
  var Project = $resource('api/v1/projects/:id.json', {id: '@id'}, {
    update: {method: 'PUT'}
  });
  return Project;
}];

angular
  .module('app')
  .factory('Project', Project);
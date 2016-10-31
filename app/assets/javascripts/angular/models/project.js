Project = ['$resource', function($resource) {
  var Project = $resource(
    'api/v1/projects/:id.json', {id: '@id'}, {
    get: {method: 'GET', isArray: false},
    update: {method: 'PUT', isArray: false}
  });
  return Project;
}];

angular
  .module('app')
  .factory('Project', Project);
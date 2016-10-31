Project = ['$resource', function($resource) {
  var base = location.href.split("/")[0]
  var Project = $resource(
    base + '/api/v1/projects/:id.json', {id: '@id'}, {
    query: {method: 'GET', isArray: true},
    get: {method: 'GET', isArray: true},
    update: {method: 'PUT'}
  });
  return Project;
}];

angular
  .module('app')
  .factory('Project', Project);
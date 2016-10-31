function Project($resource) {
  var Project = $resource('http://localhost:3000/api/v1/projects/:id.json', {id: '@id'}, {
    update: {method: 'PUT'}
  });
  return Project;
};

Project.$inject = ['$resource'];

angular
  .module('app')
  .factory('Project', Project);
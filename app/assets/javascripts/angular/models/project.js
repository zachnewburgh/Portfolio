var Project = ['$resource', function($resource) {
  var base = location.href.split("/")[0]
  return $resource(
    base + '/api/v1/projects/:id.json', {id: '@id'}, 
    {'get':    {method:'GET'},
      'save':   {method:'POST'},
      'query':  {method:'GET', isArray:true},
      'update': {method: 'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
  });
}];

angular
  .module('app')
  .factory('Project', Project);
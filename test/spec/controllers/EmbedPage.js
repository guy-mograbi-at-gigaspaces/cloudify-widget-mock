'use strict';

describe('Controller: EmbedPageCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudifyWidgetMockApp'));

  var EmbedPageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmbedPageCtrl = $controller('EmbedPageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

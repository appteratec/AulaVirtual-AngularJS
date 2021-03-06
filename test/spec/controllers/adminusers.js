'use strict';

describe('Controller: AdminusersCtrl', function () {

  // load the controller's module
  beforeEach(module('AulaVirtualApp'));

  var AdminusersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminusersCtrl = $controller('AdminusersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminusersCtrl.awesomeThings.length).toBe(3);
  });
});

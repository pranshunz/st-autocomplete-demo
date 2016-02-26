(function () {
  'use strict';

  angular
    .module('autocompleteFloatingLabelDemo')
    .directive("validState", StateValidator);


  function StateValidator() {
    return {
      restrict: "A",
      require: "ngModel",

      /*
       * State names can only contain letters
       */
      link: function (scope, element, attributes, ngModel) {
        ngModel.$validators.validState = function (modelValue) {
          return /^[a-zA-Z]+$/.test(modelValue);
        }

        attributes.$observe('validState', function () {
          ngModel.$validate();
        });
      }
    }
  }
})();
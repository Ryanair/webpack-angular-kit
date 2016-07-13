import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newComponent from './new.component';

const newModule = angular.module('new', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('new', {
      url: '/new',
      template: '<new></new>'
    });
})

.component('new', newComponent);

export default newModule;

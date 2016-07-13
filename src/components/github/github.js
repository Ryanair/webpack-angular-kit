import angular from 'angular';
import uiRouter from 'angular-ui-router';
import githubComponent from './github.component';
import githubService from './github.service';

const githubModule = angular.module('github', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('github', {
      url: '/github',
      template: '<github></github>'
    });
})

.component('github', githubComponent)
.service('githubService', githubService);

export default githubModule;

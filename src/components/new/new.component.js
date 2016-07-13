import template from './new.html';
import controller from './new.controller';

const newComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default newComponent;

angular.module('woof').factory('Woof', function () {
  return function Woof(props) {
    props = props || {};
    this.id = Date.now();
    this.body = props.body || '';
    this.starred = props.starred || false;
    this.starCount = props.starCount || 0;
  };
});

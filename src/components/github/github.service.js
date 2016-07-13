class GithubService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getItems(githubUsername) {
    const githubUrl = 'https://api.github.com';
    return this.$http({
      method: 'JSONP',
      url: `${githubUrl}/users/
${githubUsername}?callback=JSON_CALLBACK`
    }).success((data) => data.data)
    error((data, status) => {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      alert(status);
    });
  }

}

export default GithubService;

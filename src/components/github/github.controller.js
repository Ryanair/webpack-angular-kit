export default class GithubController {
  constructor(githubService) {
    'ngInject';
    this.result = {};
    this.service = githubService;
  }

  getDetails() {
    this.service.getItems(this.githubUsername).then((res) => {
      this.result = res.data;
    });
  }
}

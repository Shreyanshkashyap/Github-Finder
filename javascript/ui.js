class UI {

    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
         <div class="row">
           <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary d-block w-100">Veiw Profile</a>
           </div>
           <div class="col-md-9">
              <div class="badges">
              <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge bg-success">Followers: ${user.followers}</span>
              <span class="badge bg-info">Following: ${user.following}</span>
              </div>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
           </div>
         </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    showRepos(repos) {
      let output = '';
      console.log(repos);
      repos.forEach(function(repo){
        output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge bg-primary">Status: ${repo.stargazers_count}</span>
              <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge bg-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
        `;
      });

      // output repos
      document.getElementById('repos').innerHTML = output;
    }

    sendMessage(msg) {
      // clear profile
      const profile = document.getElementById('profile');
      profile.innerHTML = '';
      // clear alert if already present
      this.clearAlert();
      // create alert
      const alert = document.createElement('div');
      alert.className = 'alert container';
      alert.textContent = msg;

      // append alert in DOM
      const body = document.querySelector('body');
      const container = document.querySelector('.searchContainer');
      body.insertBefore(alert,container);

      // set timeout
      setTimeout(function() {
        const alert = document.querySelector('.alert');
        alert.remove();
      },2000); 
    }

    clearAlert() {
      const alert = document.querySelector('.alert');
      if(alert) {
        alert.remove();
      }
    }
}
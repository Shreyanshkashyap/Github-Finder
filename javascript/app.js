// init github
const github = new gitHub();
// init UI
const ui = new UI();

// search inuput
const search = document.getElementById('searchUser');
// search event
search.addEventListener('keyup',(e) => {
    const userText = e.target.value;
    if(userText !== '') {
        // make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                // send alert message
                ui.sendMessage('Username not found');
            } else {
                // show profile
                ui.showProfile(data.profile);
                // show repos
                ui.showRepos(data.repos);
            }
        })
    } else {
        // clear profile
        const profile = document.getElementById('profile');
        profile.innerHTML = '';
    }
});
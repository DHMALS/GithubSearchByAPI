
function getUser() {
    const check = document.getElementById('InputUserName').value;
    if (check) {
        let request = new XMLHttpRequest()
        let url = "https://api.github.com/users";
        let user = document.getElementById('InputUserName').value;
        let urlAfter = url.concat("/", user);
        request.open("GET", urlAfter)
        request.responseType = "json"
        
        request.send()

        request.onload = function () {
            let Targetuser = request.response
            console.log(Targetuser) /* all data */
            console.log(Targetuser.avatar_url) /* pic */
            document.getElementById("img").src = Targetuser.avatar_url
            console.log(Targetuser.name) /* Name */
            document.getElementById("name").innerHTML = Targetuser.name
            console.log(Targetuser.login) /* username */
            document.getElementById("username").innerHTML = Targetuser.login
            console.log(Targetuser.bio) /* bio */
            document.getElementById("bio").innerHTML = Targetuser.bio
            console.log(Targetuser.html_url) /* acc Link */
            document.getElementById("GithubAccLink").href = Targetuser.html_url
            console.log(Targetuser.public_repos) /* repo */
            document.getElementById("repoNum").innerHTML = Targetuser.public_repos
            console.log(Targetuser.followers) /* followers */
            document.getElementById("followers").innerHTML = Targetuser.followers
            console.log(Targetuser.following) /* following */
            document.getElementById("following").innerHTML = Targetuser.following
            document.getElementById("info").className = "d-block";
            
        }
    }
    else { alert("Hey! You Did Not Enter Any User Name :)"); }

}

function closeMe() {
    if (document.getElementById("info").classList.contains('d-block')) {
        document.getElementById("info").className = "d-none";

    }

}
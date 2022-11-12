const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainSection = document.getElementById("main-section")
const button = document.getElementById("btn")
function renderMain() {
    mainSection.innerHTML += `
                        <div class="container-avatar-img">
                            <div class="avatar-info">
                                <img class="avatar avatar-main" src="${posts[0].avatar}">
                                <p>${posts[0].name}<br><span class="location-text">${posts[0].location}</span</p>
                            </div
                            <div>
                                <img class="img-main" src="${posts[0].post}">
                            </div>  
                        </div>
                        <section class="icons-container">
                        <img class="icon" src="images/icon-heart.png" alt="">
                        <img class="icon" src="images/icon-comment.png" alt="">
                        <img class="icon" src="images/icon-dm.png" alt="">
                        </section>
                        </section class="likes-comments">
                            <p>${posts[0].likes} likes</p>
                            <p>${posts[0].username} ${posts[0].comment}</p>
                        <section>
                        `
                        }

function renderAll() {
    while (posts.length != 0) {
        posts.shift()
        renderMain()
    }

}

renderMain()

btn.addEventListener("click", function () {
    btn.style.display = "none";
    renderAll()

})

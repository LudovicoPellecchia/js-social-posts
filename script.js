const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


//Recupero su js il container html
const containerElement = document.getElementById("container")

//Creo un array dove sono stampati gli ID dei post
const postID=[]
for (let i= 0; i < posts.length; i++){
    const singlePost = posts[i] 
    const singlePostId = singlePost.id
    postID.push(singlePostId)
}

//Creo un array dove sono stampati i contenuti dei post
const postContent=[]
for (let i= 0; i < posts.length; i++){
    const singlePost = posts[i] 
    const singlePostContent = singlePost.content
    postContent.push(singlePostContent)
}

//Creo un array dove sono stampate le foto dei post
const postMedia=[]
for (let i= 0; i < posts.length; i++){
    const singlePost = posts[i] 
    const singlePostMedia = singlePost.media
    postMedia.push(singlePostMedia)
}

//Creo un array dove sono stampati i nomi autori dei post
const postAuthorName =[]
for (let i= 0; i < posts.length; i++){
    const singlePost = posts[i] 
    const singlePostAuthorName= singlePost.author.name
    postAuthorName.push(singlePostAuthorName)
}
//Creo un array dove sono stampati le foto degli autori dei post
const postAuthorPic =[]
for (let i= 0; i < posts.length; i++){
    const singlePost = posts[i] 
    const singlePostAuthorPic= singlePost.author.image
    postAuthorPic.push(singlePostAuthorPic)
}

//Creo un array dove sono stampati i likes dei post
const postLikes =[]
for (let i= 0; i < posts.length; i++){
    const singlePost = posts[i] 
    const singlePostLike= singlePost.likes
    postLikes.push(singlePostLike)
}

//Creo un array dove sono stampate le date dei post
const postDate =[]
for (let i= 0; i < posts.length; i++){
    const singlePost = posts[i] 
    const singlePostDate= singlePost.created
    postDate.push(singlePostDate)
}

//Ciclo for per creare tanti post quanti sono nell'array posts
for (let i = 0; i < posts.length; i++) {

    const currentId = postID[i]
    const currentContent = postContent[i]
    const currentMedia = postMedia[i]
    const currentAuthorName = postAuthorName[i]
    const currentAuthorPic= postAuthorPic[i]
    const currentLikes = postLikes[i]
    const currentDate = postDate[i]

    //Creo il div container dei post social
    const postElement = document.createElement("div")
    postElement.classList.add("post")
    containerElement.append(postElement)

    //Aggiungo all'interno del container la struttura html del post
    postElement.innerHTML = `<div class="post__header">
<div class="post-meta">                    
    <div class="post-meta__icon">
        <img class="profile-pic" src="${currentAuthorPic}" alt="">                    
    </div>
    <div class="post-meta__data">
        <div class="post-meta__author">${currentAuthorName}</div>
        <div class="post-meta__time">${currentDate}</div>
    </div>                    
</div>
</div>
<div class="post__text">${currentContent}</div>
<div class="post__image">
<img src="${currentMedia}" alt="">
</div>
<div class="post__footer">
<div class="likes js-likes">
    <div class="likes__cta">
        <a class="like-button  js-like-button" href="#" data-postid="${currentId}">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
        </a>
    </div>
    <div class="likes__counter">
        Piace a <b id="like-counter-1" class="js-likes-counter">${currentLikes}</b> persone
    </div>
</div> 
</div>`

}


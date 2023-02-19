const postContainer = document.querySelector('.post-container');

for (let i = 2; i < 12; i++) {
  const post = document.createElement('div');
  post.classList.add('post');
  post.innerHTML = `
    <img src="post${i+1}.jpg" alt="Post ${i+1}">
    <div class="caption">This is post ${i+1}</div>
    <div class="likes">${Math.floor(Math.random()*100)} likes</div>
  `;
  postContainer.appendChild(post);
}

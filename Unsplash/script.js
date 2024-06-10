let fact;
const photoContainer = document.querySelector('.photo-container');
const imageContainer = document.querySelector('.img-container')
async function showPic () {
  const url = 
  'https://api.unsplash.com/photos/?client_id=u6ypDfXycPHHAaKjjeRjiMICRtIK5GRmlCKUs5JRHpQ'
  const response = await fetch(url);
  fact = await response.json();

  const randomIndex = Math.floor(Math.random() * fact.length);
  const randomItem = fact[randomIndex];
  console.log(randomItem);

  const image = document.createElement('img');
  image.setAttribute('class', `slider-photos`);
  image.setAttribute('src', `${randomItem.links.download}`);
  imageContainer.append(image);


  photoContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card card-yellow card-padding">
    <table class="table u-full-width">
        <tbody>
        <tr>
            <td>Author</td>
            <td><strong>${randomItem.user.name}</strong>
            </td>
        </tr>
        <tr>
            <td>Insta</td>
            <td><strong>${randomItem.user.instagram_username}</strong>
            </td>
        </tr>
        <tr>
            <td>Bio</td>
            <td><strong>${randomItem.user.bio}</strong>
            </td>
        </tr>
        </tbody>
    </table>
  </div>
    `
  );

  
  imageContainer.insertAdjacentHTML(
    "beforeend",
    `
      <div class="like-container">
        <button class="like-button">👍</button>
        <span class="like-count">0</span>
      </div>
    `
  )

const likeButton = document.querySelector('.like-button');
const likeCount = document.querySelector('.like-count');
 
likeButton.addEventListener('click', () => {
  const currentCount = parseInt(likeCount.textContent, 10);
  likeCount.textContent = currentCount + 1;
});
};

showPic();

window.onload = function () {
  setTimeout(function () {
      document.getElementsByTagName("body")[0].style.visibility = "visible";
  }, 500);
}
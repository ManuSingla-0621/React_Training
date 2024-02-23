
import {Routes,Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";
import {Navbar} from "./Component/Navbar"
import {Store} from "./Pages/Store"
function App() {
  return (
    <>
    <Navbar/>
    <Container className="mb-4">
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/about" element={<About/>}/>
       </Routes>
    </Container>
   </>

  );
}

export default App;
{/* // <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Image View</title>
//     <div class="main">
//         <h1>Image Gallery</h1>
//         <div class="search-image">
//             <input type="text" id="searchImageInput" placeholder="Search By Name">
//             <button id="searchImageButton" onclick="searchImages()">Search</button>
//         </div>
// <div class = "className">
//         <div class="container">
//             <div class="image-container" id="imageContainer">
//                 <!-- Images will be added here dynamically -->
//             </div>
//  </div> 
//  </div>         

//             <div class="offset-container">
//                 <label for="offset">Pages per Screen:</label>
//                 <select id="offset" onchange="setOffset()">
//                     <option value="6">6</option>
//                     <option value="12">12</option>
//                     <option value="18">18</option>
//                     <option value="24" selected>24</option>
//                     <option value="36">36</option>
//                     <option value="42">42</option>
//                     <option value="48">48</option>
//                 </select>
//             </div>
//         </div>

//         <div class="sort-filter">
//             <label class="sort-label" for="sortFilter">Sort:</label>
//             <select id="sortFilter" onchange="searchImages()">
//                 <option value="asc">asc</option>
//                 <option value="desc" selected>desc</option>
//             </select>
//         </div>

//         <div class="pagination" id="paginationContainer"></div>

//         <h2>Liked Images</h2>
//         <div class="liked-images" id="likedImagesContainer">
//             <!-- Liked Images will be added here dynamically -->
//         </div>
//     </div>

//     <script>


//         const API_URL = "https://picsum.photos/v2/list";
//         const imageContainer = document.getElementById("imageContainer");
//         const likedImagesContainer = document.getElementById("likedImagesContainer");
//         const searchInput = document.getElementById("searchImageInput");
//         const paginationContainer = document.getElementById("paginationContainer");
//         const offsetSelect = document.getElementById("offset");

//         let currentPage = 1;
//         let totalPages = 1;
//         let offset = parseInt(offsetSelect.value);

//         function searchImages() {
//             const sortOrder = sortFilter.value;
//             fetch(API_URL)
//                 .then(response => response.json())
//                 .then(data => {
//                     if (currentPage === 1) {
//                         imageContainer.innerHTML = "";
//                     }

//                     if (sortOrder === "asc") {
//                         data.sort((a, b) => (a.author > b.author) ? 1 : -1);
//                     } else if (sortOrder === "desc") {
//                         data.sort((a, b) => (a.author < b.author) ? 1 : -1);
//                     }

//                     data.slice((currentPage - 1) * offset, currentPage * offset).forEach(image => {
//                         const imageCard = createImageCard(image);
//                         imageContainer.appendChild(imageCard);
//                     });

//                     totalPages = Math.ceil(data.length / offset);
//                     renderPagination();
//                 })
//                 .catch(error => {
//                     console.error('Error:', error);
//                 });
//         }

//         function renderPagination() {
//             paginationContainer.innerHTML = "";

//             for (let i = 1; i <= Math.min(totalPages, 4); i++) {
//                 const pageButton = document.createElement("button");
//                 pageButton.textContent = i;
//                 pageButton.addEventListener("click", () => {
//                     currentPage = i;
//                     searchImages();
//                 });

//                 paginationContainer.appendChild(pageButton);
//             }

//             if (currentPage < totalPages) {
//                 const nextButton = document.createElement("button");
//                 nextButton.textContent = "Next";
//                 nextButton.addEventListener("click", () => {
//                     currentPage++;
//                     searchImages();
//                 });

//                 paginationContainer.appendChild(nextButton);
//             }
//         }

//         function setOffset() {
//             offset = parseInt(offsetSelect.value);
//             currentPage = 1;
//             searchImages();
//         }

//         function createImageCard(image) {
//             const imageCard = document.createElement("div");
//             imageCard.className = "image-card";

//             const imageLink = document.createElement("a");
//             imageLink.href = image.url;
//             imageLink.target = "_blank";

//             const imageElement = document.createElement("div");
//             imageElement.className = "image";
//             const img = document.createElement("img");
//             img.src = image.download_url;
//             img.alt = image.author;
//             imageElement.appendChild(img);

//             const authorName = document.createElement("div");
//             authorName.className = "author-name";
//             authorName.textContent =` Author: ${image.author}`;

//             const likeButton = document.createElement("button");
//             likeButton.className = "like-button";
//             likeButton.textContent = "Like";
//             likeButton.addEventListener("click", () => {
//                 toggleLike(likeButton, image);
//             });

//             imageLink.appendChild(imageElement);
//             imageCard.appendChild(imageLink);
//             imageCard.appendChild(authorName);
//             imageCard.appendChild(likeButton);

//             return imageCard;
//         }

//         function toggleLike(likeButton, image) {
//             if (likeButton.textContent === "Like") {
//                 likeButton.textContent = "Unlike";
//                 likeButton.style.backgroundColor = "#ff6b6b"; // Change color to indicate liked

//                 // Add the liked image to local storage
//                 addLikedImageToStorage(image);

//                 // Add the liked image to the Liked Images section
//                 const likedImageCard = createLikedImageCard(image);
//                 likedImagesContainer.appendChild(likedImageCard);
//             } else {
//                 likeButton.textContent = "Like";
//                 likeButton.style.backgroundColor = "#4CAF50"; // Reset color

//                 // Remove the liked image from local storage
//                 removeLikedImageFromStorage(image.id);

//                 // Remove the liked image from the Liked Images section
//                 const likedImageCard = likedImagesContainer.querySelector(`[data-id="${image.id}"]`);
//                 likedImagesContainer.removeChild(likedImageCard);
//             }
//         }

//         function addLikedImageToStorage(image) {
//             let likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];
//             likedImages.push(image);
//             localStorage.setItem('likedImages', JSON.stringify(likedImages));
//         }

//         function removeLikedImageFromStorage(imageId) {
//             let likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];
//             likedImages = likedImages.filter(img => img.id !== imageId);
//             localStorage.setItem('likedImages', JSON.stringify(likedImages));
//         }

//         function createLikedImageCard(image) {
//             const likedImageCard = document.createElement("div");
//             likedImageCard.className = "liked-image-card";
//             likedImageCard.setAttribute("data-id", image.id);

//             const img = document.createElement("img");
//             img.src = image.download_url;
//             img.alt = image.author;
//             likedImageCard.appendChild(img);

//             const likedImageDetails = document.createElement("div");
//             likedImageDetails.className = "liked-image-details";
//             likedImageDetails.innerHTML = `
//                 <p class="author">${image.author}</p>
//                 <button class="unlike-button" onclick="unlikeImage('${image.id}')">Unlike</button>
//             `;
//             likedImageCard.appendChild(likedImageDetails);

//             return likedImageCard;
//         }

//         function unlikeImage(imageId) {
//             // Remove the liked image from local storage
//             removeLikedImageFromStorage(imageId);

//             // Remove the liked image from the Liked Images section
//             const likedImageCard = likedImagesContainer.querySelector(`[data-id="${imageId}"]`);
//             likedImagesContainer.removeChild(likedImageCard);

//             // Reset the Like button in the main image container
//             const likeButton = imageContainer.querySelector(`[data-id="${imageId}"].like-button`);
//             if (likeButton) {
//                 likeButton.textContent = "Like";
//                 likeButton.style.backgroundColor = "#4CAF49"; // Reset color
//             }
//         }

//         searchImages();
//     </script>
// </body>
// </html> */}
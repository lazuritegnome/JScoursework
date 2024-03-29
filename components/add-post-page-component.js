import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  let imageUrl = "";
  const render = () => {
    
    const appHtml = `
    <div class="page-container">
    <div class="header-container"></div>
    <div class="form">
      <h3 class="form-title">Добавить пост</h3>
      <div class="form-inputs">
        <div class="upload-image-container"></div>      
         <label>
          <textarea class="add-comment" id="comment-input" placeholder="Опишите фотографию" rows="4"></textarea>
         </label>
         <button class="button" id="add-button">Добавить</button>
    </div>
    </div>
  </div>
  `;


    appEl.innerHTML = appHtml;

    document.getElementById("add-button").addEventListener("click", () => {
      onAddPostClick({
        description: document.getElementById("comment-input").value,
        imageUrl: imageUrl,
      });
    });
  };

  
  render();
  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  })
  
  const uploadImgContainer = appEl.querySelector(".upload-image-container");

  if (uploadImgContainer) {
    renderUploadImageComponent({
      element: appEl.querySelector(".upload-image-container"),
      onImageUrlChange(newImageUrl) {
        imageUrl = newImageUrl;
      },
    });
  }
}

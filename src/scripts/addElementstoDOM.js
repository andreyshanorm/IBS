function addElementsToDOM(elementCount) {
    const parentElement = document.getElementById("parent");
  
    for (let i = 0; i < elementCount; i++) {
      const newElement = `<li class="product-list__item">
                      <div class="list__item-content">
                          <img src="./src/images/temp-image.png" alt="" class="list__item-img">
                          <span class="list__item-name">G Home</span>
                          <span class="list__item-price">$129</span>
                          <div class="list__item-icon">
                              ${defoultIcon}\
                              ${orangeIcon}
                          </div>
                          
                      </div>
                  </li>`;
      parentElement.insertAdjacentHTML("beforeend", newElement);
    }
  }
  
  const elementCount = 15;
  
  addElementsToDOM(elementCount);
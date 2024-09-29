(() => {
  const websiteConfig = {
    "www.flipkart.com": {
      productName: "h1",
      price: ".Nx9bqj",
      image: "div > img"
    },
    "www2.hm.com": {
      productName: "h1",
      price: "#product-price",
      image: ".product-detail-main-image-container img"
    },
    "www.amazon.in": {
      productName: "#title",
      price: ".a-price-whole",
      image: ".imgTagWrapper > img"
    }


    
  };

  const extractProductInfo = () => {
    const currentUrl = window.location.hostname;
    const config = websiteConfig[currentUrl] || { productName: '', price: '', image: '', category: '' };

    const productName = document.querySelector(config.productName)?.innerText || 'Product Name not found';
    const price = document.querySelector(config.price)?.innerText || 'Price not found';

    const imageElement = document.querySelector(config.image);
    let productImage = '';

    if (imageElement) {
      productImage = imageElement.src || imageElement.getAttribute('data-src');

      if (!productImage && imageElement.getAttribute('srcset')) {
        const srcset = imageElement.getAttribute('srcset');
        const srcsetArray = srcset.split(',').map((entry) => entry.trim().split(' ')[0]);
        productImage = srcsetArray[srcsetArray.length - 1];
      }
    }

    return { productName, price, productImage };
  };

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'GET_PRODUCT_INFO') {
      const productInfo = extractProductInfo();
      sendResponse(productInfo);
    }
  });
})();

(() => {
    const extractProductInfo = () => {
      const productName = document.querySelector('h1.product-title')?.innerText || 'Product Name not found';
      const price = document.querySelector('.price')?.innerText || 'Price not found';
      const productImage = document.querySelector('.product-image img')?.src || '';
  
      return { productName, price, productImage };
    };
  
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'GET_PRODUCT_INFO') {
        const productInfo = extractProductInfo();
        sendResponse(productInfo);
      }
    });
  })();
  
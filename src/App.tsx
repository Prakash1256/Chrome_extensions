import React, { useState, useEffect } from 'react';
import './App.css';

interface ProductInfo {
  productName: string;
  price: string;
  productImage: string;
}

interface SimilarProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const App = () => {
  const [productInfo, setProductInfo] = useState<ProductInfo>({
    productName: '',
    price: '',
    productImage: ''
  });
  const [similarProducts, setSimilarProducts] = useState<SimilarProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    if (chrome?.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];

        if (currentTab?.id) {
          chrome.tabs.sendMessage(currentTab.id, { action: 'GET_PRODUCT_INFO' }, (response) => {
            if (response) {
              setProductInfo(response);
              fetchSimilarProducts(response.productName); // Fetch similar products using the product name
            }
          });
        }
      });
    } else {
      console.error("Chrome Tabs API is not available.");
    }
  }, []);

  const fetchSimilarProducts = async (productName: string) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`https://fakestoreapi.com/products/`);
      const data = await response.json();

      const normalizedProductName = productName.toLowerCase();
      const keywords = normalizedProductName.split(' ');

      const filteredProducts = data.filter((product: SimilarProduct) => {
        const normalizedTitle = product.title.toLowerCase();
        const normalizedCategory = product.category.toLowerCase();

        return keywords.some(keyword => normalizedTitle.includes(keyword) || normalizedCategory.includes(keyword));
      });

      setSimilarProducts(filteredProducts);
    } catch (error) {
      console.error("Failed to fetch similar products:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="popup">
      <h1>{productInfo.productName}</h1>
      <h3>Price: {productInfo.price}</h3>
      {productInfo.productImage && <img src={productInfo.productImage} alt="Product" />}

      <h2>Similar Products</h2>
      {loading ? ( // Display loader while loading
        <div className="loader">Loading...</div>
      ) : (
        <div className="similar-products">
          {similarProducts.length > 0 ? (
            similarProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} width="100%" />
                <p>{product.title}</p>
                <p>${product.price}</p>
              </div>
            ))
          ) : (
            <p>No similar products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

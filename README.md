# ################ <--------------             Chrome E-Commerce Product Extractor ---------------------> ###########

## Objective

The purpose of this project is to evaluate the ability to develop a Chrome web plugin that interacts with fashion e-commerce web pages, retrieves product information, and optionally connects with external APIs to enhance functionality. This project assesses proficiency in web scraping, JavaScript, and basic plugin development.

## Task Overview

This project involves developing a simple Chrome web plugin that extracts product information from a fashion e-commerce website (e.g., Zara, H&M) and displays it in the plugin's popup interface.

## Specifications

### Frontend (Chrome Plugin)

- **Technology:** Plain JavaScript (or a simple frontend framework like React, if preferred).

### Plugin Functionality

- **Extract Product Information:** 
  - When a user is on a product page of the chosen fashion website, the plugin should be able to extract the following product details:
    - Product Name
    - Price
    - Product Image URL
- **Popup Interface:** 
  - Create a basic popup UI that opens when the plugin icon is clicked. This UI should display the extracted product details.

### Bonus (Optional)

- **API Integration:** 
  - Use the extracted product information to call an open API (e.g., a fashion API or a general search API) to find similar products. Display the results in the plugin's popup interface.
- **Styling:** 
  - Add basic styling to the plugin’s UI to make it more visually appealing.

## Deliverables

1. **Chrome Plugin Files:** A zipped folder containing all the necessary files for the Chrome plugin.
2. **README.md:** This document outlining the project details.

## Installation

1. Clone or download this repository.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle in the top right corner.
4. Click on "Load unpacked" and select the folder containing the plugin files.
5. The plugin should now be installed and visible in the extensions list.

## Usage

1. Navigate to a product page of your chosen fashion e-commerce website (e.g., Zara, H&M).
2. Click the plugin icon in the Chrome toolbar.
3. A popup will appear displaying the extracted product details: name, price, and image URL.

## Acknowledgements

- This project was developed to enhance understanding and experience in web scraping and Chrome plugin development.
- Special thanks to the documentation of Chrome Extensions and various open-source resources that provided insights into plugin creation and web scraping techniques.


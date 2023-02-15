// Get Year
const year = new Date().getFullYear();
document.querySelector("#copyright-year").textContent = `© ${year}`;

// Last Update
document.querySelector("#last-update").textContent = `Last Updated: ${document.lastModified}`

// -  -  -  -  L A Z Y   L O A D  -  -  -  -  -

// Get all elements that has attribute [data-src]
const images = document.querySelectorAll("[data-src]");

// Function to load images
function preloadImage(img) {
    // Define the src --basically data-src will be replaced in src--
    
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
    // Delete data-src attribute of current img
    img.onload = () => {img.removeAttribute("data-src")};

}

// List of options for our images
const imgOptions = {
    // threshold should be 0
    threshold: 0,
    // needs to be specified in pixles or percent
    rootMargin: "0px 0px 50px 0px" 
};

// Create Observer (this will observe the entries and itself)
const imgObserver = new IntersectionObserver((entries, imgObserver) => {

    entries.forEach(entry => {

        if (entry.isIntersecting == false){
            return;
        }
        // If is intersecting we are loading the image and stop observing it
        else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
        
    })
}, imgOptions);

// For every image observe the image
images.forEach(image => {
    imgObserver.observe(image);
})
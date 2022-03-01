const images = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px"
};

const imagesL = (image) => {
    image.setAttribute("src", image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};


if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
            imagesL(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);


    images.forEach((img) => {
      observer.observe(img);
    });
  } else {
    images.forEach((img) => {
        imagesL(img);
    });
  }

/* No sirve el del video YT
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

function preloadImage(img){
    const src = img.getAttribute("data-src");
    if (!src){
        return;
    }

    img.src = src;
}*/
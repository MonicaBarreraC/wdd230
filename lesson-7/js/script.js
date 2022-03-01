const images = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px"
    //rootMargin: "0px 0px 800px 0px"
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
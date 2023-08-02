// Set 1
const hoverImageContainersSet1 = document.querySelectorAll('.set-1 .hover-image-container');
const biggerImageContainerSet1 = document.querySelector('.set-1 .bigger-image-container');
const biggerImageSet1 = biggerImageContainerSet1.querySelector('.bigger-image');
const imageTextSet1 = biggerImageContainerSet1.querySelector('.image-text');

hoverImageContainersSet1.forEach((container) => {
  const hoverableImage = container.querySelector('.hoverable-image');
  const text = container.getAttribute('data-text');

  container.addEventListener('mouseenter', () => {
    const smallImageRect = hoverableImage.getBoundingClientRect();

    biggerImageSet1.src = hoverableImage.src;
    biggerImageContainerSet1.style.display = 'block';
    biggerImageContainerSet1.style.top = `${smallImageRect.top - 170}px`; /* Adjust the position of the bigger image */
    biggerImageContainerSet1.style.left = `${smallImageRect.left - -200}px`; /* Adjust the position of the bigger image */

    // Set the text for the specific image
    imageTextSet1.textContent = text;
  });

  container.addEventListener('mouseleave', () => {
    biggerImageContainerSet1.style.display = 'none';
  });
});

// Set 2
const hoverImageContainersSet2 = document.querySelectorAll('.set-2 .hover-image-container');
const biggerImageContainerSet2 = document.querySelector('.set-2 .bigger-image-container');
const biggerImageSet2 = biggerImageContainerSet2.querySelector('.bigger-image');
const imageTextSet2 = biggerImageContainerSet2.querySelector('.image-text');

hoverImageContainersSet2.forEach((container) => {
  const hoverableImage = container.querySelector('.hoverable-image');
  const text = container.getAttribute('data-text');

  container.addEventListener('mouseenter', () => {
    const smallImageRect = hoverableImage.getBoundingClientRect();

    biggerImageSet2.src = hoverableImage.src;
    biggerImageContainerSet2.style.display = 'block';
    biggerImageContainerSet2.style.top = `${smallImageRect.top - 100}px`; /* Adjust the position of the bigger image */
    biggerImageContainerSet2.style.left = `${smallImageRect.left - -200}px`; /* Adjust the position of the bigger image */

    // Set the text for the specific image
    imageTextSet2.textContent = text;
  });

  container.addEventListener('mouseleave', () => {
    biggerImageContainerSet2.style.display = 'none';
  });
});

// Set 3
const hoverImageContainersSet3 = document.querySelectorAll('.set-3 .hover-image-container');
const biggerImageContainerSet3 = document.querySelector('.set-3 .bigger-image-container');
const biggerImageSet3 = biggerImageContainerSet3.querySelector('.bigger-image');
const imageTextSet3 = biggerImageContainerSet3.querySelector('.image-text');

hoverImageContainersSet3.forEach((container) => {
  const hoverableImage = container.querySelector('.hoverable-image');
  const text = container.getAttribute('data-text');

  container.addEventListener('mouseenter', () => {
    const smallImageRect = hoverableImage.getBoundingClientRect();

    biggerImageSet3.src = hoverableImage.src;
    biggerImageContainerSet3.style.display = 'block';
    biggerImageContainerSet3.style.top = `${smallImageRect.top - 500}px`; /* Adjust the position of the bigger image */
    biggerImageContainerSet3.style.left = `${smallImageRect.left - -100}px`; /* Adjust the position of the bigger image */

    // Set the text for the specific image
    imageTextSet3.textContent = text;
  });

  container.addEventListener('mouseleave', () => {
    biggerImageContainerSet3.style.display = 'none';
  });
});

// Set 4
const hoverImageContainersSet4 = document.querySelectorAll('.set-4 .hover-image-container');
const biggerImageContainerSet4 = document.querySelector('.set-4 .bigger-image-container');
const biggerImageSet4 = biggerImageContainerSet4.querySelector('.bigger-image');
const imageTextSet4 = biggerImageContainerSet4.querySelector('.image-text');

hoverImageContainersSet4.forEach((container) => {
  const hoverableImage = container.querySelector('.hoverable-image');
  const text = container.getAttribute('data-text');

  container.addEventListener('mouseenter', () => {
    const smallImageRect = hoverableImage.getBoundingClientRect();

    biggerImageSet4.src = hoverableImage.src;
    biggerImageContainerSet4.style.display = 'block';
    biggerImageContainerSet4.style.top = `${smallImageRect.top - 200}px`; /* Adjust the position of the bigger image */
    biggerImageContainerSet4.style.left = `${smallImageRect.left - -100}px`; /* Adjust the position of the bigger image */

    // Set the text for the specific image
    imageTextSet4.textContent = text;
  });

  container.addEventListener('mouseleave', () => {
    biggerImageContainerSet4.style.display = 'none';
  });
});

// Set 5
const hoverImageContainersSet5 = document.querySelectorAll('.set-5 .hover-image-container');
const biggerImageContainerSet5 = document.querySelector('.set-5 .bigger-image-container');
const biggerImageSet5 = biggerImageContainerSet5.querySelector('.bigger-image');
const imageTextSet5 = biggerImageContainerSet5.querySelector('.image-text');

hoverImageContainersSet5.forEach((container) => {
  const hoverableImage = container.querySelector('.hoverable-image');
  const text = container.getAttribute('data-text');

  container.addEventListener('mouseenter', () => {
    const smallImageRect = hoverableImage.getBoundingClientRect();

    biggerImageSet5.src = hoverableImage.src;
    biggerImageContainerSet5.style.display = 'block';
    biggerImageContainerSet5.style.top = `${smallImageRect.top - 150}px`; /* Adjust the position of the bigger image */
    biggerImageContainerSet5.style.left = `${smallImageRect.left - -100}px`; /* Adjust the position of the bigger image */

    // Set the text for the specific image
    imageTextSet5.textContent = text;
  });

  container.addEventListener('mouseleave', () => {
    biggerImageContainerSet5.style.display = 'none';
  });
});

// Set 6
const hoverImageContainersSet6 = document.querySelectorAll('.set-6 .hover-image-container');
const biggerImageContainerSet6 = document.querySelector('.set-6 .bigger-image-container');
const biggerImageSet6 = biggerImageContainerSet6.querySelector('.bigger-image');
const imageTextSet6 = biggerImageContainerSet6.querySelector('.image-text');

hoverImageContainersSet6.forEach((container) => {
  const hoverableImage = container.querySelector('.hoverable-image');
  const text = container.getAttribute('data-text');

  container.addEventListener('mouseenter', () => {
    const smallImageRect = hoverableImage.getBoundingClientRect();

    biggerImageSet6.src = hoverableImage.src;
    biggerImageContainerSet6.style.display = 'block';
    biggerImageContainerSet6.style.top = `${smallImageRect.top - 150}px`; /* Adjust the position of the bigger image */
    biggerImageContainerSet6.style.left = `${smallImageRect.left - -150}px`; /* Adjust the position of the bigger image */

    // Set the text for the specific image
    imageTextSet6.textContent = text;
  });

  container.addEventListener('mouseleave', () => {
    biggerImageContainerSet6.style.display = 'none';
  });
});

// Set 7
const hoverImageContainersSet7 = document.querySelectorAll('.set-7 .hover-image-container');
const biggerImageContainerSet7 = document.querySelector('.set-7 .bigger-image-container');
const biggerImageSet7 = biggerImageContainerSet7.querySelector('.bigger-image');
const imageTextSet7 = biggerImageContainerSet7.querySelector('.image-text');

hoverImageContainersSet7.forEach((container) => {
  const hoverableImage = container.querySelector('.hoverable-image');
  const text = container.getAttribute('data-text');

  container.addEventListener('mouseenter', () => {
    const smallImageRect = hoverableImage.getBoundingClientRect();

    biggerImageSet7.src = hoverableImage.src;
    biggerImageContainerSet7.style.display = 'block';
    biggerImageContainerSet7.style.top = `${smallImageRect.top - 350}px`; /* Adjust the position of the bigger image */
    biggerImageContainerSet7.style.left = `${smallImageRect.left - -100}px`; /* Adjust the position of the bigger image */

    // Set the text for the specific image
    imageTextSet7.textContent = text;
  });

  container.addEventListener('mouseleave', () => {
    biggerImageContainerSet7.style.display = 'none';
  });
});

// Set 8
const hoverImageContainersSet8 = document.querySelectorAll('.set-8 .hover-image-container');
const biggerImageContainerSet8 = document.querySelector('.set-8 .bigger-image-container');
const biggerImageSet8 = biggerImageContainerSet8.querySelector('.bigger-image');
const imageTextSet8 = biggerImageContainerSet8.querySelector('.image-text');

hoverImageContainersSet8.forEach((container) => {
  const hoverableImage = container.querySelector('.hoverable-image');
  const text = container.getAttribute('data-text');

  container.addEventListener('mouseenter', () => {
    const smallImageRect = hoverableImage.getBoundingClientRect();

    biggerImageSet8.src = hoverableImage.src;
    biggerImageContainerSet8.style.display = 'block';
    biggerImageContainerSet8.style.top = `${smallImageRect.top - 300}px`; /* Adjust the position of the bigger image */
    biggerImageContainerSet8.style.left = `${smallImageRect.left - -100}px`; /* Adjust the position of the bigger image */

    // Set the text for the specific image
    imageTextSet8.textContent = text;
  });

  container.addEventListener('mouseleave', () => {
    biggerImageContainerSet8.style.display = 'none';
  });
});

// Set 9
const hoverImageContainersSet9 = document.querySelectorAll('.set-9 .hover-image-container');
const biggerImageContainerSet9 = document.querySelector('.set-9 .bigger-image-container');
const biggerImageSet9 = biggerImageContainerSet9.querySelector('.bigger-image');
const imageTextSet9 = biggerImageContainerSet9.querySelector('.image-text');

hoverImageContainersSet9.forEach((container) => {
  const hoverableImage = container.querySelector('.hoverable-image');
  const text = container.getAttribute('data-text');

  container.addEventListener('mouseenter', () => {
    const smallImageRect = hoverableImage.getBoundingClientRect();

    biggerImageSet9.src = hoverableImage.src;
    biggerImageContainerSet9.style.display = 'block';
    biggerImageContainerSet9.style.top = `${smallImageRect.top - 280}px`; /* Adjust the position of the bigger image */
    biggerImageContainerSet9.style.left = `${smallImageRect.left - 200}px`; /* Adjust the position of the bigger image */

    // Set the text for the specific image
    imageTextSet9.textContent = text;
  });

  container.addEventListener('mouseleave', () => {
    biggerImageContainerSet9.style.display = 'none';
  });
});



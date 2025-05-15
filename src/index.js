console.log('Hello, webpack!');

import(`./assets/illust.png`).then((module) => {
  console.log('Image loaded:', module.default);
  const img = document.createElement('img');
  img.src = module.default;
  document.body.appendChild(img);
}).catch((error) => {
  console.error('Error loading image:');
  console.error(error);
});
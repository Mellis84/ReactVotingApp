window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Trexle',
      description: 'Connecting all payments gateways to every e-commerce platform',
      url: '#',
      votes: generateVoteCount(),
      productImageUrl: 'images/products/trexle.png',
	  tags: ['payments'],
    },
    {
      id: 2,
      title: 'Forecastr',
      description: 'Smarter Project Estimates for Agile Teams',
      url: '#',
      votes: generateVoteCount(),
      productImageUrl: 'images/products/forecastr.jpg',
	  tags: ['agile'],
    },
    {
      id: 3,
      title: 'Jared',
      description: 'Automatic dependency updates for Android projects',
      url: '#',
      votes: generateVoteCount(),
      productImageUrl: 'images/products/jared.jpg',
	  tags: ['bot'],
    },
    {
      id: 4,
      title: 'Renderjs',
      description: 'Render service for making any JavaScript application crawlable and shareable',
      url: '#',
      votes: generateVoteCount(),
      productImageUrl: 'images/products/renderjs.png',
	  tags: ['es6'],
    },
  ];

  return { products: products };
}());

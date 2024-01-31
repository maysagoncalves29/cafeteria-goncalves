

const mockData = [
    { id: 1, title: 'Cafe 1', description: 'Cafe do Produto 1', detalhes: 'Cafe do Produto 1', price: 19.99, pictureUrl: '../../assets/img/cafe.jpg' },
    { id: 2, title: 'Cafe 2', description: 'Cafe do Produto 2', detalhes: 'Cafe do Produto 1', price: 29.99, pictureUrl: '../../assets/img/cafe.jpg' },
    { id: 3, title: 'Cafe 3', description: 'Cafe do Produto 3', detalhes: 'Cafe do Produto 1', price: 39.99, pictureUrl: '../../assets/img/cafe.jpg'},
  ];
  
  export const fetchItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 2000);
    });
  };
  
  
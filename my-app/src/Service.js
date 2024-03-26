
import './Serivce.css';
//The prices of the menu
const menuItems = [
    {
      id: 1,
      title: 'Traditional Thai',
      description: 'It uses pulling up and stretching techniques to help relieve tension and muscle soreness',
      imageName: mochii,
      price: [80,120,160],
      time: [60,90,120],
    },
    {
      id: 2,
      title: 'Thai Combination',
      description: 'It uses pulling up and stretching techniques to help relieve tension and muscle soreness',
      imageName: mochii,
      price: [80,120,160],
      time: [60,90,120],
    },
    {
      id: 3,
      title: 'Specific Area Massage',
      description: 'It uses pulling up and stretching techniques to help relieve tension and muscle soreness',
      imageName: mochii,
      price: [60],
      time: [30],
    },
    {
      id: 4,
      title: 'Specific Area Massage',
      description: 'Japanese green tea cake',
      imageName: matcha,
      price: 4.99,
    },
    {
      id: 5,
      title: 'Swedish Massage',
      description: 'Japanese rice cake',
      imageName: mochii,
      price: 3.99,
    },
    {
      id: 6,
      title: 'Deep Tissue Massage',
      description: 'Japanese skewered chicken',
      imageName: yakitori,
      price: 2.99,
    },
    {
      id: 7,
      title: 'Prenatal Massage',
      description: 'Japanese octopus balls',
      imageName: t,
      price: 5.99,
    },
    {
      id: 8,
      title: 'Cupping Therapy',
      description: 'Japanese raw fish',
      imageName: s,
      price: 8.99,
    },
    {
      id: 9,
      title: 'Thai Herbal Ball Massage',
      description: 'Japanese savory pancake',
      imageName: o,
      price: 6.99,
    },
    {
      id: 10,
      title: 'Aromatherapy Massage',
      description: 'Japanese curry with fried pork',
      imageName: katsu_image,
      price: 9.99,
    }
    {
      id: 11,
      title: 'Lymphatic Drainage Massage',
      description: 'Japanese curry with fried pork',
      imageName: katsu_image,
      price: 9.99,
    }
  ];
  
function Service() {


  document.getElementById('tab2').innerHTML = "<h2>Tab 2 Content</h2><p>This is the content for Tab 2.</p>";
  return (
    <div className="App">
      <p>Service</p>
    </div>
  );
}

export default Service;
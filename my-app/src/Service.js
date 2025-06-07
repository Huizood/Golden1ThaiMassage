import React from 'react';
import './Service.css';
import Menu from './component/Menu';
import trad_pic from './traditional_thai.jpg';
import thai_comb from './thai_combo.jpg';
import swedish from './swedish_m.jpg';
import couple from './couple.jpg';
import deep from './deep.jpg';
import foot from './foot.jpg';
import pre from './pre.jpg';
import scrub from './scrub.jpg';
// Define the menuItem with the Title/Description/Price
const menuItems = [
  {
    id: 1,
    title: 'Traditional Thai Massage',
    description: 'It uses pulling up and stretching techniques to help relieve tension and muscle soreness',
    image: trad_pic,
    time: [30,45,60,90,120],
    price: [50,65,80,120,160],
  },
  {
    id: 2,
    title: 'Thai Combination Massage',
    description: 'It uses pulling up and stretching techniques to help relieve tension and muscle soreness',
    image: thai_comb,
    time: [30,45,60, 90, 120],
    price: [50,65,80,120, 160],
  },
  {
    id: 3,
    title: 'Specific Area Massage',
    description: 'It uses pulling up and stretching techniques to help relieve tension and muscle soreness',
    image: thai_comb,
    time: [30],
    price: [60],
  },
  {
    id: 4,
    title: 'Swedish Massage',
    description: 'It involves long, kneading strokes combined with rhythmic tapping strokes and movement of the joints.',
    image: swedish,
    time: [30,45,60, 90, 120],
    price: [55,65,80,120, 160],
  },
  {
    id: 5,
    title: 'Deep Tissue Massage',
    description: 'Deep Tissue massage therapy is similar to Swedish massage therapy in that it focuses on the deepest layers of muscle tissue, tendons, and fascia.',
    image: deep,
    time: [30,45,60, 90, 120],
    price: [55,65,80,120, 160],
  },
  {
    id: 6,
    title: 'Prenatal Massage',
    description: 'It aims to relax tense muscles, relieve aches and pains, improve circulation and mobility, and simply make you feel better',
    image: pre,
    time: [60,90],
    price: [90,130],
   
  },
  {
    id: 7,
    title: 'Cupping Therapy',
    description: 'It aids in the treatment of pain, inflammation. Blood flow, relaxation, and well-being. As well as serving as a type of deep-tissue massage.',
    image: thai_comb,
    price: [30],
  },
  {
    id: 8,
    title: 'Foot Massage',
    description: 'Experience targeted foot massage techniques to promote relaxation and stimulate healing throughout the body',
    image: foot,
    time: [30,45,60, 90, 120],
    price: [55,65,80,120, 160],
  },
  {
    id: 9,
    title: 'Aromatherapy Massage',
    description: 'Type of Swedish massage that uses essential oils. Its main focus is relaxation and mindfulness',
    image: thai_comb,
    time: [60, 90,120],
    price: [100,150,200],
   
  },
  {
    id: 10,
    title: 'Body Scrub with Body Massage',
    description: 'Reveal silky-smooth skin with our exfoliating treatment, leaving you radiant and refreshed',
    image: scrub,
    time: [60,90],
    price: [100,130],
    
  },
  {
    id: 11,
    title: 'Couple Massage',
    description: 'Share a serene experience together, enjoying simultaneous massages in our tranquil setting.',
    image: couple,
    time: [60,90],
    price: [140,220],
   
  },
];

function Service() {
  return (
    <div className="service-container">
      <h2 className="section-title">Our Services</h2>
      {/* Below is the Menu.js where in the component folder such as will apply the title/description/price at the Menu.js file */}
      <Menu items={menuItems} />
    </div>
  );
}

export default Service;

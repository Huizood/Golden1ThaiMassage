import React from 'react';
import './Service.css';
import Menu from './component/Menu';

// Define menu items
const menuItems = [
  {
    id: 1,
    title: 'Traditional Thai',
    description: 'It uses pulling up and stretching techniques to help relieve tension and muscle soreness',
    price: [80,120,160],
    time: [60,90,120],
  },
  {
    id: 2,
    title: 'Thai Combination',
    description: 'It uses pulling up and stretching techniques to help relieve tension and muscle soreness',
    price: [80,120,160],
    time: [60,90,120],
  },
  {
    id: 3,
    title: 'Specific Area Massage',
    description: 'It uses pulling up and stretching techniques to help relieve tension and muscle soreness',
    price: [60],
    time: [30],
  },
  {
    id: 4,
    title: 'Swedish Massage',
    description: 'It involves long, kneading strokes combined with rhythmic tapping strokes and movement of the joints.',
    price: [80,120,160],
    time: [60,90,120],
  },
  {
    id: 5,
    title: 'Deep Tissue Massage',
    description: 'Deep Tissue massage therapy is similar to Swedish massage therapy in that it focuses on the deepest layers of muscle tissue, tendons, and fascia.',
    price: [80,120,160],
    time: [60,90,120],
  },
  {
    id: 6,
    title: 'Prenatal Massage',
    description: 'It aims to relax tense muscles, relieve aches and pains, improve circulation and mobility, and simply make you feel better',
    price: [80,120],
    time: [60,90],
  },
  {
    id: 7,
    title: 'Cupping Therapy',
    description: 'It aids in the treatment of pain, inflammation. Blood flow, relaxation, and well-being. As well as serving as a type of deep-tissue massage.',
    price: [60],
    time: [],
  },
  {
    id: 8,
    title: 'Thai Herbal Ball Massage',
    description: 'The massage uses a selection of therapeutic herbs, such as ginger, turmeric, and lemongrass - which are wrapped in a muslin cloth and tied into a ball.',
    price: [100,150,200],
    time: [60,90,120],
  },
  {
    id: 9,
    title: 'Aromatherapy Massage',
    description: 'Type of Swedish massage that uses essential oils. Its main focus is relaxation and mindfulness',
    price: [100,150,200],
    time: [60, 90,120],
  },
  {
    id: 10,
    title: 'Lymphatic Drainage Massage',
    description: 'Gentle massage that helps move lymph fluids around the body and drain lymph nodes. It can relieve lymphedema.',
    price: [100,150,200],
    time: [60,90,120],
  },
];

function Service() {
  return (
    <div className="service-container">
      <h2 className="section-title">Our Services</h2>
      <Menu items={menuItems} />
    </div>
  );
}

export default Service;

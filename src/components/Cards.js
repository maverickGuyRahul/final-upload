import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Kedarnath from '../images/kedarnath.jpg';
import flowerValley from '../images/flower-valley.jpg';
import Mahadevimg from '../images/mahadev.jpg';
import Shimla from '../images/shimla.jpg';
import HimalayaFootball from '../images/himalaya.jpg';
import Thar from '../images/thar.jpg';
import GoldenTemple from '../images/golden-temple.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Kedarnath}
              text='Experience the Mystical Touch of Kedarnath!'
              label='Spiritual Bliss'
              path='/services'/>
              <CardItem
              src={flowerValley}
              text='Rejoice with your Loved ones in the Blooming Flower Valley of Nagaland'
              label='Wonders of Nature'
              path='/services'/>
            <CardItem
              src={Mahadevimg}
              text='Travel through the Hills of Garadia Mahadev Temple in Kota'
              label='Padhaaro Mhaare Des..'
              path='/services'/>
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Shimla}
              text='Wander in the Valleys of Shimla'
              label='Adrenaline'
              path='/services'
            />
            <CardItem
              src={HimalayaFootball}
              text='Experience Football on Top of the Himalayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={Thar}
              text='Ride through the Thar Desert on a guided camel tour'
              label='Summer Thrill'
              path='/products'
            />
            <CardItem
              src={GoldenTemple}
              text='Experience the Spiritual Bliss of Sikhism in Amritsar'
              label='Wonders of India'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

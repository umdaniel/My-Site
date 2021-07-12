import { v4 as uuidv4 } from 'uuid';

import ProjectImg from '../images/project.jpg';
import FarmingImg from '../images/verticalfarming.jpg';
import ChatImg from '../images/chat.jpg';
import MemoriesImg from '../images/mems.jpg';
import BarberImg from '../images/barber.jpg';
import EdenImg from '../images/eden.jpg';
import CinemaImg from '../images/cinema.jpg';
import PortfolioImg from '../images/portfolio.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Go Produce',
    desc:
      'An website made for a buisness plan involving the implementation of vertical farms in major cities. A way for individuals to purchase higher quality produce.',
    img: FarmingImg,
  },
  {
    id: uuidv4(),
    name: 'Chatter',
    desc:
      'A web application made to send messages, images, and emojis with family and friends.',
    img: ChatImg,
  },
  {
    id: uuidv4(),
    name: 'Headspace',
    desc:
      'A blog / memory capsule web application created to post and remember memories made throughout the year.',
    img: MemoriesImg,
  },
  {
    id: uuidv4(),
    name: "John's Barber",
    desc:
      'A web application designed to show case a local barber shop in Centreville, Virginia.',
    img: BarberImg,
  },
  {
    id: uuidv4(),
    name: "Revivals Medicines",
    desc:
      'A website created for a local Chinese Medicinal Store located in Falls Church, Virginia. Individuals can purchase different types of herbal medicines and more.',
    img: EdenImg,
  },
  {
    id: uuidv4(),
    name: "Danny's Portfolio",
    desc:
      'A portfolio website for a Computer Information Systems undergraduate attending James Madison University.',
    img: PortfolioImg,
  },
  {
    id: uuidv4(),
    name: "In the Seats",
    desc:
      'A movie and television web application created using a movie database. Users can browse and search all trending movies and television series.',
    img: CinemaImg,
  },
];

export default projects;
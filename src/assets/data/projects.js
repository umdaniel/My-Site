import { v4 as uuidv4 } from 'uuid';

import ProjectImg from '../images/project.jpg';
import FarmingImg from '../images/verticalfarming.jpg';
import ChatImg from '../images/chat.jpg';
import MemoriesImg from '../images/mems.jpg';
import BlogImg from '../images/blog.jpg';
import EdenImg from '../images/eden.jpg';

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
    name: "Community",
    desc:
      'A web application similar to Instagram and Facebook, where individuals can post messages, images, and more.',
    img: BlogImg,
  },
  {
    id: uuidv4(),
    name: "Eden Medicines",
    desc:
      'A website created for a local Chinese Medicinal Store located in Annandale, Virginia. Individuals can purchase different types of herbal medicines and more.',
    img: EdenImg,
  },
];

export default projects;
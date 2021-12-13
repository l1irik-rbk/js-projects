import './css/reset.css';
import './style.css';
import Toys from './components/toys';
import data from './components/data';

const toys = new Toys();
toys.draw(data);
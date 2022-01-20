import './reset/reset.css';
import './style.css';
import { render, updateGarage } from './components/render';

render();
await updateGarage();

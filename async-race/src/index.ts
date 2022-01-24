import './reset/reset.css';
import './style.css';
import { render, updateGarage } from './components/mainRender/render';

render();
await updateGarage();

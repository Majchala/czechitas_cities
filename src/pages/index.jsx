import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { City } from '../components/City/city';


document.querySelector('#root').innerHTML = render(
  <>
    <City />
  </>
);




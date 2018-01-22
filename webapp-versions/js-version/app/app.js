import { DropZone } from './domain/index.js'

import './css/reset.css';
import './css/grid.css';
import './css/global.css';
import './css/layout.css';
import './css/main-area.css';
import './css/navbar.css';
import './css/toolbox.css';
import './css/form-elements.css';
import './css/dropzone.css';


const dropZone = new DropZone('dropzone');
dropZone.init();


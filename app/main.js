//rollup -> babel -> browser :)

//import * as $ from '../node_modules/jquery/dist/jquery.js';
//import $ from '../node_modules/jquery/dist/jquery.slim.js';

//UI
import workSpace from './work-space/work-space.js';

//Yep, only one onload listener, but we only need one
window.onload = function(){
    workSpace.init();
};

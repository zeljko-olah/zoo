import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import ShowAll from './modules/ShowAll';


var mobileMenu = new MobileMenu();
var showAll = new ShowAll();
new RevealOnScroll($(".icon--logo"), "85%");
// new RevealOnScroll($(".plans"), "85%");
// new RevealOnScroll($(".site-tech__landing-header"), "100%");
new RevealOnScroll($(".main-content__sidebar"), "50%");

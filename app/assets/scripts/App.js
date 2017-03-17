import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".icon--logo"), "85%");
// new RevealOnScroll($(".plans"), "85%");
// new RevealOnScroll($(".site-tech__landing-header"), "100%");
new RevealOnScroll($(".main-content__sidebar"), "50%");
var stickyHeader = new StickyHeader();

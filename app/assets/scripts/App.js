import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".about__resume--curl-page"), "55%");
new RevealOnScroll($(".main-content__sidebar"), "50%");
var stickyHeader = new StickyHeader();

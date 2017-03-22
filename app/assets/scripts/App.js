import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".about__resume--curl-page"), "55%");
new RevealOnScroll($(".main-content__sidebar"), "50%");
var stickyHeader = new StickyHeader();
var modal = new Modal($(".open-modal-1"), $(".modal-1"));
var modal = new Modal($(".open-modal-2"), $(".modal-2"));
var modal = new Modal($(".open-modal-3"), $(".modal-3"));
var modal = new Modal($(".open-modal-4"), $(".modal-4"));

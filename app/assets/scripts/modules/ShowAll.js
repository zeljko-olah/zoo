import $ from 'jquery';

class ShowAll {
  constructor() {
    this.listItems = $(".viewAllList");
    this.viewAllButton = $(".viewAllButton");
    this.events();
  }

  events() {
    this.viewAllButton.click(this.showAllLis.bind(this));
  }

  showAllLis() {
    this.listItems.toggleClass('site-tech__tech-list--is-visible');
    this.viewAllButton.slideUp('fast');
    return false;
  }
}

export default ShowAll;

import DiscourseRoute from 'discourse/routes/discourse';

/**
 * Route for the path `/friendlyfeed` as defined in `../friendlyfeed-route-map.js.es6`.
 */
export default DiscourseRoute.extend({
  renderTemplate() {
    // Renders the template `../templates/friendlyfeed.hbs`
    this.render('friendlyfeed');
  }
});
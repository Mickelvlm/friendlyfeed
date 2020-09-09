/**
 * Route for the path `/friendlyfeed` as defined in `../friendlyfeed-route-map.js.es6`.
 */
export default Discourse.Route.extend({
    renderTemplate() {
      // Renders the template `../templates/friendlyfeed.hbs`
      this.render('friendlyfeed');
    }
  });
  
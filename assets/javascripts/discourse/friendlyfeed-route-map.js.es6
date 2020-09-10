/**
 * Links the path `/friendlyfeed` to a route named `friendlyfeed`. Named like this, a
 * route with the same name needs to be created in the `routes` directory.
 */
export default function () {
  this.route('friendlyfeed', { path: '/friendlyfeed' });
}
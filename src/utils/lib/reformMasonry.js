/**
 * Calculate the masonry
 *
 * Calculate the average of heights of masonry-bricks and then
 * set it as the height of the masonry element.
 *
 * @since 12212018
 * @author Rahul Arora
 * @param grid       Object  The Masonry Element
 * @param gridCell   Object  The Masonry bricks
 * @param gridGutter Integer The Vertical Space between bricks
 * @param dGridCol   Integer Number of columns on big screens
 * @param tGridCol   Integer Number of columns on medium-sized screens
 * @param mGridCol   Integer Number of columns on small screens
 */
export function masonry(
  grid,
  gridCell,
  gridGutter,
  dGridCol,
  tGridCol,
  mGridCol
) {
  let g = document.querySelector(grid);
  let gc = document.querySelectorAll(gridCell);
  let gcLength = gc.length; // Total number of cells in the masonry
  let gHeight = 0; // Initial height of our masonry

  // Calculate the net height of all the cells in the masonry
  for (let i = 0; i < gcLength; ++i) {
    gHeight += gc[i].offsetHeight + parseInt(gridGutter);
  }

  /*
   * Calculate and set the masonry height based on the columns
   * provided for big, medium, and small screen devices.
   */

  if (window.screen.width >= 1024) {
    g.style.height = gHeight / dGridCol + gHeight / (gcLength + 1) + 'px';
  } else if (window.screen.width < 1024 && window.screen.width >= 768) {
    g.style.height = gHeight / tGridCol + gHeight / (gcLength + 1) + 'px';
  } else {
    g.style.height = gHeight / mGridCol + gHeight / (gcLength + 1) + 'px';
  }
}

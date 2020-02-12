class DomDistance{
  constructor(breakPosition, successCandidates){
    this.breakPosition = breakPosition;
    this.successCandidates = successCandidates;
  }

  async getSortedCandidateActions() {
    await this.sortCandidates();
    return this.successCandidates;
  }

  async sortCandidates(){
    await this.calculateCandidatesDistance();
    await this.successCandidates.sort(function(a,b) {
      // return b[2] - a[2];
      return a[2] - b[2];
    });    
  }

  async calculateCandidatesDistance(){
    if (this.breakPosition) {
      for (let i=0 ; i < this.successCandidates.length ; i++) {      
        // let distance = getDistance(this.breakPosition[0].element, this.successCandidates[i].element);
        let distance = await getDistanceCenter(this.breakPosition[0].element, this.successCandidates[i].element);
        this.successCandidates[i].distance = distance;
      }
    }    
  }
  

}


// Calculates the distance between two points in 2D space.

// @private
// @param {Number} aLeft
// @param {Number} aTop
// @param {Number} bLeft
// @param {Number} bTop
// @returns {Number}

function getDistanceBetweenPoints(aLeft, aTop, bLeft, bTop) {

  return Math.sqrt(Math.pow(bLeft - aLeft, 2) + Math.pow(bTop - aTop, 2));

}


// Calculates the distance between two unrotated rectangles in 2D space. This
// function assumes that the rectangles do not intersect.
// @private
// @param {Rectangle} rectA
// @param {Rectangle} rectB
// @returns {Number}



// function getDistanceBetweenRects(rectA, rectB) {
function getDistance(rectA, rectB) {

  var ret = 0;
  var aLeft = rectA.left;
  var aRight = aLeft + rectA.width;
  var aTop = rectA.top;
  var aBottom = aTop + rectA.height;
  var bLeft = rectB.left;
  var bRight = bLeft + rectB.width;
  var bTop = rectB.top;
  var bBottom = bTop + rectB.height;

  // Calculate shortest corner distance
  if ((bLeft > aRight || bRight < aLeft) && (bTop > aBottom || bBottom < aTop)) {
    if (bLeft > aRight) {
      ret = bBottom < aTop ? getDistanceBetweenPoints(aRight, aTop, bLeft, bBottom) : getDistanceBetweenPoints(aRight, aBottom, bLeft, bTop);
    }
    else {
      ret = bBottom < aTop ? getDistanceBetweenPoints(aLeft, aTop, bRight, bBottom) : getDistanceBetweenPoints(aLeft, aBottom, bRight, bTop);
    }
  }

  // Calculate shortest edge distance
  else {
    ret = bBottom < aTop ? aTop - bBottom :
    bLeft > aRight ? bLeft - aRight :
    bTop > aBottom ? bTop - aBottom :
    aLeft - bRight;
  }

  return ret;

}



async function getDistanceCenter(div1rect, div2rect) {
  // get div1's center point
  var div1x = div1rect.left + div1rect.width/2;
  var div1y = div1rect.top + div1rect.height/2;

  // get div2's center point
  var div2x = div2rect.left + div2rect.width/2;
  var div2y = div2rect.top + div2rect.height/2;

  // calculate the distance using the Pythagorean Theorem (a^2 + b^2 = c^2)
  var distanceSquared = Math.pow(div1x - div2x, 2) + Math.pow(div1y - div2y, 2);
  var distance = Math.sqrt(distanceSquared);

  return distance;
}

// module.exports.getDistance = getDistance;
// module.exports.getDistanceCenter = getDistanceCenter;
module.exports.DomDistance = DomDistance;
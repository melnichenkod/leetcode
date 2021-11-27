/* Find first one number */
/* let arr = [0, 0, 0, 0, 1, 4, 8];

function binSearch(array, element) {
  let oneIndex = array.length;
  let zerroIndex = -1

  while ((oneIndex - zerroIndex) > 1) {
    let averageValueArray = Math.floor((oneIndex + zerroIndex) / 2);
    if (array[averageValueArray] >= element) {
      oneIndex = averageValueArray
    } else {
      zerroIndex = averageValueArray;
    }
  }
  return oneIndex;
}
console.log(binSearch(arr, 1)); */

/* 278. First Bad Version. You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API. */

/* 
 * Definition for isBadVersion()
 * 
 @param {integer} version number
 @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 
 */

/*   @param {function} isBadVersion()
  @return {function}
  */
 var solution = function(isBadVersion) {
  
/*    @param {integer} n Total versions
   @return {integer} The first bad version
    */
  return (n) => binSearch(n, isBadVersion)
};

const binSearch = (a, isBadVersion) => {
  let bad = a;
  let good = -1;
  while(bad - good > 1) {
      let m = Math.floor((good + bad) / 2);
      if (isBadVersion(m)) {
          bad = m;
      } else {
          good = m;
      }
  }
  return bad;
}


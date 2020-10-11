/**
 * 
 * Add commas to large numbers
 * 
 */
export function addCommas(num) {
  if (!num) {
    return ' -'
  }
  let result=[];
  let counter=0;
  let numArray = num.toString().split('');

  /**If there are decimals, include those first and remove
   * them from the array
   */
  if (numArray.includes('.')){
    const decimals = numArray.splice(numArray.indexOf('.'))
    result.push(decimals.join(''))
  }

  /**Iterate through the remaining numbers right to left,
   * adding them to the result and adding a ',' every 3
   */
  for(let i = numArray.length-1; i>=0; i--){
    if (counter!==0 &&
        counter%3 === 0 &&
        numArray[i] !== '-'){
      result.unshift(',')
    }
    result.unshift(numArray[i])
    counter++
  }
  return result.join('')
}
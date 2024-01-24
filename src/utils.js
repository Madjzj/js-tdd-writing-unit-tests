export function pointsForWord(word) {
    let points = 0;
    if(typeof word != "string"){
        return points
    }
    for (const char of word) {
        if(/[a-z]/i.test(char)){
            
            points += /[aeiou]/i.test(char) ? 1 : 2;
        }
    }
    return points;
  }
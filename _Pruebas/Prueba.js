function replace_(str, strSearch, strReplace) {
    var exist = true;
    var j = 0;
    var l = 0;
    while (exist = true && str.length > 0) {
        l = str.length
        str = str.replace(strSearch, strReplace);
        
        if (l == str.length) {
                exist = false
         }
         else {
                j++;
                exist = true
         }
        
      }
      return j;
}
var str = "adsjfdsfsfjsdjfhacabcsbajda";
str = replace_(str, str[0], "");
console.log (str);
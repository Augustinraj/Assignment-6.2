function getmax() {
    //Declaring NUmbers using Array//
    var numbers = [11, 22, 99],
        //max funtion which returns the maximum value in an array//
        max = Math.max.apply(null,numbers);
    //Displaying the largest number in console//
  console.log(max);
}
getmax(); 

const NumberFormat = (number = 0) => {
   const thousand = new Intl.NumberFormat('id');
   return thousand.format(number);
}

export default NumberFormat;
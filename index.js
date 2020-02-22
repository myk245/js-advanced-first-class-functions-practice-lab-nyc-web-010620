// Receives an array of driver objects and logs the name attribute of each driver to the console.
const logDriverNames = function(drivers) {
   for (const driver of drivers) {
      console.log(driver.name);
   };
};

// Receives an array of driver objects as the first argument and a location as the second argument. 
// The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
// logs the name of each driver whose hometown matches the passed-in argument
const logDriversByHometown = function(drivers, location) {
   for (const driver of drivers) {
      if (driver.hometown === location) {
      console.log(driver.name);
      }; 
   };  
};

// Receives an array of `driver` objects and returns a new array of `driver` objects sorted 
// by their `revenue` attribute from lowest to highest (ascending order)
// uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)
const driversByRevenue = function(drivers) {
   const driversArrayCopy = [...drivers]
   return driversArrayCopy.sort(function(d1, d2) {
      return d1.revenue - d2.revenue; 
   });
}; 

// Receives an array of driver objects and returns a new array of driver objects sorted by their 
// name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
const driversByName = function(drivers) {
   const driversArrayCopy = drivers.slice()
   return driversArrayCopy.sort(function(d1, d2) {
      return d1.name.localeCompare(d2.name); 
   });  
}; 

//Receives an array of driver objects and returns the sum of the revenue earned by each driver.
const totalRevenue = function(drivers) {
   return drivers.reduce(function(total, driver) {
      return driver.revenue + total;
   }, 0); 
}; 

//Receives an array of driver objects and returns the average revenue earned by each driver.
const averageRevenue = function(drivers) {
   return totalRevenue(drivers)/drivers.length; 
}; 
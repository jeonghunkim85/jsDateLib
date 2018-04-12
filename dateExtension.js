
Date.prototype.getFirstDateOfMonth = function() {
  var date = new Date(this);
  return new Date(date.setDate(1));
};

Date.prototype.getLastDateOfMonth = function() {
  return this.getFirstDateOfMonth().addMonths(1).addDays(-1);
};

Date.prototype.addDays = function(days){
  var date = new Date(this);
  return new Date(date.setDate( date.getDate() + Number(days) )) ;
};

Date.prototype.addMonths = function(month){
  var date = new Date(this);
  return new Date(date.setMonth( date.getMonth() + Number(month) ));
};

Date.prototype.getFirstDateOfCalendar = function() {
  return this.getFirstDateOfMonth().addDays(-this.getFirstDateOfMonth().getDay());
};

Date.prototype.getLastDateOfCalendar = function() {
  return this.getLastDateOfMonth().addDays( 6 - this.getLastDateOfMonth().getDay() );
};

Date.prototype.countDaysTo = function(date) {
  return Math.ceil(Math.abs(this.getTime() - date.getTime()) / 86400000);
};

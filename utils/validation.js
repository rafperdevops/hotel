function validatePrice(price) {
    return price >= 10 && price <= 1000;
  }
  
  function validateCapacity(capacity) {
    return capacity >= 1 && capacity <= 20;
  }
  
  function validateName(name) {
    return name.length >= 3 && name.length <= 50;
  }
  
  function validateDescription(description) {
    return description.length >= 10 && description.length <= 200;
  }
  
  module.exports = {
    validatePrice,
    validateCapacity,
    validateName,
    validateDescription
  };
  
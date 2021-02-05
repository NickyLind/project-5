export default class EarthYears {
  constructor(age)  {
    this.age = age;
  }
  
  checkAge()  {
    if (typeof this.age == 'number')  {
      return true
      } else  {
        return false
      }
    }

  mercuryAge()  {
    return parseFloat((this.age / 0.24).toFixed(1))
  }

  venusAge()  {
    return parseFloat((this.age / 0.62).toFixed(1))
  }

  marsAge() {
    return parseFloat((this.age / 1.88).toFixed(1))
  }
  
  jupiterAge()  {

  }
};
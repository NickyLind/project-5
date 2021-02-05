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
    return Math.round(this.age / 0.24)
  }

  venusAge()  {
    return Math.round(this.age / 0.62)
  }
};
export default class EarthYears {
  constructor(age, sex)  {
    this.age = age;
    this.sex = sex;
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
    return parseFloat((this.age / 11.86).toFixed(1))
  }

  lifeExpectency()  {
    // if (this.sex = "Female")  {
    //   return true
    // } else  {
    //   return false
    // }
  }
};
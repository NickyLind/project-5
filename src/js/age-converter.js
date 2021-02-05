export default class EarthYears {
  constructor(age, sex) {
    this.age = age;
    this.sex = sex;
  }

  checkAge() {
    if (typeof this.age == 'number') {
      return true
    } else {
      return false
    }
  }

  mercuryAge() {
    return parseFloat((this.age / 0.24).toFixed(1))
  }

  venusAge() {
    return parseFloat((this.age / 0.62).toFixed(1))
  }

  marsAge() {
    return parseFloat((this.age / 1.88).toFixed(1))
  }

  jupiterAge() {
    return parseFloat((this.age / 11.86).toFixed(1))
  }

  lifeExpectency() {
    if (this.sex === "female") {
      let newAge = 81
      let expectencyArray = []
      let numberExpectedArray = []
      let userAgeArray = []
      let userAgeOverExpect = []
      let userTimeToLive = []
      userAgeArray.push((this.age / 0.24).toFixed(1), (this.age / 0.62).toFixed(1), (this.age / 1.88).toFixed(1), (this.age / 11.86).toFixed(1))
      expectencyArray.push((newAge / 0.24).toFixed(1), (newAge / 0.62).toFixed(1), (newAge / 1.88).toFixed(1), (newAge / 11.86).toFixed(1))
      expectencyArray.forEach(function (element) {
        numberExpectedArray.push(parseFloat(element))
      })
      if (this.age > newAge) {
        for (let i = 0; i < numberExpectedArray.length; i++) {
          userAgeOverExpect.push(parseFloat((userAgeArray[i] - numberExpectedArray[i]).toFixed(1)))
        } return userAgeOverExpect;
      } else {
        for (let i = 0; i < userAgeArray.length; i++) {
          userTimeToLive.push(parseFloat((numberExpectedArray[i] - userAgeArray[i]).toFixed(1)))
        } return userTimeToLive;
      }

    } else {
      let newAge = 77
      let expectencyArray = []
      let numberExpectedArray = []
      let userAgeArray = []
      let userAgeOverExpect = []
      let userTimeToLive = []
      userAgeArray.push((this.age / 0.24).toFixed(1), (this.age / 0.62).toFixed(1), (this.age / 1.88).toFixed(1), (this.age / 11.86).toFixed(1))
      expectencyArray.push((newAge / 0.24).toFixed(1), (newAge / 0.62).toFixed(1), (newAge / 1.88).toFixed(1), (newAge / 11.86).toFixed(1))
      expectencyArray.forEach(function (element) {
        numberExpectedArray.push(parseFloat(element))
      })
      if (this.age > newAge) {
        for (let i = 0; i < numberExpectedArray.length; i++) {
          userAgeOverExpect.push(parseFloat((userAgeArray[i] - numberExpectedArray[i]).toFixed(1)))
        } console.log(userAgeOverExpect)
        return userAgeOverExpect;
      } else {
        for (let i = 0; i < userAgeArray.length; i++) {
          userTimeToLive.push(parseFloat((numberExpectedArray[i] - userAgeArray[i]).toFixed(1)))
        } return userTimeToLive;
      }
    }
  }
}; 
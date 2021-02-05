import { TestScheduler } from 'jest';
import EarthYears from '../src/js/age-converter.js';

describe('Earth Years Conversion',  ()  =>  {

  test('should correctly create an EarthYears object with an age',  ()  =>  {
    const earthAge = new EarthYears(30)
    expect(earthAge.age).toEqual(30);
  })

  test('should correctly know if the entered value for age is a number',  ()  =>  {
    const earthAge = new EarthYears(30)
    expect(earthAge.checkAge()).toEqual(true);
  })

  test('should correctly know if the entered value for age is a number',  ()  =>  {
    const earthAge = new EarthYears("thirty")
    expect(earthAge.checkAge()).toEqual(false);
  })

  test('should convert age in Earth years to age in years on Mercury',  ()  =>  {
    const earthAge = new EarthYears(30)
    expect(earthAge.mercuryAge()).toEqual(125)
  })

  test('should convert age in Earth years to age in years on Venus',  ()  =>  {
    const earthAge = new EarthYears(30)
    expect(earthAge.venusAge()).toEqual(48.4)
  })

  test('should convert age in Earth years to age in years on Mars', ()  =>  {
  const earthAge = new EarthYears(30)
  expect(earthAge.marsAge()).toEqual(16)
  })

  test('should convert age in Earth years to age in years on Jupiter', ()  =>  {
    const earthAge = new EarthYears(30)
    expect(earthAge.jupiterAge()).toEqual(2.5)
  })

  test('should determine whether users sex is female and outputs age for each planet',  ()  =>  {
    const earthGender = new EarthYears(30, "female")
    expect(earthGender.lifeExpectency()).toEqual([337.5, 130.6, 43.1, 6.8])
  })

  test('should determine whether users sex is male and outputs age for each planet',  ()  =>  {
    const earthGender = new EarthYears(30, "male")
    expect(earthGender.lifeExpectency()).toEqual([320.8, 124.2, 41, 6.5])
  })

  // test('should determine whether a users life expectency has surpassed the average life expectency',  ()  =>  {
  //   const expectedAge = new EarthYears(90, "female") 
  //   expect(expectedAge.lifeExpectency()).toEqual()
  // })
})
// "337.5, 130.6, 43.1, 6.8"
// 320.8, 124.2, 41, 6.5
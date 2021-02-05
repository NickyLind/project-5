import { TestScheduler } from 'jest';
import EarthYears from '../src/js/age-converter.js';

describe('Earth Years',  ()  =>  {

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
    expect(earthAge.venusAge()).toEqual(48)
  })

  test('should convert age in Earth years to age in years on Mars', ()  =>  {
  const earthAge = new EarthYears(30)
  expect(earthAge.marsAge()).toEqual(16)
  })
})

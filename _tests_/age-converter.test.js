import { TestScheduler } from 'jest';
import EarthYears from './../src/js/age-converter.js';

describe('EarthYears',  ()  =>  {

  test('should correctly create an EarthYears object with an age',  ()  =>  {
    const earthAge = new EarthYears(30)
    expect(earthAge.age).toEqual(30);
  })
})
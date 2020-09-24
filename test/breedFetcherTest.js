// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Sibe', (err, desc) => {
      // we expect no error for this scenario
      console.log("desc", desc); 
      assert.equal(err, null);
      
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(expectedDesc, desc);
      done();
    }); 
  }); 

  it('invalid/non-existent breed is passed in', (done) => {
        fetchBreedDescription('Siberi', (err, desc) => {
          // compare returned description
          const expectedErr = "Breed Not Found"; 
          assert.equal(err, expectedErr);
          done();
    });
  });
    
});
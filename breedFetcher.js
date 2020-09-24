const request = require('request');
const breedName = process.argv[2];

const urlAddress = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedName}`;
request(urlAddress, function(error, response, body) {

  if (error) {
    return console.log("URL is  not valid", error);
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log("Breed Not Found");
    return error;
  }
  
});
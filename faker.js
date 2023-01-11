const Faker = require('faker');
const fs = require('fs');
const data = [];
for (let i = 0; i < 10000000; i++) {
data.push([Faker.name.firstName()]);
}
let sql = 'INSERT INTO users (Name) VALUES \n';
data.forEach((row) => {
  sql +=   (`('${row[0]}'), \n`);
});
sql = sql.slice(0, -3) + ';';
fs.writeFileSync('seed.sql', sql);
console.log('SQL seed file created');
////////////////////////////////////////////////////////////
const data_reviews = [];
const chunkSize = 1000; // Number of rows per chunk
const file = fs.createWriteStream('seed_reviews.sql');
for (let i = 0; i < 10000000; i++) {
  data_reviews.push([Faker.lorem.paragraph()]);
  if (data_reviews.length === chunkSize) {
    writeData(file, data_reviews);
    data_reviews.length = 0; // Clear the data array
  }
}
if (data_reviews.length > 0) {
  writeData(file, data_reviews);
}
file.end();
console.log('SQL seed_revievs file created');
function writeData(file, data_reviews) {
  let sql = 'INSERT INTO reviews (comment) VALUES \n';
  data_reviews.forEach((row) => {
    sql += `('${row[0]}'), \n`;
  });
  sql = sql.slice(0, -3) + '; \n';
  file.write(sql);
}
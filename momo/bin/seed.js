const mongoose = require("mongoose");
const faker = require("faker");

// db connection
function dbConnect(cb) {
  mongoose
    .connect("mongodb://localhost/momo", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => {
      console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
      cb();
    })
    .catch(err => {
      console.error("Error connecting to mongo", err);
    });
}

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

dbConnect(() => {
  // mongoose models import so we can CRUD the data
  const Employees = require("../models/Employees");
  const Customers = require("../models/Customers");
  const Services = require("../models/Services");
  const Rides = require("../models/Rides");

  const fakeEmployees = Array(100)
    .fill()
    .map(() => {
      const depts = ["web", "devops", "accountant"];

      return {
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        age: randomInt(18, 99),
        salary: randomInt(20000, 50000),
        dept: depts[randomInt(0, depts.length - 1)]
      };
    });

  const fakeServices = Array(100)
    .fill()
    .map(() => {
      const categories = ["amusement", "drinks and beverage", "food"];

      return {
        name: faker.name.firstName(),
        nif: `${randomInt(10000, 20000)}F`,
        category: categories[randomInt(0, categories.length - 1)]
      };
    });

  Employees.deleteMany()
    .then(() => {
      return Employees.create(fakeEmployees);
    })
    .then(() => {
      return Services.deleteMany();
    })
    .then(() => {
      return Services.create(fakeServices);
    })
    .then(() => {
      console.log("succesfully added all the data");
      mongoose.connection.close();
      process.exit(0);
    });
});

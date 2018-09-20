// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define("User", {
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     email: DataTypes.STRING,
//     phone: DataTypes.INTEGER,
//     bio: DataTypes.TEXT,
//     hobbies: DataTypes.TEXT,
//     age: DataTypes.INTEGER,
//     gender: DataTypes.STRING,
//     budget: DataTypes.INTEGER,
//     jobTitle: DataTypes.STRING,
//     employed: DataTypes.BOOLEAN,
//     city: DataTypes.STRING,
//     zip: DataTypes.INTEGER,
//     cleanScore: DataTypes.INTEGER,
//     financeScore: DataTypes.INTEGER,
//     personalityScore: DataTypes.STRING
//   });
//   return User
// };

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    bio: DataTypes.TEXT,
    hobbies: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    budget: DataTypes.INTEGER,
    jobTitle: DataTypes.STRING,
    employed: DataTypes.BOOLEAN,
    city: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    cleanScore: DataTypes.INTEGER,
    financeScore: DataTypes.INTEGER,
    personalityScore: DataTypes.STRING
  });
  return User;
};

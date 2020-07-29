// Inventory models

// The item has a name attribute of type DataTypes.String
// and a on sale attribute that is false by default

// QUESTIONS ON THIS: 

// how are we going to add X many days onto the date_received to then store as exp_date?!?
module.exports = function(sequelize, DataTypes) {
    var Inventory = sequelize.define(
      "Inventory",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        price: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        date_received: {
            type: DataTypes.DATEONLY,
            allowNull: false
          },
        exp_date: {
            type: DataTypes.DATE,
            allowNull: false
          },
        onSale: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        classMethods: {
          associate: function (models) {
            Inventory.hasOne(models.Categories);
            Inventory.hasOne(models.Sales);
          },
        },
      }
    );
    return Inventory;
  };
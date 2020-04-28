module.exports = function (sequelize, DataTypes) {
  return sequelize.define('product', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    amount: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
  }, {
    // options
  });
};

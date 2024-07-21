module.exports = (sequelize, DataTypes) => {
    const Report = sequelize.define('Report', {
        productType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startperiod: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        endperiod: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data: {
            type: DataTypes.JSON,
            allowNull: true,
        }
    }, {
        timestamps: true,
    });

    return Report;
};

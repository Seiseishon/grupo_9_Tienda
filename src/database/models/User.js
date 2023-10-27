module.exports = (sequelize, DataTypes )=>{
    const User = sequelize.define ('User',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type:  DataTypes.STRING(95),
            allowNull: false
        },
        email: {
            type:  DataTypes.STRING(95),
            allowNull: false
        },
        password: {
            type:  DataTypes.STRING(95),
            allowNull: false
        },
        country: {
            type:  DataTypes.STRING(95),
            allowNull: false
        },
        avatar: {
            type:  DataTypes.STRING(95),
            allowNull: false
        }
    },{
        tableName: 'users',
        timestamps: false,
    });
    return User;
}
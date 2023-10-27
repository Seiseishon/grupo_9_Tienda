module.exports = (sequelize, DataTypes )=>{
    const Product = sequelize.define ('Product',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(95),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        envio: {
            type: DataTypes.STRING(95),
            allowNull: false
        },
        img: {
            type: DataTypes.STRING(95),
            allowNull: false
        }
    },{
        tableName: 'products',
        timestamps: false,
    });
    return Product;
}
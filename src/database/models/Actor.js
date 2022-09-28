module.exports = (sequelize, DataTypes) => {

    const alias = "Actor"

    const cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull  : false,
            autoIncrement : true
        },
        first_name : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        last_name : {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        rating : {
            type : DataTypes.DECIMAL(3,1),
            defaultValue : null,
        },
/*         favorite_movie_id : {
            tpye : DataTypes.INTEGER.UNSIGNED,
            allowNull:  true,
            defaultValue : null
        } */
    }

    const config = {
        tablename :'actors',
        timestamps : true,  /* false si no existe */
        underscored : true,
    }

    const Ator = sequelize.define(alias,cols,config)

    return Ator
}
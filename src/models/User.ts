import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const User = sequelize.define('user', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT,
  },
  fname: {
    type: DataTypes.STRING,
  },
  lname: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password:{
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export default User;

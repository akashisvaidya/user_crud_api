import UserSchema from "./UserSchema.js";

//create
export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};
//Read
export const getUser = () => {
  return UserSchema.find();
};
//Update,, filter and objTOUdate must be an object data type
export const updateUser = (filter, objToUpdate) => {
  return UserSchema.findOneAndUpdate(filter, objToUpdate, { new: true }); // {new: true} returns data after upadating the database
};
//Delete
// filter must be an object data type
// export const deleteUser = (filter) => {
//   return UserSchema.findOneAndDelete(filter);
// };
export const deleteUserByID = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};

const addUser = {
    userName: "Aman123",
    password: "*****",
    name: "Aman",
    roleId: 2,
    email: "email@gmail.com",
    mobile: "9999222333",
    address: "WhiteField",
    city: "Bangalore",
    state: "KA",
    country: "India",
    isActive: 1,
}

const addUserResponse = {
    success: 1,
    data: "",
}

const getUser = {
    userId: 1,
    userName: "Aman123",
    name: "Aman",
    roleId: 2,
    email: "email@gmail.com",
    mobile: "9999222333",
    address: "WhiteField",
    city: "Bangalore",
    state: "KA",
    country: "India",
    isActive: 1,
    createdOn: ""
}

const validateUser = {
    userName: "Aman123",
    password: "*****",
}

const changePassword = {
    userId: 1,
    oldPassword: "*****",
    newPassword: "*****",
}

const getUsers = [{
    userId: 1,
    userName: "Aman10",
    name: "Aman",
    email: "aman@gmail.com",
    mobile: "0000000000",
    address: "address",
    city: "city",
    state: "state",
    country: "country",
    roleId: 2,
    roleName: "User",
    isActive: 1,
    createdOn: "2023-04-27T17:15:03.000Z",
}]

const forgetPassword = {
    name: "",
    userName: "",
    email: "",
    mobile: 0000000000,
    password: "*****"
}

const validateUserNameEmailAndMobile = {
    userName: "",
    email: "",
    mobile: "0000000000",
}


module.exports = { addUser, addUserResponse, getUser, validateUser, changePassword, getUsers, forgetPassword, validateUserNameEmailAndMobile };
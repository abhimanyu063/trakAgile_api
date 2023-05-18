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

module.exports = { addUser, addUserResponse, getUser, validateUser, changePassword };
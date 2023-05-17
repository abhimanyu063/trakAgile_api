const addUser = {
    userName: "Aman123",
    password: "*****",
    name: "Aman",
    isActive: 1,
    email: "email@gmail.com",
    mobile: "+91-9999222333",
    address: "WhiteField",
    city: "Bangalore",
    state: "KA",
    country: "India",
}

const addUserResponse = {
    success: 1,
    data: "",
}

const getUser = {
    userId: 1,
    userName: "Aman123",
    name: "Aman",
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
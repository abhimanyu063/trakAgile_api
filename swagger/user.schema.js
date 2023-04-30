const addUser = {
    userName: "Aman123",
    password: "*****",
    name: "Aman",
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
    isActive: 1
}

const validateUser = {
    userName: "Aman123",
    password: "*****",
}

module.exports = { addUser, addUserResponse, getUser, validateUser };
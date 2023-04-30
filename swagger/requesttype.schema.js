const addRequestType = {
    requestTypeDescription: "",
    isActive: 1,
}

const addRequestTypeResponse = {
    success: 1,
    data: "",
}

const getRequestType = {
    requestTypeId: 1,
    requestTypeDescription: "",
    isActive: 1,
}

const getRequestTypes = [getRequestType]

module.exports = { addRequestType, addRequestTypeResponse, getRequestType, getRequestTypes };
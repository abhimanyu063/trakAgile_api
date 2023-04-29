const addDistrict = {
    districtName: "",
    isActive: 1,
}

const addDistrictResponse = {
    success: 1,
    data: "",
}

const getDistrict = {
    districtId: 1,
    districtName: "",
    isActive: 1,
}

const getDistricts = [getDistrict]

module.exports = { addDistrict, addDistrictResponse, getDistrict, getDistricts };
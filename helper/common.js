const fs = require('fs');

const randomNumber = (min = 1, max = 100000000000000000) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}

const convertImageToByteArray = (filePath) => {
    try {
        const fileData = fs.readFileSync(filePath).toString('hex');
        let result = [];
        for (var i = 0; i < fileData.length; i += 2) {
            result.push('0x' + fileData[i] + '' + fileData[i + 1]);
        }
        return result;
    }
    catch (err) {
        throw err;
    }
}

const createNestedDirectory = (path) => {
    path.split('/').reduce(
        (directories, directory) => {
            directories += `${directory}/`;
            if (!fs.existsSync(directories)) {
                fs.mkdirSync(directories);
            }
            return directories;
        },
        '',
    );
}

const hierarchyTree = (arr, supervisorId = 0) =>
    arr.filter(item => item.supervisorId === supervisorId)
        .map(user => ({
            ...user, childs: hierarchyTree(arr,
                user.userId)
        }));


const allHierarchyUsers = (arr, supervisorId) => {
    arr.filter(item => item.supervisorId === supervisorId)
        .map(user => {
            userIds.push(user.userId);
            allHierarchyUsers(arr, user.userId);
        });
}
let userIds = [];
const hierarchyTreeUsers = (arr, supervisorId = 0) => {
    userIds = [];
    userIds.push(supervisorId);
    allHierarchyUsers(arr, supervisorId);
    return userIds.sort().toString();
}

module.exports = { randomNumber, convertImageToByteArray, createNestedDirectory, hierarchyTree, hierarchyTreeUsers };
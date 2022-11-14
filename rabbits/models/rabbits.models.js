// rabbits.models.js
const db = require('../../db/db')

// import db from "../../db/db";

function getAllItems() {
    try {
        return db
    } catch (err) {
        console.error("getAllItems error", err)
    }
}

const getItem = id => {
    try {
        return db.filter(item => item.id === id)[0]
    } catch (err) {
        console.error("getItem error", err)
    }
}

const editItem = (id, item) => {
    try {
        const index = db.findIndex(item => item.id === id)
        db[index] = item
        return db[index]
    } catch (err) {
        console.error("editItem error", err)
    }
}

const addItem = item => {
    try {
        db.push(item)
        return db
    } catch (err) {
        console.error("addItem error", err)
    }
}

const deleteItem = id => {
    try {
        const index = db.findIndex(item => item.id === id)
        db.splice(index, 1)
        return db
        return db
    } catch (err) {
        console.error("deleteItem error", err)
    }
}

module.exports = { getAllItems, getItem, editItem, addItem, deleteItem }
import React from "react"
export const convertLineInNumberArr = (text) => text.split(/[^0-9]+/).filter(el => el !== '').map(el => Number(el))

export const isEmpty = obj => Object.keys(obj).length === 0

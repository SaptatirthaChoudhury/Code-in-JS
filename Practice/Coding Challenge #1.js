

function compareBMI(marksBMI, johnsBMI) {
    return marksBMI > johnsBMI
}

function calcBMI(height, mass) {
    const BMI = mass / height ** 2
    return BMI
}

let Mark = calcBMI(1.69, 78)
let John = calcBMI(1, 90)


let higherBMI = compareBMI(Mark, John)

if (higherBMI) {
    console.log(`Mark has higher BMI`);
} else {
    console.log(`John has higher BMI`);

}
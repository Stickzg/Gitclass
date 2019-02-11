let fruits = [];

const gyomulcsSzallitmany = (fruitArray) => {
    for (i=0; i < fruitArray.length; i++) {
        fruits.push(fruitArray[i]);
    }
}

gyomulcsSzallitmany(['alma', 'körte']);

const printFruitList = () => {
    console.log(fruits);
}

printFruitList();
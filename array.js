let arr = [];
arr[0] = 23;
arr[2] = 55;
arr[100] = 100

let arrs1 = [4, 6, 90, 3, 65];
arrs1.splice(3, 1, 18, 19)
console.log(arrs1);

let obj = {
    1: "samir",
    2: "arpa",
    3: "Anu",
    4: "Anamika"
}

//console.log(Object.values(obj));

const arrr = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];

let arr3 = arrr.findIndex(i => {
    return i.id == 'c'
})
console.log(arr3);
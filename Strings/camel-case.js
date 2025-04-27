function camelcase(s) {
    const arr = s.split(/(?=[A-Z])/);
    return arr.length;
}
console.log(camelcase('saveChangesInTheEditor'));
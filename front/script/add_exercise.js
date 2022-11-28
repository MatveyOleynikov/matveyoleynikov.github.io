// const {fetch} = require("fetch")
// const url = 'http://localhost:4000/api/exercises' //нот фоунд (надо добавить в app)

const check_infa = async (obj) => {
    if (obj.id[obj.id.length - 1] != 'c'){
        //alert(obj.id);
        obj.id += 'c';
        //alert(obj.id);
        //alert(obj.id[obj.id.length - 1])
        console.log('infa ')
        obj.style.backgroundColor = 'darkblue';
        obj.style.border = '2px solid white';
    }   else{
        obj.id = obj.id.slice(0, -1);
        obj.style.backgroundColor = 'lightskyblue';
        obj.style.border = '0px solid white';
    }
}
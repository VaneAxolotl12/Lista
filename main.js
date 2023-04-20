nombre_amigo_array=[];


function submit()
{
    var nombre_1 = document.getElementById("names_of_people_1").value;
    var nombre_2 = document.getElementById("names_of_people_2").value;
    var nombre_3 = document.getElementById("names_of_people_3").value;
    var nombre_4 = document.getElementById("names_of_people_4").value;


    names_of_people_array.push(nombre_1);
    names_of_people_array.push(nombre_2);
    names_of_people_array.push(nombre_3);
    names_of_people_array.push(nombre_4);


    console.log(nombre_amigo_array);


    document.getElementById("ver_nombre").innerHTML=names_of_people_array;
    document.getElementById("boton_enviar").style.display="none";
    document.getElementById("boton_ordenar").style.display="inline-block";
}


function names_of_people sorting();{
    names_of_people.sort();
    console.log(names_of_people_array);
    document.getElementById("ver_nombre").innerHTML=names_of_people_array;
}

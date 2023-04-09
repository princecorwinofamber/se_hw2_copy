let world_map_file = document.getElementById("world_map");
world_map_file.addEventListener("change", function(event) {
    // Когда происходит изменение элементов управления, значит появились новые файлы
    world_map = world_map_file.files[0].name;
}, false);

let bug_brain_1_file = document.getElementById("bug_brain_1");
bug_brain_1_file.addEventListener("change", function(event) {
    // Когда происходит изменение элементов управления, значит появились новые файлы
    bug_brain_1 = bug_brain_1_file.files[0].name;
    console.log(bug_brain_1_file.files[0]);
}, false);


let bug_brain_2_file = document.getElementById("bug_brain_2");
bug_brain_2_file.addEventListener("change", function(event) {
    // Когда происходит изменение элементов управления, значит появились новые файлы
    bug_brain_2 = bug_brain_2_file.files[0].name;
}, false);


let number_of_iter_file = document.getElementById("number_of_iter");
number_of_iter_file.addEventListener("change", function(event) {
    // Когда происходит изменение элементов управления, значит появились новые файлы
    number_of_iter = number_of_iter_file.value;
}, false);


let logging_bool_file = document.getElementById("logging_bool").valueOf();
logging_bool_file.addEventListener("change", function(event) {
    // Когда происходит изменение элементов управления, значит появились новые файлы
    logging_bool = logging_bool_file.value;
}, false);

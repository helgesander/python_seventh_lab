var groupmates = [
    {
        "name": "Никита",
        "surname": "Минеев",
        "group": "BIB2102",
        "marks": [4, 4, 4]
    },
    {
        "name": "Данил",
        "surname": "Сарачев",
        "group": "BIB2102",
        "marks": [4, 5, 4]
    },
    {
        "name": "Ульяна",
        "surname": "Филиппова",
        "group": "BIB2102",
        "marks": [5, 5, 4]
    },
    {
        "name": "Кирилл",
        "surname": "Скороходов",
        "group": "BIB2102",
        "marks": [3, 5, 5]
    },
    {
        "name": "Дмитрий",
        "surname": "Вахтин",
        "group": "BIB2102",
        "marks": [3, 3, 3]
    },
];

console.log(groupmates);

var rpad = function(str, length) {
	// js не поддерживает добавление нужного количества символов
	// справа от строки, т.е. аналога ljust из Python здесь нет 
	str = str.toString(); // преобразование в строку
	while (str.length < length)
		str = str + ' '; // добавление пробела в конец строки return str; // когда все пробелы добавлены, возвратить строку
};

var printStudents = function(students){ 
	console.log(
		rpad("Имя", 15),
		rpad("Фамилия", 15),
		rpad("Группа", 8),
		rpad("Оценки", 20)
	);
	// был выведен заголовок таблицы
	for (var i = 0; i<=students.length-1; i++){
	// в цикле выводится каждый экземпляр студента 
		console.log(
			rpad(students[i]['name'], 15),
			rpad(students[i]['surname'], 15),
			rpad(students[i]['group'], 8),
			rpad(students[i]['marks'], 20)
		);
	}
	console.log('\n'); // добавляется пустая строка в конце вывода
};


var filtration_group = function(students, input) {
	var lst = [];
	for (var i = 0; i < students.length; i++) {
		if (students[i]["group"] == input) lst.push(students[i]);
	}
	return lst;
}

var filtration_marks = function(students, input) {
	var lst = [];
	for (var i = 0; i < students.length; i++) {
		if (students[i]["marks"][0] + students[i]["marks"][1] + students[i]["marks"][2] / 3 > input) 
			lst.push(students[i])
	}
	return lst;
}
var input_group = prompt(), input_mark = prompt();
var filter_group = filtration_group(groupmates, input_group);
var filter_marks = filtration_marks(groupmates, input_mark); 
printStudents(filter_group);
printStudents(filter_marks);


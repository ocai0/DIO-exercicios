/*Proto e Prototype*/

/* Prototype => é um objeto especial com atributos compartilhados entre todos que herdam do objecto Pai.
 -> Uma modificação no componente pai faz todas as referências dos que herdam sejam atualizadas (é como se fosse um ponteiro).
 -> Se um atributo não existir, ele verá se existe algo definido nos atributos do Prototype */
//__proto__ => referncia ao Prototype Pai usado no construtor, que aponta para o construtor e o __proto__ dele

function Student() {
    this.name = 'John';
    this.gender = 'M';
    this.age = 0;
}

Student.prototype.callAge = (_obj) => {
    return _obj.age;
};

var studObj1 = new Student();
console.log(Student.prototype.callAge(studObj1)); // 15
studObj1.age = 10;
// console.log(studObj1.callAge(studObj1));

Student.prototype.age = 17;
var studObj2 = new Student();
// console.log(studObj2.age); // 17

//Dá pra verificar de quem o objeto herdo com instanceof
//para invocar o construtor do objeto que está herdando com [Nome-do-pai].super([Opt-param]);

function mathStudent() {
    //Faz com que o this de Student seja o novo objeto que está sendo criado
    Student.call(this);
    this.mathGrade = 1;
    this.lessons = ['sum', 'subtract', 'multiply', 'divide'];

    //Para alterar a forma como um atributo é manipulado no código
    Object.defineProperty(this, 'name', {
        // manipula a forma como 'this.name' é tratado
        get: function() {
            if(!this.allow) return "You can´t see the value directly, please use mathStudent.getName()";
            else return this.name;
        },
        // manipula a forma como 'this.name = [*]'  é tratado
        set: function(newValue) {
            this.setName(newValue);
            return ".setName was internally called";
        }
    });

    this.getName = function() {
        return this.name;
    }

}

//Para que mathStudent herde as customizações de Student.prototype
mathStudent.prototype = Object.create(Student);
//Static Method
personalbar.hi = function() {
    return "greetings";
}

const a = new mathStudent();
console.log(a.getName());





{
    class Animal{
        constructor(name,type, gender){
            this.name = name;
            this.type = type;
            this.gender = gender
        }
    
        static checkAge(age){
            if(age > 20){ 
            throw new Error('Sorry, you have critical age');
            }else{
                return 'You are good!';
            }
        }
    }
    
        class Dog extends Animal{
            constructor(name, type,gender){
                super(name, type,gender);
            }
            display(){
                console.log(this.name,this.type,this.gender)
            }
        }
    
            class Cat extends Animal{
            constructor(name, type,gender){
                super(name, type,gender);
            }
        }
    
            class Parrot extends Animal{
            constructor(name,type,gender){
                super(type,gender);
            }
        }
    
        let bobby = new Dog('Bobby', 'DOG', 'MAN');
        bobby.display();
        console.log(Animal.checkAge(30));
    
    
    }
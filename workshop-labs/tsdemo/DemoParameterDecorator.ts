function showInfo(target: any, propertyKey: string, parameterIndex: number) {
    console.log(parameterIndex + " " + propertyKey);
  }
  
  class Teacher {
    lecture(a: string, b: number, @showInfo c: boolean) {
      console.log(b);
    }
  }
  
  new Teacher().lecture('hello', 3, false); 
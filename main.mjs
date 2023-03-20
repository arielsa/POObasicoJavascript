function videoPlay(id){///////////////////////defino el metodo y se lo agrego a la clase video
  const urlSecreta="https://platziultrasecretomasquelanasa.com/"+id;
  console.log("Se está reproduciendo desde la url "+urlSecreta);
}

function videoStop(id){
  const urlSecreta="https://platziultrasecretomasquelanasa.com/"+id;
  console.log("Pausamos la url "+urlSecreta);
}

////////////////////// defino una clase exportable

export class PlatziClass{
  constructor({
    name,
    videoID,
  })
  {
    this.name=name;
    this.videoID=videoID;
  }
  reproducir(){videoPlay(this.videoID);}////// exporto la funcion como metodo

  pausar(){videoStop(this.videoID);}
}

/////////////////////////////////////////class course
class Course{
  constructor({
    name,
    classes=[],
  })
  {
    this._name=name;
    this.classes=classes;
  }
  get name(){return this._name;}

  set name(nuevoNombrecito)
  {
    if(nuevoNombrecito==="Curso Malito de Programación Básica")
    {
      console.error("Web... no");
    }else
    {
      this._name=nuevoNombrecito;
    }
  }
}

///////////////////////////////// instancio distintos course

const cursoProgBasica=new Course(
  {
    name:"Curso Gratis de Programación Básica",
  }
);

const cursoDefinitivoHTML=new Course({name:"Curso Definitivo de HTML y CSS",});

const cursoPracticoHTML=new Course({name:"Curso Practico de HTML y CSS",});

///////////////////////// class learningPath, ruta de aprendizaje:

class LearningPath{
  constructor(
    {
      name,
      courses=[],
    })
    {
      this.name=name;
      this.courses=courses;
    }
}

/////////////////////////// definio instancias de learningPath:

const escuelaWeb=new LearningPath(
  {
    name:"Escuela de Desarrollo Web",
    courses:[
      cursoProgBasica,
      cursoDefinitivoHTML,
      cursoPracticoHTML,
    ],
  }
);

const escuelaData=new LearningPath({
  name:"Escuela de Data Science",
  courses:[cursoProgBasica,"Curso DataBusiness","Curso Dataviz",],
});

const escuelaVgs=new LearningPath({
  name:"Escuela de Vidweojuegos",
  courses:[cursoProgBasica,"Curso de Unity","Curso de Unreal",],
})

//////////////////////////////// class student

class Student{
  constructor({
    name,
    email,
    username,
    twitter=undefined,
    instagram=undefined,
    facebook=undefined,
    approvedCourses=[],
    learningPaths=[],
  })
  {
    this.name=name;
    this.email=email;
    this.username=username;
    this.socialMedia={twitter,instagram,facebook,};
    this.approvedCourses=approvedCourses;
    this.learningPaths=learningPaths;
  }
}

////////////////////////////////instancio distintos students

  const juan2=new Student({
    name:"JuanDC",
    username:"juandc",
    email:"juanito@juanito.com",
    twitter:"fjuandc",
    learningPaths:[escuelaWeb,escuelaVgs,],
});

const miguelito2=new Student({
  name:"Miguelito",
  username:"migelitofeliz",
  email:"miguelito@juanito.com",
  instagram:"migelito_feliz",
  learningPaths:[escuelaWeb,escuelaData,],
});
function videoPlay(id){///////////////////////defino el metodo y se lo agrego a la clase video
  const urlSecreta="https://platziultrasecretomasquelanasa.com/"+id;
  console.log("Se está reproduciendo desde la url "+urlSecreta);
}

function videoStop(id){
  const urlSecreta="https://platziultrasecretomasquelanasa.com/"+id;
  console.log("Pausamos la url "+urlSecreta);
}

////////////////////// defino una clase exportable/ le sacamos el export para trabajar sin modulos

/*export*/ class PlatziClass{
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
    isFree = false,
    lang = 'ES',
  })
  {
    this._name=name;
    this.classes=classes;
    this.isFree=isFree;
    this.lang=lang;
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
    isFree:true,
    lang:'ES',
  }
);

const cursoDefinitivoHTML=new Course(
  {
    name:"Curso Definitivo de HTML y CSS",
    isFree:false,
    lang:'EN'
  });

const cursoPracticoHTML=new Course(
  {name:"Curso Practico de HTML y CSS",
  isFree:false,
  lang:'ES',
});

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

//////////////////////////////// super class student

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

/////////////class extends:

class freeStudent extends Student{

  constructor(props){
    super(props);/////////////// super hace referencia a la super clase y con props le enviamos los parametros de la super clase al constructor de la subclase
  }

  approvedCourses(nuevoCourse){
    if (!nuevoCourse.isFree){
      this.approvedCourses.push(nuevoCourse);
    }else{
      console.warn('no disponible');
    }
  }

}

class basicStudent extends Student{
  constructor(props){
    super(props);
  }
  approvedCourses(nuevoCourse){
    if (nuevoCourse.lang !== 'EN'){
      this.approvedCourses.push(nuevoCourse);
    }else{
      console.warn('no disponibles cursos en ingles');
    }
  }
}

class expertStudent extends Student{
  constructor(props){
    super(props);
  }
  approvedCourses(nuevoCourse){
    if (nuevoCourse){
      this.approvedCourses.push(nuevoCourse);
    }else{
      console.warn('erorr');
    }
  }
}

////////////////////////////////instancio distintos students

  const juan2=new freeStudent({
    name:"JuanDC",
    username:"juandc",
    email:"juanito@juanito.com",
    twitter:"fjuandc",
    learningPaths:[escuelaWeb,escuelaVgs,],
});

const miguelito2=new basicStudent({
  name:"Miguelito",
  username:"migelitofeliz",
  email:"miguelito@juanito.com",
  instagram:"migelito_feliz",
  learningPaths:[escuelaWeb,escuelaData,],
});
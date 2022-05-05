
//=================================================================
// Más info en: https://www.freecodecamp.org/news/learn-crud-operations-in-javascript-by-building-todo-app/
//=================================================================

// Apuntamos todos los selectores 
let form = document.getElementById("form");
let input = document.getElementById("input");
let posts = document.getElementById("posts");
// Escuchar el submit para el formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("el boton ha sido clickeado");
  formValidation();
});
//Validaciones
let formValidation = () => {   
  if (input.value === "") {    
    // || /\s/.test(input.value)
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
    
    Toast.fire({
      icon: 'error',
      title: 'No puede estar vacío'
    })   
    console.log("No puede estar vacío");
  }
 
  else {    
    console.log("Se posteo con éxito");
    acceptData();
  }
};

//Almacenamiento de datos en un objeto
let data = {};

let acceptData = () => {  
    data["text"] = input.value;  
    //let value =   Object.values(data);
    console.log(data);         
    createPost();
};
//Creación del Post
let createPost = () => {
  posts.innerHTML += `
    <div class="container-text">
        <p class="text">${data.text}</p>
            <span class="icons">
                <i onclick="editPost(this)" class="fas fa-edit"></i>
                <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
    </div>
    `;
  input.value = "";
};
//Eliminar Post

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}
//Editar Post
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};
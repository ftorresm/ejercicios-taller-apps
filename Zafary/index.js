const boton =window.document.querySelector('#boton');
boton.addEventListener('click',mostrarDatos);


function mostrarDatos(){
   const usuariomail =window.document.querySelector('#email');
   const userclave=window.document.querySelector('#clave');
    const usuariomail1=usuariomail.value;
    const userclave1=userclave.value;
    usuariomail.focus();
if (usuariomail1 ==='ejemplo@gmail.com' && userclave1 ==='123456'){
 
    console.log(usuariomail.value);
    console.log('iniciando sesion')
}else{
    console.log('Email y/o contraseña incorrecta')
}
usuariomail.value='';
userclave.value='';
}
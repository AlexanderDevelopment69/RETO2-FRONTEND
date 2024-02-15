import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor(private router: Router) {}

  onSubmit(email: HTMLInputElement, password: HTMLInputElement) {
    const userEmail = email.value;
    const userPassword = password.value;

    // Imprimir por consola lo que ingresa el usuario
    console.log('Correo electrónico:', userEmail);
    console.log('Contraseña:', userPassword);

    // Aquí puedes realizar la solicitud HTTP a la API para iniciar sesión usando fetch
    fetch('http://localhost:8080/usuarios/iniciar-sesion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: userEmail, password: userPassword })
    })
      .then(response => {
        if (response.ok) {
          // Si la respuesta es OK, redirigir a la página de inicio

          // Redirigir al navbar después de iniciar sesión exitosamente
          this.router.navigate(['/navbar']);

          // this.router.navigate(['/dashboard']);
        } else {
          // Si hay un error en la respuesta, mostrar un mensaje de error
          alert('Error en inicio de sesión. Por favor, verifica tus credenciales e intenta nuevamente.');
        }
      })
      .catch(error => {
        console.error('Error en la solicitud fetch:', error);
        alert('Error en inicio de sesión. Por favor, intenta nuevamente más tarde.');
      });
  }
}

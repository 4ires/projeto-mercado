import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.scss']
})
export class MercadoComponent {
  Comprar(){
    Swal.fire({
      title: "Você deseja comprar este item?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Adicionar ao carrinho",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Item adicionado ao carrinho!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Item não adicionado.", "", "info");
      }
    });
  }
}

import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  clientes: Cliente[] = [];
  
  constructor(private clienteService: ClienteService) { }
  
  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
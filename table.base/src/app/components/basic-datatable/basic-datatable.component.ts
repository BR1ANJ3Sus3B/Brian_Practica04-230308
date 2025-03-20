import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Agregar esto
import { DataTablesModule } from 'angular-datatables';

interface Usuario {
  nombre: string;
  apellido: string;
  postre: string;
}

@Component({
  selector: 'app-basic-datatable',
  standalone: true,
  imports: [CommonModule, DataTablesModule], // ✅ Importar CommonModule
  templateUrl: './basic-datatable.component.html',
  styleUrls: ['./basic-datatable.component.css']
})
export class BasicDatatableComponent implements OnInit {
  items: Usuario[] = [
    { nombre: 'Ailton', apellido: 'Artiaga Quiroga', postre: 'Nike' },
    { nombre: 'Dulce', apellido: 'Balderas Gomez', postre: 'Adidas' },
    { nombre: 'Daniel De Jesús', apellido: 'Bravo Godinez', postre: 'Zara' },
    { nombre: 'Edgar', apellido: 'Cabrera Velázquez', postre: 'Puma' },
    { nombre: 'Jesús Antonio', apellido: 'Estrada Jiménez', postre: "Levi's" },
    { nombre: 'Osvaldo Abishai', apellido: 'Flores Campos', postre: 'Supreme' },
    { nombre: 'Carlos Isaac', apellido: 'Fosado Escudero', postre: 'H&M' },
    { nombre: 'Lorena Citlalli', apellido: 'Galindo Gonzalez', postre: 'Gucci' },
    { nombre: 'Esther', apellido: 'González Peralta', postre: 'Prada' },
    { nombre: 'Abril', apellido: 'Guzmán Barrera', postre: 'Louis Vuitton' },
    { nombre: 'Tania', apellido: 'Ibarra Salgado', postre: 'Calvin Klein' },
    { nombre: 'Jose Agustin', apellido: 'Jimenez Castillo', postre: 'Under Armour' },
    { nombre: 'Brandon', apellido: 'Leon Cabrera', postre: 'Tommy Hilfiger' },
    { nombre: 'Ana Daniela', apellido: 'López Neri', postre: 'Versace' },
    { nombre: 'Josue Atlai', apellido: 'Martinez Otero', postre: 'Balenciaga' },
    { nombre: 'Uriel Abdallah', apellido: 'Medina Torres', postre: 'Off-White' },
    { nombre: 'Brian Jesus', apellido: 'Mendoza Marquez', postre: 'Champion' },
    { nombre: 'Karen Lizbeth', apellido: 'Negrete Hernández', postre: 'New Balance' },
    { nombre: 'Antonio', apellido: 'Ocpaco Dolores', postre: 'Reebok' },
    { nombre: 'Jonathan Baldemar', apellido: 'Ramírez Reyes', postre: 'Diesel' },
    { nombre: 'Marcos Jesús', apellido: 'Ríos Durán', postre: 'Fila' },
    { nombre: 'Christian Paul', apellido: 'Rodriguez Perez', postre: 'Burberry' },
    { nombre: 'Yáred Amaury', apellido: 'Romero Martínez', postre: 'GAP' },
    { nombre: 'Ángel De Jesús', apellido: 'Rufino Mendoza', postre: 'Abercrombie & Fitch' },
    { nombre: 'Diego Salvador', apellido: 'Tecorralco Martinez', postre: 'Ralph Lauren' },
    { nombre: 'Guadalupe Idai', apellido: 'Vargas Galindo', postre: 'Converse' },
    { nombre: 'Juvenal', apellido: 'Viveros Martinez', postre: 'The North Face' },
    { nombre: 'Zyanya Ahuachtli', apellido: 'Zacatenco Pedroza', postre: 'Guess' }
  ];

  filteredItems: Usuario[] = [...this.items];
  paginatedItems: Usuario[] = [];
  itemsPerPage: number = 10;
  currentPage = 1;
  totalPages = 1;

  ngOnInit() {
    this.updatePagination();
  }

  filterTable() {
    const searchInput = (document.getElementById('searchInput') as HTMLInputElement).value.toLowerCase();
    this.filteredItems = this.items.filter(item =>
      item.nombre.toLowerCase().includes(searchInput) ||
      item.postre.toLowerCase().includes(searchInput) ||
      item.apellido.toLowerCase().includes(searchInput)
    );
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredItems.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedItems = this.filteredItems.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  onItemsPerPageChange(event: any) {
    this.itemsPerPage = Number(event.target.value);
    this.currentPage = 1;
    this.updatePagination();
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Agregar esto
import { DataTablesModule } from 'angular-datatables';

interface Usuario {
  nombre: string;
  apellido: string;
  marca: string;
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
    { nombre: 'Ailton', apellido: 'Artiaga Quiroga', marca: 'Nike' },
    { nombre: 'Dulce', apellido: 'Balderas Gomez', marca: 'Adidas' },
    { nombre: 'Daniel De Jesús', apellido: 'Bravo Godinez', marca: 'Zara' },
    { nombre: 'Edgar', apellido: 'Cabrera Velázquez', marca: 'Puma' },
    { nombre: 'Jesús Antonio', apellido: 'Estrada Jiménez', marca: "Levi's" },
    { nombre: 'Osvaldo Abishai', apellido: 'Flores Campos', marca: 'Supreme' },
    { nombre: 'Carlos Isaac', apellido: 'Fosado Escudero', marca: 'H&M' },
    { nombre: 'Lorena Citlalli', apellido: 'Galindo Gonzalez', marca: 'Gucci' },
    { nombre: 'Esther', apellido: 'González Peralta', marca: 'Prada' },
    { nombre: 'Abril', apellido: 'Guzmán Barrera', marca: 'Louis Vuitton' },
    { nombre: 'Tania', apellido: 'Ibarra Salgado', marca: 'Calvin Klein' },
    { nombre: 'Jose Agustin', apellido: 'Jimenez Castillo', marca: 'Under Armour' },
    { nombre: 'Brandon', apellido: 'Leon Cabrera', marca: 'Tommy Hilfiger' },
    { nombre: 'Ana Daniela', apellido: 'López Neri', marca: 'Versace' },
    { nombre: 'Josue Atlai', apellido: 'Martinez Otero', marca: 'Balenciaga' },
    { nombre: 'Uriel Abdallah', apellido: 'Medina Torres', marca: 'Off-White' },
    { nombre: 'Brian Jesus', apellido: 'Mendoza Marquez', marca: 'Champion' },
    { nombre: 'Karen Lizbeth', apellido: 'Negrete Hernández', marca: 'New Balance' },
    { nombre: 'Antonio', apellido: 'Ocpaco Dolores', marca: 'Reebok' },
    { nombre: 'Jonathan Baldemar', apellido: 'Ramírez Reyes', marca: 'Diesel' },
    { nombre: 'Marcos Jesús', apellido: 'Ríos Durán', marca: 'Fila' },
    { nombre: 'Christian Paul', apellido: 'Rodriguez Perez', marca: 'Burberry' },
    { nombre: 'Yáred Amaury', apellido: 'Romero Martínez', marca: 'GAP' },
    { nombre: 'Ángel De Jesús', apellido: 'Rufino Mendoza', marca: 'Abercrombie & Fitch' },
    { nombre: 'Diego Salvador', apellido: 'Tecorralco Martinez', marca: 'Ralph Lauren' },
    { nombre: 'Guadalupe Idai', apellido: 'Vargas Galindo', marca: 'Converse' },
    { nombre: 'Juvenal', apellido: 'Viveros Martinez', marca: 'The North Face' },
    { nombre: 'Zyanya Ahuachtli', apellido: 'Zacatenco Pedroza', marca: 'Guess' }
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
      item.marca.toLowerCase().includes(searchInput) ||
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

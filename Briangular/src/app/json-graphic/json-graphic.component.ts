import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as ubersData from '../../app/services/ubers.json';

interface Uber {
  START_DATE: string;
  END_DATE: string;
  CATEGORY: string;
  START: string;
  STOP: string;
  MILES: number;
  PURPOSE?: string;
}
@Component({
  selector: 'app-json-graphic',
  template: '<div id="chartdiv" style="width: 100%; height: 500px"></div>'
})
export class JsonGraphicComponent implements OnInit, AfterViewInit, OnDestroy {
  ubers: Uber[] = [];
  itemsPerPage = 5;
  currentPage = 1;
  searchTerm = '';
  sortColumn: keyof Uber = 'MILES';
  sortDirection: 'asc' | 'desc' = 'desc';
  private root!: am5.Root;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.ubers = (ubersData as any).default?.ubers || (ubersData as any).ubers;
    this.sortData();
  }

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredUbers.length / this.itemsPerPage);
  }

  get filteredUbers(): Uber[] {
    return this.ubers.filter(uber =>
      Object.values(uber).some(value =>
        value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  get paginatedUbers(): Uber[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUbers.slice(startIndex, startIndex + this.itemsPerPage);
  }

  sort(column: keyof Uber): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.sortData();
    this.createChart();  // Call createChart after sorting
  }

  private sortData(): void {
    this.ubers.sort((a, b) => {
      const aValue = a[this.sortColumn] ?? '';
      const bValue = b[this.sortColumn] ?? '';

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return this.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return this.sortDirection === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.createChart();  // Re-render the chart for the new page
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.createChart();  // Re-render the chart for the new page
    }
  }

  private createChart(): void {
    if (this.root) {
      this.root.dispose();
    }

    this.root = am5.Root.new(this.elementRef.nativeElement.querySelector("#chartdiv"));

    this.root.setThemes([am5themes_Animated.new(this.root)]);

    let chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: this.root.verticalLayout
    }));

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(this.root, {
      categoryField: "START",
      renderer: am5xy.AxisRendererX.new(this.root, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      renderer: am5xy.AxisRendererY.new(this.root, {})
    }));

    let series = chart.series.push(am5xy.ColumnSeries.new(this.root, {
      name: "Miles Driven",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "MILES",
      categoryXField: "START"
    }));

    // Use the paginated data for the chart
    xAxis.data.setAll(this.paginatedUbers);
    series.data.setAll(this.paginatedUbers);

    series.appear(1000);
    chart.appear(1000, 100);
  }
}
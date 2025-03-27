import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-graphic-population-pyramid',
  template: '<div id="chartdiv" style="width: 100%; height: 500px;"></div>',
  styleUrls: ['./graphic-population-pyramid.component.css']
})
export class GraphicPopulationPyramidComponent implements AfterViewInit, OnDestroy {
  private root!: am5.Root;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.root = am5.Root.new('chartdiv');
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    let chart = this.root.container.children.push(
      am5xy.XYChart.new(this.root, {
        panX: false,
        panY: false,
        wheelX: 'none',
        wheelY: 'none',
        layout: this.root.verticalLayout
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(this.root, {
        min: -20000,
        max: 20000,
        renderer: am5xy.AxisRendererX.new(this.root, { minGridDistance: 50 })
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(this.root, {
        categoryField: 'col4',
        renderer: am5xy.AxisRendererY.new(this.root, { minGridDistance: 10 })
      })
    );

    let seriesMale = chart.series.push(
      am5xy.ColumnSeries.new(this.root, {
        xAxis: xAxis,
        yAxis: yAxis,
        categoryYField: 'col4',
        valueXField: 'col5',
        clustered: false,
        tooltip: am5.Tooltip.new(this.root, { labelText: '{valueX}' })
      })
    );

    let seriesFemale = chart.series.push(
      am5xy.ColumnSeries.new(this.root, {
        xAxis: xAxis,
        yAxis: yAxis,
        categoryYField: 'col4',
        valueXField: 'col6',
        clustered: false,
        tooltip: am5.Tooltip.new(this.root, { labelText: '{valueX}' })
      })
    );

    // Cargar datos
    this.loadData(seriesMale, seriesFemale, yAxis);
  }

  async loadData(seriesMale: any, seriesFemale: any, yAxis: any): Promise<void> {
    try {
      let response = await fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/un_population_age_groups.csv');
      let text = await response.text();
      let data = am5.CSVParser.parse(text, { skipEmpty: true });

      let processedData = data.map((row: any) => {
        let year = new Date(row.col3).getFullYear();
        return {
          col4: row.col4,
          col5: row.col5,
          col6: row.col6 > 0 ? -row.col6 : row.col6
        };
      });

      yAxis.data.setAll(processedData);
      seriesMale.data.setAll(processedData);
      seriesFemale.data.setAll(processedData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
  }
}
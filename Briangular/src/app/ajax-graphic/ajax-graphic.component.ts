import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

interface Session {
  inactivityTime: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  email: string;
}

@Component({
  selector: 'app-ajax-graphic',
  templateUrl: './ajax-graphic.component.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class AjaxGraphicComponent implements OnInit, OnDestroy {
  private root: am5.Root | undefined;
  loading = true;
  error = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private http: HttpClient) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.root = am5.Root.new("chartdiv");
      this.root.setThemes([am5themes_Animated.new(this.root)]);
      this.fetchSessions();
    }
  }

  private fetchSessions() {
    this.loading = true;
    this.error = '';
    
    this.http.get('http://localhost:3000/sessions')
      .subscribe({
        next: (response: any) => {
          console.log('API Response:', response);
          if (response && Array.isArray(response)) {
            this.createChart(response);
          } else if (response && Array.isArray(response.sessions)) {
            this.createChart(response.sessions);
          } else {
            this.error = 'Invalid data format received';
            console.error('Invalid response format:', response);
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('API Error:', error);
          this.error = `Error loading sessions: ${error.message || 'Unknown error'}`;
          this.loading = false;
        }
      });
  }

  private createChart(sessions: Session[]) {
    let chart = this.root!.container.children.push(am5xy.XYChart.new(this.root!, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      paddingLeft: 0,
      layout: this.root!.verticalLayout
    }));

    let colors = chart.get("colors") || am5.ColorSet.new(this.root!, {});

    const data = sessions.map(session => ({
      email: session.email,
      inactivity: session.inactivityTime.hours + (session.inactivityTime.minutes / 60) + (session.inactivityTime.seconds / 3600),
      columnSettings: { fill: colors.next() }
    }));

    let xRenderer = am5xy.AxisRendererX.new(this.root!, {
      minGridDistance: 30,
      minorGridEnabled: true
    });

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(this.root!, {
      categoryField: "email",
      renderer: xRenderer
    }));

    xRenderer.grid.template.setAll({
      location: 1
    });

    xRenderer.labels.template.setAll({
      paddingTop: 20,
      fontSize: 12,
      centerX: am5.p50
    });

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.root!, {
      renderer: am5xy.AxisRendererY.new(this.root!, {
        strokeOpacity: 0.1
      })
    }));

    let series = chart.series.push(am5xy.ColumnSeries.new(this.root!, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "inactivity",
      categoryXField: "email"
    }));

    series.columns.template.setAll({
      tooltipText: "{categoryX}: {valueY.formatNumber('#.00')} hours",
      tooltipY: 0,
      strokeOpacity: 0,
      templateField: "columnSettings"
    });

    series.data.setAll(data);
    series.appear();
    chart.appear(1000, 100);
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }
}


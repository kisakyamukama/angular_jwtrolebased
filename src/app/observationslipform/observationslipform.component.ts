import { Component, OnInit, HostBinding} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observationslip } from '../models/observationslip';

@Component({
  selector: 'app-observationslipform',
  templateUrl: './observationslipform.component.html',
  styleUrls: ['./observationslipform.component.css']
})
export class ObservationslipformComponent implements OnInit {

  @HostBinding('class') classes ='row';

  obsevationslip:Observationslip = {
    Time: '20:30Z',
    Date: '2019-05-14',
    Station: 234,
    stationName: 'test station',
    TotalAmountOfAllClouds: 0,
    TotalAmountOfLowClouds: 0,
    TypeOfLowClouds1: 0,
    OktasOfLowClouds1: 1,
    HeightOfLowClouds1: 0,
    CLCODEOfLowClouds1: '',
    TypeOfLowClouds2: 0,
    OktasOfLowClouds2: 0,
    HeightOfLowClouds2: 0,
    CLCODEOfLowClouds2: '',
    TypeOfLowClouds3: 0,
    OktasOfLowClouds3: 0,
    HeightOfLowClouds3: 0,
    CLCODEOfLowClouds3: '',
    TypeOfMediumClouds1: 0,
    OktasOfMediumClouds1: 0,
    HeightOfMediumClouds1: 0,
    CLCODEOfMediumClouds1: '',
    TypeOfMediumClouds2: 0,
    OktasOfMediumClouds2: 0,
    HeightOfMediumClouds2: 0,
    CLCODEOfMediumClouds2: '',
    TypeOfMediumClouds3: 0,
    OktasOfMediumClouds3: 0,
    HeightOfMediumClouds3: 0,
    CLCODEOfMediumClouds3: '',
    TypeOfHighClouds1: 0,
    OktasOfHighClouds1: 0,
    HeightOfHighClouds1: 0,
    CLCODEOfHighClouds1: '',
    TypeOfHighClouds2: 0,
    OktasOfHighClouds2: 0,
    HeightOfHighClouds2: 0,
    CLCODEOfHighClouds2: '',
    TypeOfHighClouds3: 0,
    OktasOfHighClouds3: 0,
    HeightOfHighClouds3: 0,
    CLCODEOfHighClouds3: '',
    CloudSearchLightReading: 0,
    Rainfall: '',
    Dry_Bulb: '',
    Wet_Bulb: '',
    Max_Read: 0,
    Max_Reset: 0,
    Min_Read: 0,
    Min_Reset: 0,
    Piche_Read: 0,
    Piche_Reset: 0,
    TimeMarksThermo: 0,
    TimeMarksHygro: 0,
    TimeMarksRainRec: 0,
    Present_Weather: '',
    Present_WeatherCode: '',
    Past_Weather: '',
    Visibility: 0,
    Wind_Direction: '',
    Wind_Speed: '',
    Gusting: 0,
    AttdThermo: 0,
    PrAsRead: 0,
    Correction: 0,
    CLP: '',
    MSLPr: 0,
    TimeMarksBarograph: 0,
    TimeMarksAnemograph: 0,
    OtherTMarks: '',
    SoilMoisture: '',
    SoilTemperature: '',
    sunduration: '',
    trend: '',
    windrun: '',
    speciOrMetar: 'metar',
    UnitOfWindSpeed: '',
    IndOrOmissionOfPrecipitation: '',
    TypeOfStation_Present_Past_Weather: '',
    HeightOfLowestCloud: '',
    StandardIsobaricSurface: '',
    GPM: '',
    DurationOfPeriodOfPrecipitation: '',
    GrassMinTemp: '',
    CI_OfPrecipitation: '',
    BE_OfPrecipitation: '',
    IndicatorOfTypeOfIntrumentation: '',
    SignOfPressureChange: '',
    Supp_Info: '',
    VapourPressure: '',
    T_H_Graph: '',
    DeviceType: 'desktop',
    SubmittedBy: '1',
    Remarks: '',
    Approved: 0

  }

constructor(
  private formBuilder: FormBuilder,
  private dataService: DataService,
  private router: Router) { }


  ngOnInit() {
  }

  addObservationslipData(){
  //   this.dataService.createObservationslip(this.obsevationslip)
  //   .subscribe( res =>{
  //     console.log(res);
  //     this.router.navigate(['view-observationslipforms']);
  //   },  err => console.log(err));
  //
  }

}

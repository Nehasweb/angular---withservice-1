import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor() { }

  GetBatches()
  {
    return [
      {"Name":"PPA","Duration":"2Months","Fees":19000},
      {"Name":"LB","Duration":"2.3Months","Fees":18000},
      {"Name":"Paython","Duration":"3Months","Fees":15000},
      {"Name":"Angular","Duration":"4Months","Fees":20000},

    ];
  }
}

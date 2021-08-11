import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){

    const movies=[
      {id:1, name:"movie 1",description:"GÜZEL BİR FİLM",imageUrl:"1.jpg"},
      {id:2, name:"movie 2",description:"MUHTEŞEM BİR FİLM",imageUrl:"2.jpg"},
      {id:3, name:"movie 3",description:"FEVKALADE BİR FİLM",imageUrl:"3.jpg"},
      {id:4, name:"movie 4",description:"MÜKEMMMEL BİR FİLM",imageUrl:"4.jpg"},
      {id:5, name:"movie 5",description:"ON NUMARA BİR FİLM",imageUrl:"5.jpg"},
      {id:6, name:"movie 6",description:"SINIR ÖTESİ BİR FİLM",imageUrl:"6.jpg"},
      {id:7, name:"movie 7",description:"EN İYİ FİLM",imageUrl:"7.jpg"},
      {id:8, name:"movie 8",description:"İDARE EDER BİR FİLM",imageUrl:"8.jpg"},
      {id:9, name:"movie 9",description:"İYİ SAYILIR BİR FİLM",imageUrl:"9.jpg"},
  ];
  return {movies};
  }
  constructor() { }
}

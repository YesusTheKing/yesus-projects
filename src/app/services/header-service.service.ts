import { Injectable } from "@angular/core";

@Injectable()
export class HeaderService{
  headers:Array<[Number,string]> = [
    [1,"Header1"],
    [2,"Header2"],
    [3,"Header3"],
    [4,"Header4"],
    [5,"Header5"],
    [6,"Header6"]
  ]
  constructor()
  {

  }
}

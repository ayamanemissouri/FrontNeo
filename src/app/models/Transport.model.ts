/*
Transport(String type,int num,int v,int c,String pdc,Long prix)
CREATE( n:Transport {Type:"bus", Num:"1", V:30, C:20, PdC:"D", Prix:200000} );a*/
export class Transport {
  id:number;
  type: string;
  num : number;
  vitesse : number;
  capacity : number;
  pdC:string;

  prix:number;
  stations:any;
  utilisateurs:any;
  matricule:any;


  constructor(){}
}

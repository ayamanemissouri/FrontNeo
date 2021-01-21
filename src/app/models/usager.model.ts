export class Usager {

 /* Usager(String nom,LocalDate an,boolean h,String pt,String fct{Etudiant,Salarié,Libéral,Retraité,Fonctionnaire})
CREATE( n:Usager {Nom:"Imad", AN:"16/06/1999", H:"N", PT:"taxi", Fct:"Etudiant"} );
  _id: string;*/
  id:number;
  nom: string;
  // Année de naissance
  an: Date;
  // Handicap
  h: boolean;
  // Préférence transport
  pt: string;
  // Fonction
  fct: string;
  transports:any;


  constructor(){}
}

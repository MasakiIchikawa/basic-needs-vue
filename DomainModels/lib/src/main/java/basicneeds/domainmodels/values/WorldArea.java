package basicneeds.domainmodels.values;

public enum WorldArea{
  AFRICA(1),
  ASIA(2),
  EUROPE(3),
  SOUTHAMERICA(4),
  NORTHAMERICA(5),
  OCEANIA(6);
  
  private int _id;
  private WorldArea(int id){
    this._id = id;
  }
}
package basicneeds.domainmodels.values;

public enum Marriage{
  SINGLE(1),
  MARRIED(2);
  
  private int _id;
  private Marriage(int id){
    this._id = id;
  }
}

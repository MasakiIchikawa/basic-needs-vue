package basicneeds.domainmodels.values;

public enum Gender{
  NONE(0),
  MALE(1),
  FEMALE(2);
  private int _id;
  
  private Gender(int id){
    this._id = id;
  }
}
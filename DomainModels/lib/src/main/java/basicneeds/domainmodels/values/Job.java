package basicneeds.domainmodels.values;

public enum Job{
  EMPLOYEE(1),
  STUDENT(2),
  CIVILSERVANT(3),
  SELFEMPLOYED(4),
  PARTTIMER(5),
  HOUSEMAKER(6),
  GROUPSTAFF(7),
  OTHER(99);

  private int _id;
  private Job(int id){
    this._id = id;
  }
}

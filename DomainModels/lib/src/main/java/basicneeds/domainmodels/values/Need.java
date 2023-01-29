package basicneeds.domainmodels.values;

/**
 * 欲求区分
 * @author masaki.ichikawa
 */
public enum Need {
  SURVIVAL(0),
  LOVE(1),
  POWER(2),
  FREEDOM(3),
  FUN(4);
  
  private int _need;
  
  private Need(int value){
    this._need = value;
  }
  
  public int get(){
    return this._need;
  }
}

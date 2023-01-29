package basicneeds.domainmodels.values;

/**
 * 回答レベル
 * @author masaki.ichikawa
 */
public enum AnswerValue {
  WELL(5),
  LITTLE(4),
  NEITHER(3),
  NOT_LITTLE(2),
  NOT_ALL(1);
  
  private int _value;
  private AnswerValue(int value){
    this._value = value;
  }
  public int get(){
    return this._value;
  }
}

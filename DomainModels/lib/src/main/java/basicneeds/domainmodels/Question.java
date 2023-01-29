package basicneeds.domainmodels;

import basicneeds.domainmodels.values.Locale;
import basicneeds.domainmodels.values.Need;

/**
 * 質問
 * @author masaki.ichikawa
 */
public class Question {
  public int questionId;
  public String content;
  public Locale locale;
  public Need need;
  public boolean reverseFlg = false;
  
  public Question(){
    this.locale = Locale.JP;
  }
}

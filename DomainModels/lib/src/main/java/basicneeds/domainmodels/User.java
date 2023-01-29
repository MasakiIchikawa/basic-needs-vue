package basicneeds.domainmodels;

import basicneeds.domainmodels.values.*;

/**
 * ユーザ
 * @author masaki.ichikawa
 */
public class User {
  public Email email = null;
  public Locale locale = null;
  public UserAttribute attribute = null;
  
  /**
   * 属性情報をすでに保持しているかどうかの判定
   * @return 存在する場合true
   */
  public boolean isExists(){
    return this.attribute != null;
  }
}

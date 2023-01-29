package basicneeds.domainmodels.values;

import org.apache.commons.validator.routines.EmailValidator;

public class Email {
  private String _email;
  
  public Email(String value){
    try{
      if(value == null){
        throw new IllegalArgumentException("メールアドレスを設定してください");
      }
      if(!EmailValidator.getInstance().isValid(value)){
        throw new IllegalArgumentException("正しいEmailのフォーマットではありません");
      }
      this._email = value;
    }catch(IllegalArgumentException e){
      System.out.println(e.getMessage());
    }
  }
  
  @Override
  public String toString(){
    return this._email;
  }
}

package basicneeds.domainmodels.values;

public enum Locale{
  JP("jp"),
  EN("en");
  
  private String _locale;
  private Locale(String value){
    this._locale = value;
  }
}

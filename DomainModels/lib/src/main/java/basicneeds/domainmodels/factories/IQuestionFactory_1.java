package basicneeds.domainmodels.factories;

import java.util.Map;
import basicneeds.domainmodels.values.Locale;

/**
 * 欲求ごとの解説文生成ファクトリー
 * @author masaki.ichikawa
 */
public interface INeedsExplanationFactory {
  public String[] createNeedsExplanationMap(Locale locale);
}

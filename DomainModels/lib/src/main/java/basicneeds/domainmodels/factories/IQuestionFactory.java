package basicneeds.domainmodels.factories;

import java.util.Map;
import basicneeds.domainmodels.Question;
import basicneeds.domainmodels.values.*;

/**
 * 質問票生成ファクトリー
 * @author masaki.ichikawa
 */
public interface IQuestionFactory {
  public Map<Integer,Question> createQuestionMap(Locale locale);
}

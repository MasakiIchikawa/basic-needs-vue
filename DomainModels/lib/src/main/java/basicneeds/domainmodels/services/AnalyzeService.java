package basicneeds.domainmodels.services;

import basicneeds.domainmodels.*;
import basicneeds.domainmodels.values.*;
import basicneeds.domainmodels.factories.*;
import java.util.*;

/**
 *
 * @author masaki.ichikawa
 */
public class AnalyzeService {
  private IQuestionFactory _questionFactory;
  private INeedsExplanationFactory _needsExplanationFactory;
  
  public AnalyzeService(IQuestionFactory questionFactory,INeedsExplanationFactory needsExplanationFactory){
    this._questionFactory = questionFactory;
    this._needsExplanationFactory = needsExplanationFactory;
  }
  
  /**
   * 結果レポート生成
   * @param answerTicket 回答群
   * @return 結果レポート
   */
  public Report analyze(AnswerTicket answerTicket){
		Map<Integer,List<Float>> needValues = new HashMap<>();
    for(Need need: Need.values()){
      needValues.put(need.get(),new ArrayList<Float>());
    }
    Map<Integer,Question> questionMap = this._questionFactory.createQuestionMap(answerTicket.locale);
    
    // 全項目の値を欲求ごとにグルーピング
		for(Answer answer : answerTicket.answers.values()){
			Question question = questionMap.get(answer.questionId);
      Float needValue = null;
			if(question.reverseFlg == true){
				needValue = Float.valueOf(6 - answer.value.get());
      }else{
				needValue = Float.valueOf(answer.value.get());
      }
      
      needValues.get(question.need.get()).add(needValue);
    }
    
    // 各欲求別に中央値を取得してレポートにセット
    Report report = new Report();
    int needValueKey = 0;
		for(List<Float> needValue : needValues.values()){
			Collections.sort(needValue);
			if(needValue.size() %2 == 1){
				int medianKey = (int)(needValue.size()/2 - 0.5);
        report.results[needValueKey] = needValue.get(medianKey);
      }else{
				int medianKey = needValue.size()/2;
				report.results[needValueKey] = (needValue.get(medianKey-1)+needValue.get(medianKey))/2;
      }
      needValueKey++;
    }
    
    report.explanations = this._needsExplanationFactory.createNeedsExplanationMap(answerTicket.locale);
    
    return new Report();
  }
}

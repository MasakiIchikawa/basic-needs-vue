package basicneeds.domainmodels;

import basicneeds.domainmodels.values.*;
import java.util.Map;
import java.util.HashMap;

/**
 * 解答票
 * @author masaki.ichikawa
 */
public class AnswerTicket {
  public Map<Integer,Answer> answers = new HashMap<>();
  public Email email;
  public Locale locale;
  public int answerTicketId;
}

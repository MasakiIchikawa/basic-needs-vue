package basicneeds.domainmodels.repositories;

import basicneeds.domainmodels.User;

/**
 * ユーザリポジトリ
 * @author masaki.ichikawa
 */
public interface IUserRepository {
  public void save(User user);
}

import {SomeEntity} from '../../entity/some_entity';
import {Repositories} from '../../repository/repositories';

export class SomeService {
  private repositories : Repositories;

  constructor(repositories: Repositories) {
    this.repositories = repositories;
  }

  public async doSomething() {
    let entity = new SomeEntity();
    entity.name = 'test some entity name';

    entity = await this.repositories.someEntityRepository().persist(entity);
  }
}

import {SomeEntity} from '../entity/some_entity';
import {Repository} from './repository';

export class Repositories {
  someEntityRepository() : Repository<SomeEntity> {
    return new Repository<SomeEntity>();
  }
}

import {SomeEntity} from '../../entity/some_entity';
import {Repositories} from '../../repository/repositories';
import {Repository} from '../../repository/repository';
import {SomeService} from './some_service';

const someEntityRepoMock: jest.Mocked<Repository<SomeEntity>> = {
  persist: jest.fn().mockImplementation(() => {}),
};

jest.mock('../../repository/repositories', () => {
  return {
    Repositories: jest.fn().mockImplementation(() => {
      return {
        someEntityRepository: () => {
          return someEntityRepoMock;
        },
      };
    }),
  };
});


describe('SomeService Tests', () => {
  let someService: SomeService;
  let repositories: Repositories;

  beforeEach(() => {
    repositories = new Repositories();
    someService = new SomeService(repositories);
  });

  it('should make some call to the repository', () => {
    // When

    // Given
    someService.doSomething();

    // Then
    expect(repositories.someEntityRepository().persist).toHaveBeenCalled();
  });
});

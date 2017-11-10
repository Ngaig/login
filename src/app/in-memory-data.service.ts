import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {id: 0, name: 'Admin', password: 'asdf1234'},
      {id: 1, name: 'user1', password: '1234asdf'}
    ];
    return {users};
  }
}

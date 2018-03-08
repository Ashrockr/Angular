import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let employees = [
      { id: 11, name: 'Mr. Nice', salary:50000 },
      { id: 12, name: 'Narco', salary:50000 },
      { id: 13, name: 'Bombasto', salary:50000 },
      { id: 14, name: 'Celeritas', salary:50000 },
      { id: 15, name: 'Magneta', salary:50000 },
      { id: 16, name: 'RubberMan', salary:50000 },
      { id: 17, name: 'Dynama', salary:50000},
      { id: 18, name: 'Dr IQ', salary:50000 },
      { id: 19, name: 'Magma', salary:50000 },
      { id: 20, name: 'Tornado', salary:50000 }
    ];
    return {employees};
  }
}
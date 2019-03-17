import {Injectable} from '@angular/core';



import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IPerson} from './iperson';


@Injectable()
export class ItemsService {
  private _items: BehaviorSubject<IPerson[]>;
  private dataStore: { entries: IPerson[] };
  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'api/persons';
    this.getDBItems();
    this.dataStore = {entries: []};
    this._items = <BehaviorSubject<IPerson[]>>new BehaviorSubject([]);
  }

  get $items() {
    return this._items.asObservable();
  }

  getDBItems() {

    this.http.get<IPerson[]>(this.baseURL)
      .subscribe(
        data => {
          this.dataStore.entries = data;
          this._items.next(Object.assign({}, this.dataStore).entries);
        }, error => console.log('Could not load DB '));
  }

  create(newItem: IPerson) {

    this.http.post<IPerson>(this.baseURL, newItem)
      .subscribe(
        data => {
          this.dataStore.entries.push(data);
          this._items.next(Object.assign({}, this.dataStore).entries);
        },
        error => console.log('could not create new item'));
  }

  update(person: IPerson) {
    this.http.put<IPerson>(this.baseURL, person).subscribe(
      () => {
        this.dataStore.entries.find(((item, index) => {
          if (item.id === person.id) {
            this.dataStore.entries[index] = person;
            return true;
          }
        }));
        this._items.next(Object.assign({}, this.dataStore).entries);

      },
      err => console.log(err)
    );
  }

  remove(selected: IPerson[]) {
    selected.forEach((item) => {
      const url = `${this.baseURL}/${item.id}`;
      this.http.delete(url).subscribe();
      const index = this.dataStore.entries.indexOf(item);
      this.dataStore.entries.splice(index, 1);
    });
    this._items.next(Object.assign({}, this.dataStore).entries);
  }
}

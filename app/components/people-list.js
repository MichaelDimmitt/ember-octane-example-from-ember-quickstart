import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleList extends Component {
  @action
  showPerson(person) {
    alert(person);
  }
}

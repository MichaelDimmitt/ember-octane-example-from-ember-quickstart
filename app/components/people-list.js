import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PeopleList extends Component {
  @action
  showPerson(person) {
    alert(person);
  }
  @action
  updateLanguage(event) {
    this.language = event.target.value;
  }
  @tracked language = 'en';

  get greeting() {
    switch (this.language) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'es':
        return 'Hola';
    }
  }
}

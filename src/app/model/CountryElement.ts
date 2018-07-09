export class CountryElement {
  country: string;
  year: string;
  area: string;
  sex: string;
  recordtype: string;
  reliability: string;
  sourceyear: string;
  value: string;
  valuefootnotes: string;

  constructor(data?) {

    if (data) {

      this.country = data['Country or Area'];
      this.year = data['Year'];
      this.area = data['Area'];
      this.sex = data['Sex'];
      this.recordtype = data['Record Type'];
      this.reliability = data['Reliability'];
      this.sourceyear = data['Source Year'];
      this.value = data['Value'];
      this.valuefootnotes = data['Value Footnotes'];

    } else {

      this.country = '-1';
      this.year = '-1';
      this.area = '-1';
      this.sex = '-1';
      this.recordtype = '-1';
      this.reliability = '-1';
      this.sourceyear = '-1';
      this.value = '-1';
      this.valuefootnotes = '-1';

    }
  }
}

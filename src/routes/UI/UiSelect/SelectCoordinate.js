import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

class SelectCoordinate extends React.Component {
  provinceData = ['Zhejiang', 'Jiangsu'];

  cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  };

  state = {
    cities: this.cityData[this.provinceData[0]],
    secondCity: this.cityData[this.provinceData[0]][0],
  };

  handleProvinceChange = value => {
    this.setState({
      cities: this.cityData[value],
      secondCity: this.cityData[value][0],
    });
  };

  onSecondCityChange = value => {
    this.setState({
      secondCity: value,
    });
  };

  render() {
    const { cities, secondCity } = this.state;
    const provinceOptions = this.provinceData.map(province => (
      <Option key={province}>{province}</Option>
    ));
    const cityOptions = cities.map(city => <Option key={city}>{city}</Option>);
    return (
      <div>
        <Select
          defaultValue={this.provinceData[0]}
          style={{ width: 90 }}
          onChange={this.handleProvinceChange}
        >
          {provinceOptions}
        </Select>
        <Select value={secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>
          {cityOptions}
        </Select>
      </div>
    );
  }
}
export default SelectCoordinate;

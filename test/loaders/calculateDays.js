import chai from 'chai';
import _ from 'lodash';
import { calculateDays } from 'lib/loaders';
const expect = chai.expect;

describe('#calculateDays', () => {

  it('must calculate days and fill dynamic dates', () => {
    // TODO: Check "third_thursday" > not working!
    const year = 2016;
    const from = [{},{},{},{
      // 'abril',
      'calculated': {
        'first_sunday': 'Día de la locura (primer domingo de abril)',
        'second_saturday': 'Día de la vida (segundo sabado de abril)',
        'third_saturday': 'Día de la magía misma (tercer sabado de abril)'
      },
      '3': 'Día epico magico',
      '7': 'Día mundial de la fantasia',
      '16': [
        'Día A',
        'Día B'
      ]
    }];

    const expected = [{},{},{},{
      '3': [
        'Día epico magico',
        'Día de la locura (primer domingo de abril)'
      ],
      '7': 'Día mundial de la fantasia',
      '9': 'Día de la vida (segundo sabado de abril)',
      '16': [
        'Día A',
        'Día B',
        'Día de la magía misma (tercer sabado de abril)'
      ]
    }];

    let result = calculateDays(from, year);
    expect(result.length).to.be.equal(expected.length);
    expect(_.isEqual(result, expected)).to.be.true;
  });
});

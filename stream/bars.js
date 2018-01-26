const normal = '▒';
const crazy = '▇';

export default (valuefn = ary => ary.length, threshold = 100, tick = true, yellowbox = false, label = '', thresholdMessage = '') => events =>
  events.do((infoAry) => {
    const len = valuefn(infoAry);

    const message = () => {
      const repeatTimes = Math.floor(Math.log(Math.max(len, 1)));

      return (len <= threshold ? crazy : normal).repeat(repeatTimes);
    };

    if (yellowbox && len >= threshold) {
      console.warn(`RN bridge: ${thresholdMessage}, event rate over threshold (${threshold}): ${len}`); // eslint-disable-line no-console
    }

    if (tick) {
      console.log(
        `tick ${label}`,
        `${(len >= threshold ? crazy : normal).repeat(Math.floor(Math.log(Math.max(len, 1))))
        }(${len})`,
      ); // eslint-disable-line no-console
    }
  });

import moment from 'moment';

function isCarYearValid(carYear) {
  const currentYear =  moment().format('YYYY');
  return +carYear <= +currentYear;
};

export default isCarYearValid;
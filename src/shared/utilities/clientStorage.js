import cookie from 'react-cookies';
import moment from 'moment';

const defaultOptions = {
  path: '/',
  expires: moment()
    .add(14, 'd')
    .toDate(),
  maxAge: 1000,
  domain: 'https://melika.com',
  secure: true,
  httpOnly: true,
};

const validateOptions = (options = defaultOptions) => {
  if (options === defaultOptions) return defaultOptions;

  let properOptions;

  for (const key in options) {
    if (options.hasOwnProperty(key)) {
      properOptions[key] = options[key] || defaultOptions[key];
    }
  }

  return properOptions;
};

const load = (name, { doNotParse } = { doNotParse: false }) => {
  return cookie.load(name, doNotParse);
};

const save = (name, value, options = defaultOptions) => {
  const validatedOptions = validateOptions(options);

  cookie.save(name, value, validatedOptions);
};

const remove = (name, path = defaultOptions.path) => {
  cookie.remove(name, { path });
};

export default {
  load,
  save,
  remove,
};

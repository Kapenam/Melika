import cookie from 'react-cookies';
import ClientStorage from '../clientStorage';

describe('ClientStorage', () => {
  it('stores value in underlying storage platform successfully', () => {
    const testValue = 'foobar';
    ClientStorage.save('test', testValue);

    const expected = cookie.load('test');
    expect(expected).toEqual(testValue);
    cookie.remove('test');
  });

  it('remove the cookie in underlying storage platform successfully', () => {
    const testValue = 'foobar';
    ClientStorage.save('test', testValue);

    ClientStorage.remove('test');

    const expected = cookie.load('test');
    expect(expected).toBeFalsy();
  });

  it('loads a cookie in underlying storage platform successfully', () => {
    const testValue = 'foobar';
    ClientStorage.save('test', testValue);

    const expected = ClientStorage.load('test');
    expect(expected).toEqual(testValue);

    ClientStorage.remove('test');
  });
});

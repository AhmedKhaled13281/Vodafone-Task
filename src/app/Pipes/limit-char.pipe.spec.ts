import { LimitCharPipe } from './limit-char.pipe';

describe('LimitCharPipe', () => {
  it('create an instance', () => {
    const pipe = new LimitCharPipe();
    expect(pipe).toBeTruthy();
  });
});

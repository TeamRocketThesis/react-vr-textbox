import 'react-native';
import 'react-vr';
import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from '../src/textInput.js';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const tree = renderer.create(<TextInput rows={2} cols={10} />);
});

describe('handleAllLetters', () => {
  it('should add one letter to output string', () => {});
  it('should add multiple letters correctly', () => {});
  it('should add symbols correctly', () => {});
  it('should add character at correct cursor position', () => {});
});
describe('handleDelete', () => {
  it('should delete characters when cursor is at last position', () => {});
  it('should delete characters when the cursor is located somewhere in the string', () => {});
});
describe('handleShift', () => {
  it('should on first press return an all upper case keyboard', () => {});
  it('should on re-press give you an all lower case keyboard', () => {});
  it('should not fire when pressed when keyboard is showing symbols', () => {});
});
describe('handleBack', () => {
  it('should on one press move the cursor one position back', () => {});
  it('should not move the cursor past position 0', () => {});
});
describe('handleForward', () => {
  it('should on one press move the cursor one position forward', () => {});
  it('should not move the cursor beyond the last position', () => {});
});
describe('handleDown', () => {
  it('should shows you the correct displayed text', () => {});
});
describe('handleUp', () => {
  it('should shows you the correct displayed text', () => {});
});
describe('paginate', () => {
  it('should return the right array when text < display area', () => {});
  it('should return right array when text > display area', () => {});
});
describe('client', () => {
  it('should generate the specified height and width for the textbox', () => {});
  it('should fall back to defaults if no specified height or width for the textbox', () => {});
  it('should show keyboard only when the textbox is selected', () => {});
  it('should call the submithandler callback after the text is submitted', () => {});
  it('should only show column items in the text box if there is no cursor on the line', () => {});
  it('should have the number of characters equal to the columns if cursor is not present', () => {});
});

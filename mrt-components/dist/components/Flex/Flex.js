"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Flex = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tlabel: ", ";\n\n\tdisplay: ", ";\n\tflex-direction: ", ";\n\tjustify-content: ", ";\n\talign-items: ", ";\n\n\tposition: ", ";\n\ttop: ", ";\n\tright: ", ";\n\tbottom: ", ";\n\tleft: ", ";\n\n\tflex-wrap: ", ";\n\tflex-grow: ", ";\n\n\twidth: ", ";\n\tmax-width: ", ";\n\tmin-width: ", ";\n\theight: ", ";\n\tmax-height: ", ";\n\tmin-height: ", ";\n\n\toverflow: ", ";\n\toverflow-y: ", ";\n\toverflow-x: ", ";\n\n\tpadding: ", ";\n\tpadding-top: ", ";\n\tpadding-right: ", ";\n\tpadding-bottom: ", ";\n\tpadding-left: ", ";\n\n\tmargin: ", ";\n\tmargin-top: ", ";\n\tmargin-right: ", ";\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\n\tborder: ", ";\n\tborder-top: ", ";\n\tborder-right: ", ";\n\tborder-bottom: ", ";\n\tborder-left: ", ";\n\n\tborder-radius: ", ";\n\tbackground: ", ";\n\tbox-shadow: ", ";\n\tcursor: ", ";\n\tgap: ", ";\n"])), _ref => {
  let {
    label
  } = _ref;
  return label;
}, _ref2 => {
  let {
    display = 'flex'
  } = _ref2;
  return display;
}, _ref3 => {
  let {
    column,
    direction
  } = _ref3;
  return column ? "column" : direction;
}, _ref4 => {
  let {
    justify
  } = _ref4;
  return justify;
}, _ref5 => {
  let {
    align
  } = _ref5;
  return align;
}, _ref6 => {
  let {
    position
  } = _ref6;
  return position;
}, _ref7 => {
  let {
    top
  } = _ref7;
  return top;
}, _ref8 => {
  let {
    right
  } = _ref8;
  return right;
}, _ref9 => {
  let {
    bottom
  } = _ref9;
  return bottom;
}, _ref10 => {
  let {
    left
  } = _ref10;
  return left;
}, _ref11 => {
  let {
    flexWrap
  } = _ref11;
  return flexWrap;
}, _ref12 => {
  let {
    flexGrow
  } = _ref12;
  return flexGrow;
}, _ref13 => {
  let {
    width
  } = _ref13;
  return width;
}, _ref14 => {
  let {
    maxWidth
  } = _ref14;
  return maxWidth;
}, _ref15 => {
  let {
    minWidth
  } = _ref15;
  return minWidth;
}, _ref16 => {
  let {
    height
  } = _ref16;
  return height;
}, _ref17 => {
  let {
    maxHeight
  } = _ref17;
  return maxHeight;
}, _ref18 => {
  let {
    minHeight
  } = _ref18;
  return minHeight;
}, _ref19 => {
  let {
    overflow
  } = _ref19;
  return overflow;
}, _ref20 => {
  let {
    overflowY
  } = _ref20;
  return overflowY;
}, _ref21 => {
  let {
    overflowX
  } = _ref21;
  return overflowX;
}, _ref22 => {
  let {
    padding
  } = _ref22;
  return padding;
}, _ref23 => {
  let {
    paddingTop
  } = _ref23;
  return paddingTop;
}, _ref24 => {
  let {
    paddingRight
  } = _ref24;
  return paddingRight;
}, _ref25 => {
  let {
    paddingBottom
  } = _ref25;
  return paddingBottom;
}, _ref26 => {
  let {
    paddingLeft
  } = _ref26;
  return paddingLeft;
}, _ref27 => {
  let {
    margin
  } = _ref27;
  return margin;
}, _ref28 => {
  let {
    marginTop
  } = _ref28;
  return marginTop;
}, _ref29 => {
  let {
    marginRight
  } = _ref29;
  return marginRight;
}, _ref30 => {
  let {
    marginBottom
  } = _ref30;
  return marginBottom;
}, _ref31 => {
  let {
    marginLeft
  } = _ref31;
  return marginLeft;
}, _ref32 => {
  let {
    border
  } = _ref32;
  return border;
}, _ref33 => {
  let {
    borderTop
  } = _ref33;
  return borderTop;
}, _ref34 => {
  let {
    borderRight
  } = _ref34;
  return borderRight;
}, _ref35 => {
  let {
    borderBottom
  } = _ref35;
  return borderBottom;
}, _ref36 => {
  let {
    borderLeft
  } = _ref36;
  return borderLeft;
}, _ref37 => {
  let {
    borderRadius
  } = _ref37;
  return borderRadius;
}, _ref38 => {
  let {
    background
  } = _ref38;
  return background;
}, _ref39 => {
  let {
    boxShadow
  } = _ref39;
  return boxShadow;
}, _ref40 => {
  let {
    cursor
  } = _ref40;
  return cursor;
}, _ref41 => {
  let {
    gap
  } = _ref41;
  return gap;
});

Flex.defaultProps = {
  column: false,
  direction: "row",
  justify: "space-between",
  align: "center",
  flexWrap: "nowrap",
  flexGrow: "0",
  padding: "0",
  margin: "0"
};
Flex.propTypes = {
  /** If "column" is passed, flex-direction will be set to column, otherwise it will default to row, an optional direction prop can be used to set other values */
  column: _propTypes.default.bool,

  /** If present flex-direction will be set to value passed in, defaults to row, ignored when column prop is present */
  direction: _propTypes.default.string,

  /** If present it sets the "justify-content" flexbox property--accepts standard flexbox values such as "space-around"; defaults to space-between */
  justify: _propTypes.default.string,

  /** If present it sets the "align-items" flexbox property--accepts standard flexbox values such as "flex-start": defaults to center */
  align: _propTypes.default.string,

  /** If flexWrap is passed, it will set the flex-wrap property to the value passed otherwise it will use the default css value "nowrap" */
  flexWrap: _propTypes.default.string,

  /** If present it sets the flex-grow value of the element; takes string representation of number; defaults to 0 */
  flexGrow: _propTypes.default.string,

  /** If present it sets the width of the element; takes any CSS width value (pixels, percentage, etc.); defaults to auto */
  width: _propTypes.default.string,

  /** If present it sets the max-width of the element; takes any CSS max-width value (pixels, percentage, etc.); defaults to none */
  maxWidth: _propTypes.default.string,

  /** If present it sets the min-width of the element; takes any CSS min-width value (pixels, percentage, etc.); defaults to auto */
  minWidth: _propTypes.default.string,

  /** If present it sets the height of the element; takes any CSS height value (pixels, percentage, etc.); defaults to auto. */
  height: _propTypes.default.string,

  /** If present it sets the max-height of the element; takes any CSS max-height value (pixels, percentage, etc.); defaults to none */
  maxHeight: _propTypes.default.string,

  /** If present it sets the min-height of the element; takes any CSS min-height value (pixels, percentage, etc.); defaults to auto */
  minHeight: _propTypes.default.string,

  /** If present it specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky). */
  position: _propTypes.default.string,

  /** If present it controls what happens to content that is too big to fit into an area; Accepts CSS overflow values (visible, hidden, scroll, auto). */
  overflow: _propTypes.default.string,

  /** If present it specifies what to do with the top/bottom edges of the content.; Accepts CSS overflow values (visible, hidden, scroll, auto). */
  overflowY: _propTypes.default.string,

  /** If present it specifies what to do with the left/right edges of the content.; Accepts CSS overflow values (visible, hidden, scroll, auto). */
  overflowX: _propTypes.default.string,

  /** If present it sets the padding of the element; takes any CSS padding value (pixels, EMs, etc.); defaults to 0 */
  padding: _propTypes.default.string,

  /** If present it sets the margin of the element; takes any CSS margin value (pixels, EMs, etc.); defaults to 0 */
  margin: _propTypes.default.string,

  /** If present it sets the border of the element; takes any CSS border shorthand value (width, style, color); defaults to "medium none currentColor" */
  border: _propTypes.default.string,

  /** If present it sets the border-radius of the element; takes any CSS border-radius value (pixels, EMs, etc.); defaults to 0 */
  borderRadius: _propTypes.default.string,

  /** If present it sets the background of the element; takes any CSS background shorthand value (image, position, size, repeat, origin, etc.); defaults to none */
  background: _propTypes.default.string,

  /** If present it assigns a custom label to the element; defaults to "" */
  label: _propTypes.default.string,

  /** If present it assigns a gap value to the element; no default */
  gap: _propTypes.default.string,

  /** If present it specifies the cursor when the Flex component is hovered; no default */
  cursor: _propTypes.default.string,

  /** If present it specifies the shadow effects around an element's frame.; no default */
  boxShadow: _propTypes.default.string
};
var _default = Flex;
exports.default = _default;
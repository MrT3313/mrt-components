import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Flex = styled.div`
	label: ${({ label }) => label };

	display: ${({ display = 'flex' }) => display };
	flex-direction: ${({ column, direction }) => (column ? "column" : direction)};
	justify-content: ${({ justify }) => justify };
	align-items: ${({ align }) => align };

	position: ${({ position }) => position };
	top: ${({ top }) => top };
	right: ${({ right }) => right };
	bottom: ${({ bottom }) => bottom };
	left: ${({ left }) => left };

	flex-wrap: ${({ flexWrap }) => flexWrap };
	flex-grow: ${({ flexGrow }) => flexGrow };

	width: ${({ width }) => width };
	max-width: ${({ maxWidth }) => maxWidth };
	min-width: ${({ minWidth }) => minWidth };
	height: ${({ height }) => height };
	max-height: ${({ maxHeight }) => maxHeight };
	min-height: ${({ minHeight }) => minHeight };

	overflow: ${({ overflow }) => overflow };
	overflow-y: ${({ overflowY }) => overflowY };
	overflow-x: ${({ overflowX }) => overflowX };

	padding: ${({ padding }) => padding };
	padding-top: ${({ paddingTop }) => paddingTop };
	padding-right: ${({ paddingRight }) => paddingRight };
	padding-bottom: ${({ paddingBottom }) => paddingBottom };
	padding-left: ${({ paddingLeft }) => paddingLeft };

	margin: ${({ margin }) => margin};
	margin-top: ${({ marginTop }) => marginTop};
	margin-right: ${({ marginRight }) => marginRight};
	margin-bottom: ${({ marginBottom }) => marginBottom};
	margin-left: ${({ marginLeft }) => marginLeft};

	border: ${({ border }) => border };
	border-top: ${({ borderTop }) => borderTop };
	border-right: ${({ borderRight }) => borderRight };
	border-bottom: ${({ borderBottom }) => borderBottom };
	border-left: ${({ borderLeft }) => borderLeft };
	border-radius: ${({ borderRadius }) => borderRadius };

	background: ${({ background }) => background };
	box-shadow: ${({ boxShadow }) => boxShadow };
	cursor: ${({ cursor }) => cursor };
	gap: ${({ gap }) => gap };
`;

Flex.defaultProps = {
	column: false,
	direction: "row",
	justify: "space-between",
	align: "center",
	flexWrap: "nowrap",
	flexGrow: "0",
	padding: "0",
	margin: "0",
};

Flex.propTypes = {
	/** If present it assigns a custom label to the element */
	label: PropTypes.string,

	/** If present it assigns the display property of the div. 
	 * 	Defaults to 'flex' but is not hardcoded in the event that a 
	 * 	`display: none` would want to be use for conditional rendering  
	 */
	display: PropTypes.string,
	/** If "column" is passed, flex-direction will be set to column, 
	 * 	otherwise it will default to row, an optional direction prop 
	 *  can be used to set other values 
	 * */
	column: PropTypes.bool,
	/** If present flex-direction will be set to value passed in, defaults to row, ignored when column prop is present */
	direction: PropTypes.string,
	/** If present it sets the "justify-content" flexbox property--accepts standard flexbox values such as "space-around"; defaults to space-between */
	justify: PropTypes.string,
	/** If present it sets the "align-items" flexbox property--accepts standard flexbox values such as "flex-start": defaults to center */
	align: PropTypes.string,

	/** If present it specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky). */
	position: PropTypes.string,
	/** if present the following 4 params specify component relative to its positioned relationship  */
	top: PropTypes.string,
	right: PropTypes.string,
	bottom: PropTypes.string,
	left: PropTypes.string,

	/** If flexWrap is passed, it will set the flex-wrap property to the value passed otherwise it will use the default css value "nowrap" */
	flexWrap: PropTypes.string,
	/** If present it sets the flex-grow value of the element; takes string representation of number; defaults to 0 */
	flexGrow: PropTypes.string,

	/** If present it sets the width of the element; takes any CSS width value (pixels, percentage, etc.); defaults to auto */
	width: PropTypes.string,
	/** If present it sets the max-width of the element; takes any CSS max-width value (pixels, percentage, etc.); defaults to none */
	maxWidth: PropTypes.string,
	/** If present it sets the min-width of the element; takes any CSS min-width value (pixels, percentage, etc.); defaults to auto */
	minWidth: PropTypes.string,
	/** If present it sets the height of the element; takes any CSS height value (pixels, percentage, etc.); defaults to auto. */
	height: PropTypes.string,
	/** If present it sets the max-height of the element; takes any CSS max-height value (pixels, percentage, etc.); defaults to none */
	maxHeight: PropTypes.string,
	/** If present it sets the min-height of the element; takes any CSS min-height value (pixels, percentage, etc.); defaults to auto */
	minHeight: PropTypes.string,

	/** If present it controls what happens to content that is too big to fit into an area; Accepts CSS overflow values (visible, hidden, scroll, auto). */
	overflow: PropTypes.string,
	/** If present it specifies what to do with the top/bottom edges of the content.; Accepts CSS overflow values (visible, hidden, scroll, auto). */
	overflowY: PropTypes.string,
	/** If present it specifies what to do with the left/right edges of the content.; Accepts CSS overflow values (visible, hidden, scroll, auto). */
	overflowX: PropTypes.string,

	/** If present it sets the padding of the element; takes any CSS padding value (pixels, EMs, etc.); defaults to 0 */
	padding: PropTypes.string,
	paddingTop: PropTypes.string,
	paddingRight: PropTypes.string,
	paddingBottom: PropTypes.string,
	paddingLeft: PropTypes.string,

	/** If present it sets the margin of the element; takes any CSS margin value (pixels, EMs, etc.); defaults to 0 */
	margin: PropTypes.string,
	marginTop: PropTypes.string,
	marginRight: PropTypes.string,
	marginBottom: PropTypes.string,
	marginLeft: PropTypes.string,

	/** If present it sets the border of the element; takes any CSS border shorthand value (width, style, color); defaults to "medium none currentColor" */
	border: PropTypes.string,
	borderTop: PropTypes.string,
	borderRight: PropTypes.string,
	borderBottom: PropTypes.string,
	borderLeft: PropTypes.string,
	/** If present it sets the border-radius of the element; takes any CSS border-radius value (pixels, EMs, etc.); defaults to 0 */
	borderRadius: PropTypes.string,

	/** If present it sets the background of the element; takes any CSS background shorthand value (image, position, size, repeat, origin, etc.); defaults to none */
	background: PropTypes.string,
	/** If present it specifies the shadow effects around an element's frame.; no default */
	boxShadow: PropTypes.string,
	/** If present it specifies the cursor when the Flex component is hovered; no default */
	cursor: PropTypes.string,
	/** If present it assigns a gap value to the element; no default */
	gap: PropTypes.string,
};

export default Flex;

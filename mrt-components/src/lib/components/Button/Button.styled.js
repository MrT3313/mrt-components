import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const Button = styled.button`
	label: ${({ label }) => label};

	display: ${({ display }) => display};
	position: ${({ position }) => position};

	text-align: ${({ textAlign }) => textAlign};

	width: ${({ width }) => width };
	max-width: ${({ maxWidth }) => maxWidth };
	min-width: ${({ minWidth }) => minWidth };
	height: ${({ height }) => height };
	max-height: ${({ maxHeight }) => maxHeight };
	min-height: ${({ minHeight }) => minHeight };

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

	color: ${({ color }) => colors[color] || color};
	background: ${({ background }) => background};

	font-size: ${({ size }) => fontSize[size] || size};
	font-weight: ${({ weight }) => weight};
	line-height: ${({ lineHeight }) => lineHeight};
	text-decoration: ${({ decoration }) => decoration};
	cursor: ${({ cursor }) => cursor};
	opacity: ${({ opacity }) => opacity};
	transition-duration: 0.3s;

	&.disabled {
		cursor: not-allowed !important;
		pointer-events: none;
		touch-action: none;
		opacity: 0.5;
	}

	&:hover {
		opacity: 0.8;
		&:disabled {
			opacity: 0.5;
		}
	}

	&.shadow {
		box-shadow: 0 4px 4px -2px rgba(0, 20, 30, 0.2);
	}

	&.b {
		font-weight: bold;
	}
`;

Button.defaultProps = {
	display: "inline-block",
	textAlign: "center",
	width: "auto",
	height: "1.25em",
	decoration: "none",
	cursor: "pointer",
	opacity: "1",
};

Button.propTypes = {
	/** If present it assigns a custom label to the element */
	label: PropTypes.string,

	/** If present it specifies the "display" behavior (the type 
	 * 	of rendering box) of an element.--accepts standard css 
	 * 	values such as "block"; defaults to inline-block 
	 */
	display: PropTypes.string,
	/** If present it specifies the type of positioning method used 
	 * 	for an element (static, relative, fixed, absolute or sticky). 
	 */
	position: PropTypes.string,

	/** If present it specifies the horizontal alignment of text 
	 * 	inside the button; defaults to "center" 
	 */
	textAlign: PropTypes.string,

	/** If present it sets the width of the element; takes any CSS 
	 * 	width value (pixels, percentage, etc.); defaults to "auto"
	 */
	width: PropTypes.string,
	/** If present it sets the max-width of the element; takes any 
	 *  CSS max-width value (pixels, percentage, etc.) 
	 */
	maxWidth: PropTypes.string,
	/** If present it sets the min-width of the element; takes any CSS
	 * 	min-width value (pixels, percentage, etc.) 
	 */
	minWidth: PropTypes.string,
	/** If present it sets the height of the element; takes any CSS 
	 * 	height value (pixels, percentage, etc.). 
	 */
	height: PropTypes.string,
	/** If present it sets the max-height of the element; takes any CSS
	 *  max-height value (pixels, percentage, etc.); defaults to "1.25em" 
	 */
	maxHeight: PropTypes.string,
	/** If present it sets the min-height of the element; takes any CSS
	 *  min-height value (pixels, percentage, etc.) 
	 */
	minHeight: PropTypes.string,

	/** If present it sets the padding of the element; takes any CSS 
	 * 	padding value (pixels, EMs, etc.); defaults to 0 
	 */
	padding: PropTypes.string,
	paddingTop: PropTypes.string,
	paddingRight: PropTypes.string,
	paddingBottom: PropTypes.string,
	paddingLeft: PropTypes.string,

	/** If present it sets the margin of the element; takes any CSS margin
	 *  value (pixels, EMs, etc.); defaults to 0 
	 */
	margin: PropTypes.string,
	marginTop: PropTypes.string,
	marginRight: PropTypes.string,
	marginBottom: PropTypes.string,
	marginLeft: PropTypes.string,

	/** If present it sets the border of the element; takes any CSS border
	 *  shorthand value (width, style, color); defaults to "medium none 
	 *  currentColor" 
	 */
	border: PropTypes.string,
	borderTop: PropTypes.string,
	borderRight: PropTypes.string,
	borderBottom: PropTypes.string,
	borderLeft: PropTypes.string,
	/** If present it sets the border-radius of the element; takes any CSS
	 *  border-radius value (pixels, EMs, etc.)
	 */
	borderRadius: PropTypes.string,

	/** If present it specifies the color of text inside the button */
	color: PropTypes.string,
	/** If present it sets the background of the element; takes any CSS
	 *  background shorthand value (image, position, size, repeat, origin,
	 *  etc.); defaults to none 
	 */
	background: PropTypes.string,

	/** If present it specifies the font-size of text inside the button */
	size: PropTypes.string,
	/** If present it specifies the font-weight of text inside the button */
	weight: PropTypes.string,
	/** If present it sets the height of a line box */
	lineHeight: PropTypes.string,
	/** If present it specifies the decoration added to text.; it is a 
	 * 	short-hand property for text-decoration-line, text-decoration-color, 
	 * 	text-decoration-style--accepts standard CSS values such as 
	 * 	"underline"; defaults to "none" 
	 */
	decoration: PropTypes.string,
	/** If present it specifies the mouse cursor to be displayed when pointing
	 *  over an element; takes any CSS cursor value such as not-allowed; defaults to pointer */
	cursor: PropTypes.string,
	/** If present it specifies the opacity/transparency of an element. --accepts numerical values from 0.0 to 1; defaults to "1" */
	opacity: PropTypes.string,
};

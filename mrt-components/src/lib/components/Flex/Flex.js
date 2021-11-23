import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./Flex.styled";

const Flex = ({
	testId,
	children,
	...props
}) => (
	<Styled.Flex
		data-testid={testId}
		{...props}
	>
		{children}
	</Styled.Flex>
)

Flex.propTypes = {
		/** If present it assigns the testID to the button component.
		 *  Must be all lowercase.
		 */
		testId: PropTypes.string,
		
    /** Child elements of the button **/
    children: PropTypes.any,
    /** Any props that exsist in Button.styled **/
    props: PropTypes.string,
}

export default Flex
import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./Button.styled";

const Button = ({ 
    label, 
    kind = "", className = "", 
    children, 
    ...props }
) => (
    <Styled.Button 
        label={label} 
        className={`${kind} ${className}`} 
        {...props}
    >
        {children}
    </Styled.Button>
);

Button.propTypes = {
    /** If present it assign a custom label to the element */
    label: PropTypes.string,

    /** If present it represents a prebuild class */
    kind: PropTypes.string,
    /** If present it represents a class that is defined in the
     *  end users own style sheet 
     */
    className: PropTypes.string,

    /** Child elements of the button **/
    children: PropTypes.any,

    /** Any props that exsist in Button.styled **/
    props: PropTypes.string,
};

export default Button;

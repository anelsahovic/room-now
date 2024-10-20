import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextAreaInput(
    { className = "", isFocused = false, children, ...props },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <textarea
            {...props}
            className={
                "rounded-md border-gray-300 shadow-sm focus:border-teal-700 focus:ring-teal-700 " +
                className
            }
            ref={localRef}
        >
            {children}
        </textarea>
    );
});

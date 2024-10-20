import { forwardRef, useImperativeHandle, useRef } from "react";

export default forwardRef(function SelectInput(
    { className = "", children, ...props },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    return (
        <select
            {...props}
            className={
                "rounded-md border-gray-300 shadow-sm focus:border-teal-700 focus:ring-teal-700  " +
                className
            }
            ref={localRef}
        >
            {children}
        </select>
    );
});

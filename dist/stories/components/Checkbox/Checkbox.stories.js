import Checkbox from "../../../components/Checkbox";
const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "A customizable checkbox component with a filled background, centered right icon, customizable label color, and customizable border radius.",
            },
        },
    },
    argTypes: {
        isChecked: {
            control: "boolean",
            description: "Controls whether the checkbox is checked by default.",
            defaultValue: false,
        },
        checkedColor: {
            control: "color",
            description: "Background color when the checkbox is checked.",
            defaultValue: "#3056D3",
        },
        iconColor: {
            control: "color",
            description: "Color of the checkmark icon.",
            defaultValue: "#FFFFFF",
        },
        label: {
            control: "text",
            description: "Label text next to the checkbox.",
            defaultValue: "Checkbox Text",
        },
        labelColor: {
            control: "color",
            description: "Color of the label text.",
            defaultValue: "#495057",
        },
        borderRadius: {
            control: "text",
            description: "Border radius of the checkbox, allowing customization from square to fully circular.",
            defaultValue: "0.25rem",
        },
    },
};
export default meta;
export const Default = {};
export const RoundedCheckbox = {
    args: {
        isChecked: true,
        checkedColor: "#FF6347",
        iconColor: "#FFFFFF",
        label: "Rounded Checkbox",
        labelColor: "#FF6347",
        borderRadius: "0.5rem",
    },
};
export const CircularCheckbox = {
    args: {
        isChecked: true,
        checkedColor: "#32CD32",
        iconColor: "#FFFFFF",
        label: "Circular Checkbox",
        labelColor: "#32CD32",
        borderRadius: "50%",
    },
};
export const CircularCheckboxWithoutRightMark = {
    args: {
        isChecked: true,
        checkedColor: "#32CD32",
        iconColor: "#32CD32",
        label: "Circular Checkbox",
        labelColor: "#32CD32",
        borderRadius: "50%",
    },
};
export const CheckboxWithQuantity = {
    args: {
        isChecked: true,
        quantity: 394,
    },
};

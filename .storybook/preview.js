import AppProvider from "~/libs/AppProvider";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" }
};

export const decorators = [
    (Story) => (
        <AppProvider>
            <Story/>
        </AppProvider>
    )
];

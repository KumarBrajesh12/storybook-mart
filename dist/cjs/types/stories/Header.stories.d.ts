import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ user, onLogin, onLogout, onCreateAccount }: import("./Header").HeaderProps) => import("react").JSX.Element;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        onLogin: any;
        onLogout: any;
        onCreateAccount: any;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;

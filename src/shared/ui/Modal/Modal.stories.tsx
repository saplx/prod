// eslint-disable-next-line storybook/no-renderer-packages
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    args: { label: 'Click me' },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, id assumenda! Dolores blanditiis laboriosam quo, nemo iure eius quod distinctio! Temporibus, architecto optio at ullam iste ex tempora, sapiente ipsa fugiat, modi distinctio deleniti! Neque, distinctio ut expedita omnis unde mollitia quisquam nobis dicta sapiente earum suscipit quia cumque esse eligendi soluta nulla sed, necessitatibus, provident repellat accusantium. Eveniet repudiandae ipsa similique maxime sint cumque mollitia placeat rem delectus sunt ex, officiis tempore sed quibusdam, expedita minus nobis inventore suscipit, eaque voluptas enim recusandae nemo perferendis molestiae. Odit blanditiis pariatur, dignissimos, atque nihil incidunt mollitia nisi eaque ullam dolorem iste.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, id assumenda! Dolores blanditiis laboriosam quo, nemo iure eius quod distinctio! Temporibus, architecto optio at ullam iste ex tempora, sapiente ipsa fugiat, modi distinctio deleniti! Neque, distinctio ut expedita omnis unde mollitia quisquam nobis dicta sapiente earum suscipit quia cumque esse eligendi soluta nulla sed, necessitatibus, provident repellat accusantium. Eveniet repudiandae ipsa similique maxime sint cumque mollitia placeat rem delectus sunt ex, officiis tempore sed quibusdam, expedita minus nobis inventore suscipit, eaque voluptas enim recusandae nemo perferendis molestiae. Odit blanditiis pariatur, dignissimos, atque nihil incidunt mollitia nisi eaque ullam dolorem iste.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

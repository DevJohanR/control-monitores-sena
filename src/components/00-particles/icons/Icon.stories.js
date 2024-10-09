// src/00-particles/icons/Icon.stories.js

import React from 'react';
import Icon from './Icon';

export default {
  title: 'Particles/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ['user', 'arrowForward', 'arrowDropdown', 'home'],
      },
    },
    size: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
};

// Plantilla básica para las historias
const Template = (args) => <Icon {...args} />;

// Historia para el ícono de usuario
export const UserIcon = Template.bind({});
UserIcon.args = {
  name: 'user',
  size: '2em',
  className: 'text-blue-500',
};

// Historia para el ícono de la casa
export const HomeIcon = Template.bind({});
HomeIcon.args = {
  name: 'home',
  size: '2em',
  className: 'text-green-500',
};

// Historia para el ícono de flecha hacia adelante
export const ArrowForwardIcon = Template.bind({});
ArrowForwardIcon.args = {
  name: 'arrowForward',
  size: '2em',
  className: 'text-red-500',
};

// Historia para el ícono de flecha desplegable
export const ArrowDropdownIcon = Template.bind({});
ArrowDropdownIcon.args = {
  name: 'arrowDropdown',
  size: '2em',
  className: 'text-yellow-500',
};

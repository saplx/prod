// .storybook/main.ts
import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { buildCssLoader } from '../config/build/loaders/buildCssLoader';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true, // Ensure SWC is enabled
      },
    },
  },
  swc: {
    jsc: {
      transform: {
        react: {
          runtime: 'automatic', // Enable automatic JSX runtime
        },
      },
    },
  },
  webpackFinal: async (baseConfig) => {
    // 1) TS/TSX через Babel
    baseConfig.module ??= { rules: [] };
    baseConfig.module?.rules?.unshift({
      test: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('@babel/preset-env'),
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-typescript'),
          ],
        },
      },
    });

    // 2) Алиасы из tsconfig.json
    baseConfig.resolve ??= {};
    baseConfig.resolve.plugins ??= [];
    baseConfig.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      })
    );

    // 3) SCSS-модули
    baseConfig.module?.rules?.push(buildCssLoader(true));

    return baseConfig;
  },
};

export default config;

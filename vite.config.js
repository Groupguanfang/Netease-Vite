import { defineConfig } from 'vite' // 动态配置函数
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'

/** @type {import('vite').UserConfig} */

export default () =>
	defineConfig({
		base: './',
		plugins: [createVuePlugin()],
		server: {
			open: false, //自动打开浏览器
			port: 3000 //端口号
		},
		resolve: {
            // 别名
			alias: [
				{
					find: '@',
					replacement: '/src'
				}
			]
		}
	})
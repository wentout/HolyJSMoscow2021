import React from 'react';
import MDX from '@mdx-js/runtime';
import mdx from '@mdx-js/mdx';
import Prism from '@theme-ui/prism';

import Chart from './Chart';

import { Progress, Box, Heading } from 'theme-ui';

const Mdx = function () {
	this.data = this.slides.current.data;
};

Mdx.prototype.View = function () {
	
	const me = this;
	
	const {
		data,
		FooterView,
		counters
	} = me;
	
	const jsx = mdx.sync(data);
	
	const app = function (proto) {
		const {key} = proto.slide;
		const split = key.split('.');
		const appData = split.reduce((answer, fieldName) => {
			answer = answer[fieldName];
			return answer;
		}, me);
		return `${appData}`;
	};

	const components = {
		code : Prism,
		Heading,
		Box,
		app,
		Chart,
	};
	
	const scope = {
		jsx,
		app : me
	};
	
	// const MDXContent = Object.assign({}, data, { jsx });
	const MDXContent = data;
	
	return (
		<div className="MDX">
			<Progress min={1} max={counters.count} value={counters.index}></Progress>
			<div className="SlideContent">
				<MDX components={components} scope={scope}>
					{MDXContent}
				</MDX>
			</div>
			<FooterView />
		</div>
	);
};

export default Mdx;
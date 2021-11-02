import React from 'react';
import MDX from '@mdx-js/runtime';
import mdx from '@mdx-js/mdx';
import Prism from '@theme-ui/prism';

import Chart from './Chart';

// import { Box, Heading, Donut, Container, Message, Embed, Link, Badge, Grid, AspectRatio } from 'theme-ui';
import { Box, Heading, Button } from 'theme-ui';

const SlideMDX = function () {
	this.data = this.slides.current.data;
};

SlideMDX.prototype.View = function () {

	const me = this;

	const {
		data,
		ProgressorView,
		FooterView,
		slides: {
			current
		}
	} = me;

	const jsx = mdx.sync(data);

	const app = function (proto) {
		const { key } = proto.slide;
		const split = key.split('.');
		const reducedData = split.reduce((answer, keyName) => {
			answer = answer[keyName];
			return answer;
		}, me);
		return `${reducedData}`;
	};

	const components = {
		code : Prism,
		Heading,
		Box,
		app,
		Chart,
		Button,
	};

	const scope = {
		jsx,
		app        : me,
		timestamps : JSON.stringify(me.collectTimestamps(), null, '\t')
	};

	// const MDXContent = Object.assign({}, data, { jsx });
	const MDXContent = data;

	const classNames = current.contentClassNamesWrapper ? `SlideContent ${current.contentClassNamesWrapper}` : 'SlideContent';

	return (
		<div className="MDX">
			<ProgressorView />
			<div className={classNames}>
				<MDX components={components} scope={scope}>
					{MDXContent}
				</MDX>
			</div>
			<FooterView />
		</div>
	);
};

export default SlideMDX;
import React, { memo } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '@/router';

import WebHeader from '@/components/web-header';
import WebFooter from '@/components/web-footer';
import WebPlayer from '@/pages/player/web-player-bar';

export default memo(function LKMain() {
	return (
		<Router>
			<WebHeader />
			{renderRoutes(routes)}
			<WebFooter />
			<WebPlayer />
		</Router>
	)
})

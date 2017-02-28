import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import { 
	HomeView,
    LandingPageView, 
	LoginView, 
	ProtectedView, 
	NotFoundView, 
	TestView,
	ProductsView,
    SingleProductView,
} from './containers';

import requireAuthentication from './utils/requireAuthentication';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomeView}/>
        <Route path="landing-page" component={LandingPageView} />
        <Route path="login" component={LoginView}/>
        <Route path="protected" component={requireAuthentication(ProtectedView)}/>
        <Route path="test" component={TestView}/>
        <Route path="shop" component={ProductsView}/>
        <Route path="shop/single-product" component={SingleProductView}/>
        <Route path="*" component={NotFoundView}/>

    </Route>
);

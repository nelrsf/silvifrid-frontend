'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">silvifrid-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-54b0a98bf33717fd8eecf560d414261e84474137fc58cfb4920d3851e865fcafd7eab762f52634b168089118fdc6e81aa003df8184575223c661582e7271fbad"' : 'data-target="#xs-components-links-module-AppModule-54b0a98bf33717fd8eecf560d414261e84474137fc58cfb4920d3851e865fcafd7eab762f52634b168089118fdc6e81aa003df8184575223c661582e7271fbad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-54b0a98bf33717fd8eecf560d414261e84474137fc58cfb4920d3851e865fcafd7eab762f52634b168089118fdc6e81aa003df8184575223c661582e7271fbad"' :
                                            'id="xs-components-links-module-AppModule-54b0a98bf33717fd8eecf560d414261e84474137fc58cfb4920d3851e865fcafd7eab762f52634b168089118fdc6e81aa003df8184575223c661582e7271fbad"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-a78f0f495be022712bf86f173ee340f3c3433bfd0c2ba4cdc2c2685f71435dfae18cb76fd029010a055bde54858ea43f0425bece53c08b1b286e73854806e7d1"' : 'data-target="#xs-components-links-module-AuthModule-a78f0f495be022712bf86f173ee340f3c3433bfd0c2ba4cdc2c2685f71435dfae18cb76fd029010a055bde54858ea43f0425bece53c08b1b286e73854806e7d1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-a78f0f495be022712bf86f173ee340f3c3433bfd0c2ba4cdc2c2685f71435dfae18cb76fd029010a055bde54858ea43f0425bece53c08b1b286e73854806e7d1"' :
                                            'id="xs-components-links-module-AuthModule-a78f0f495be022712bf86f173ee340f3c3433bfd0c2ba4cdc2c2685f71435dfae18cb76fd029010a055bde54858ea43f0425bece53c08b1b286e73854806e7d1"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignUpFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignUpFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogModule.html" data-type="entity-link" >BlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogModule-31c504cb3cd745581ca5fa9463459837622e55aba7ceab77723b8f117c7a5c12cc3eaef08546a703b9c80017b0b44768846d915091cbf7f8a37ca65ab60de790"' : 'data-target="#xs-components-links-module-BlogModule-31c504cb3cd745581ca5fa9463459837622e55aba7ceab77723b8f117c7a5c12cc3eaef08546a703b9c80017b0b44768846d915091cbf7f8a37ca65ab60de790"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogModule-31c504cb3cd745581ca5fa9463459837622e55aba7ceab77723b8f117c7a5c12cc3eaef08546a703b9c80017b0b44768846d915091cbf7f8a37ca65ab60de790"' :
                                            'id="xs-components-links-module-BlogModule-31c504cb3cd745581ca5fa9463459837622e55aba7ceab77723b8f117c7a5c12cc3eaef08546a703b9c80017b0b44768846d915091cbf7f8a37ca65ab60de790"' }>
                                            <li class="link">
                                                <a href="components/BlogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-a0a0e0b35802eda850cbc11074f7d127d6bd2b68cbd50518af49660d7278e4d5b9246fa2225ecd38835049e2d115d43b87074e4a87290241387608b4e6360766"' : 'data-target="#xs-components-links-module-LayoutModule-a0a0e0b35802eda850cbc11074f7d127d6bd2b68cbd50518af49660d7278e4d5b9246fa2225ecd38835049e2d115d43b87074e4a87290241387608b4e6360766"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-a0a0e0b35802eda850cbc11074f7d127d6bd2b68cbd50518af49660d7278e4d5b9246fa2225ecd38835049e2d115d43b87074e4a87290241387608b4e6360766"' :
                                            'id="xs-components-links-module-LayoutModule-a0a0e0b35802eda850cbc11074f7d127d6bd2b68cbd50518af49660d7278e4d5b9246fa2225ecd38835049e2d115d43b87074e4a87290241387608b4e6360766"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LegalModule.html" data-type="entity-link" >LegalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LegalModule-177e3699a98223e0d135a8f2174e56c30d3624cd53fae57400e1538a4ecadddf1e26c60b76762c99957024eb2d9f4025d86b5eb7a7d03058fa1c1dd22f1d8e22"' : 'data-target="#xs-components-links-module-LegalModule-177e3699a98223e0d135a8f2174e56c30d3624cd53fae57400e1538a4ecadddf1e26c60b76762c99957024eb2d9f4025d86b5eb7a7d03058fa1c1dd22f1d8e22"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LegalModule-177e3699a98223e0d135a8f2174e56c30d3624cd53fae57400e1538a4ecadddf1e26c60b76762c99957024eb2d9f4025d86b5eb7a7d03058fa1c1dd22f1d8e22"' :
                                            'id="xs-components-links-module-LegalModule-177e3699a98223e0d135a8f2174e56c30d3624cd53fae57400e1538a4ecadddf1e26c60b76762c99957024eb2d9f4025d86b5eb7a7d03058fa1c1dd22f1d8e22"' }>
                                            <li class="link">
                                                <a href="components/CookiesPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CookiesPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CookiesPrivacyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CookiesPrivacyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrivacyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MiscelaneusModule.html" data-type="entity-link" >MiscelaneusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MiscelaneusModule-029c6548d52c33f68f849a9efe2fd8a528e1a2587aa852b9128ad5d73cfe27c21fe7d3284dca2d56992ed323b47b3ecaa9ef2b44ad3d02f840af460c77225bd1"' : 'data-target="#xs-components-links-module-MiscelaneusModule-029c6548d52c33f68f849a9efe2fd8a528e1a2587aa852b9128ad5d73cfe27c21fe7d3284dca2d56992ed323b47b3ecaa9ef2b44ad3d02f840af460c77225bd1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MiscelaneusModule-029c6548d52c33f68f849a9efe2fd8a528e1a2587aa852b9128ad5d73cfe27c21fe7d3284dca2d56992ed323b47b3ecaa9ef2b44ad3d02f840af460c77225bd1"' :
                                            'id="xs-components-links-module-MiscelaneusModule-029c6548d52c33f68f849a9efe2fd8a528e1a2587aa852b9128ad5d73cfe27c21fe7d3284dca2d56992ed323b47b3ecaa9ef2b44ad3d02f840af460c77225bd1"' }>
                                            <li class="link">
                                                <a href="components/AvatarPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarPickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommentsBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentsBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PhoneDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhoneDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PhoneInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhoneInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PicturePickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PicturePickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoRibbonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoRibbonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StoreModule.html" data-type="entity-link" >StoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StoreModule-f5e1cf062a6590633c25e7a44378fc8411e0198d3b13df4efb249716d2a8a4ecda0171f8244a93f0517ef169fe67a29142397f3b4aee06ea0205cbb4635131f0"' : 'data-target="#xs-components-links-module-StoreModule-f5e1cf062a6590633c25e7a44378fc8411e0198d3b13df4efb249716d2a8a4ecda0171f8244a93f0517ef169fe67a29142397f3b4aee06ea0205cbb4635131f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StoreModule-f5e1cf062a6590633c25e7a44378fc8411e0198d3b13df4efb249716d2a8a4ecda0171f8244a93f0517ef169fe67a29142397f3b4aee06ea0205cbb4635131f0"' :
                                            'id="xs-components-links-module-StoreModule-f5e1cf062a6590633c25e7a44378fc8411e0198d3b13df4efb249716d2a8a4ecda0171f8244a93f0517ef169fe67a29142397f3b4aee06ea0205cbb4635131f0"' }>
                                            <li class="link">
                                                <a href="components/ProductCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsRibbonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsRibbonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PurchaseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PurchaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PurchaseContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PurchaseContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StoreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StoreComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-0e27d3f077eaf02df0ce32338fb8739fe41d5649ddd22c1a0d6b60bf7f2900c65645707da0a8dbc032dd2577e21596525b537996fc618bbb8ce5b7f644adbb29"' : 'data-target="#xs-components-links-module-UserModule-0e27d3f077eaf02df0ce32338fb8739fe41d5649ddd22c1a0d6b60bf7f2900c65645707da0a8dbc032dd2577e21596525b537996fc618bbb8ce5b7f644adbb29"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-0e27d3f077eaf02df0ce32338fb8739fe41d5649ddd22c1a0d6b60bf7f2900c65645707da0a8dbc032dd2577e21596525b537996fc618bbb8ce5b7f644adbb29"' :
                                            'id="xs-components-links-module-UserModule-0e27d3f077eaf02df0ce32338fb8739fe41d5649ddd22c1a0d6b60bf7f2900c65645707da0a8dbc032dd2577e21596525b537996fc618bbb8ce5b7f644adbb29"' }>
                                            <li class="link">
                                                <a href="components/ProfileInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Asset.html" data-type="entity-link" >Asset</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertsService.html" data-type="entity-link" >AlertsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetControllerService.html" data-type="entity-link" >AssetControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CookiesSessionService.html" data-type="entity-link" >CookiesSessionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DisplayUserService.html" data-type="entity-link" >DisplayUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductControllerService.html" data-type="entity-link" >ProductControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShippingService.html" data-type="entity-link" >ShippingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserSessionService.html" data-type="entity-link" >UserSessionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Iassets.html" data-type="entity-link" >Iassets</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Iauth.html" data-type="entity-link" >Iauth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/iCity.html" data-type="entity-link" >iCity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICourier.html" data-type="entity-link" >ICourier</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ierror.html" data-type="entity-link" >Ierror</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProduct.html" data-type="entity-link" >IProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Isuccess.html" data-type="entity-link" >Isuccess</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/productQuantity.html" data-type="entity-link" >productQuantity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableData.html" data-type="entity-link" >TableData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
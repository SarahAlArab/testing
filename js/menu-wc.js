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
                    <a href="index.html" data-type="index-link">wfps-web-app documentation</a>
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
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-0a3a657fe74273cce6f4d263e0dbc3d94c9fe4b35dd1530cbd6efdc37161a8d31319bcbd1463d69f6bce5c9f3a486ca025a00ac88ef1d8767672b30f5bf3aa30"' : 'data-bs-target="#xs-components-links-module-AppModule-0a3a657fe74273cce6f4d263e0dbc3d94c9fe4b35dd1530cbd6efdc37161a8d31319bcbd1463d69f6bce5c9f3a486ca025a00ac88ef1d8767672b30f5bf3aa30"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0a3a657fe74273cce6f4d263e0dbc3d94c9fe4b35dd1530cbd6efdc37161a8d31319bcbd1463d69f6bce5c9f3a486ca025a00ac88ef1d8767672b30f5bf3aa30"' :
                                            'id="xs-components-links-module-AppModule-0a3a657fe74273cce6f4d263e0dbc3d94c9fe4b35dd1530cbd6efdc37161a8d31319bcbd1463d69f6bce5c9f3a486ca025a00ac88ef1d8767672b30f5bf3aa30"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CallCenterAdminModule.html" data-type="entity-link" >CallCenterAdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CallCenterAdminModule-f768e313989aa5de5abaa50f8daee1d3270a6e265a95fa2dce05208c6e4a852c395b05695017dd783441669fb18f8019d7c79a461d4ae0b5312dd1bffe9977a6"' : 'data-bs-target="#xs-components-links-module-CallCenterAdminModule-f768e313989aa5de5abaa50f8daee1d3270a6e265a95fa2dce05208c6e4a852c395b05695017dd783441669fb18f8019d7c79a461d4ae0b5312dd1bffe9977a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CallCenterAdminModule-f768e313989aa5de5abaa50f8daee1d3270a6e265a95fa2dce05208c6e4a852c395b05695017dd783441669fb18f8019d7c79a461d4ae0b5312dd1bffe9977a6"' :
                                            'id="xs-components-links-module-CallCenterAdminModule-f768e313989aa5de5abaa50f8daee1d3270a6e265a95fa2dce05208c6e4a852c395b05695017dd783441669fb18f8019d7c79a461d4ae0b5312dd1bffe9977a6"' }>
                                            <li class="link">
                                                <a href="components/AssignmentDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignmentDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssignmentListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignmentListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CallCenterAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallCenterAdminComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CallCenterAdminModule-f768e313989aa5de5abaa50f8daee1d3270a6e265a95fa2dce05208c6e4a852c395b05695017dd783441669fb18f8019d7c79a461d4ae0b5312dd1bffe9977a6"' : 'data-bs-target="#xs-injectables-links-module-CallCenterAdminModule-f768e313989aa5de5abaa50f8daee1d3270a6e265a95fa2dce05208c6e4a852c395b05695017dd783441669fb18f8019d7c79a461d4ae0b5312dd1bffe9977a6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CallCenterAdminModule-f768e313989aa5de5abaa50f8daee1d3270a6e265a95fa2dce05208c6e4a852c395b05695017dd783441669fb18f8019d7c79a461d4ae0b5312dd1bffe9977a6"' :
                                        'id="xs-injectables-links-module-CallCenterAdminModule-f768e313989aa5de5abaa50f8daee1d3270a6e265a95fa2dce05208c6e4a852c395b05695017dd783441669fb18f8019d7c79a461d4ae0b5312dd1bffe9977a6"' }>
                                        <li class="link">
                                            <a href="injectables/CallCenterAdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallCenterAdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CallCenterAdminRoutingModule.html" data-type="entity-link" >CallCenterAdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CallCenterOperatorModule.html" data-type="entity-link" >CallCenterOperatorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CallCenterOperatorModule-bc540e2a524f6168cfa5528e38e8c4edd4459a5ceeb9a58b8e37280205e339a396f7e9fa66c2ddd33a23ac106a41f5e30250ff1549b6c68f9a4c288c1cf86037"' : 'data-bs-target="#xs-components-links-module-CallCenterOperatorModule-bc540e2a524f6168cfa5528e38e8c4edd4459a5ceeb9a58b8e37280205e339a396f7e9fa66c2ddd33a23ac106a41f5e30250ff1549b6c68f9a4c288c1cf86037"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CallCenterOperatorModule-bc540e2a524f6168cfa5528e38e8c4edd4459a5ceeb9a58b8e37280205e339a396f7e9fa66c2ddd33a23ac106a41f5e30250ff1549b6c68f9a4c288c1cf86037"' :
                                            'id="xs-components-links-module-CallCenterOperatorModule-bc540e2a524f6168cfa5528e38e8c4edd4459a5ceeb9a58b8e37280205e339a396f7e9fa66c2ddd33a23ac106a41f5e30250ff1549b6c68f9a4c288c1cf86037"' }>
                                            <li class="link">
                                                <a href="components/AssignmentsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignmentsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CallCenterOperatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallCenterOperatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CallCenterOperatorModule-bc540e2a524f6168cfa5528e38e8c4edd4459a5ceeb9a58b8e37280205e339a396f7e9fa66c2ddd33a23ac106a41f5e30250ff1549b6c68f9a4c288c1cf86037"' : 'data-bs-target="#xs-injectables-links-module-CallCenterOperatorModule-bc540e2a524f6168cfa5528e38e8c4edd4459a5ceeb9a58b8e37280205e339a396f7e9fa66c2ddd33a23ac106a41f5e30250ff1549b6c68f9a4c288c1cf86037"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CallCenterOperatorModule-bc540e2a524f6168cfa5528e38e8c4edd4459a5ceeb9a58b8e37280205e339a396f7e9fa66c2ddd33a23ac106a41f5e30250ff1549b6c68f9a4c288c1cf86037"' :
                                        'id="xs-injectables-links-module-CallCenterOperatorModule-bc540e2a524f6168cfa5528e38e8c4edd4459a5ceeb9a58b8e37280205e339a396f7e9fa66c2ddd33a23ac106a41f5e30250ff1549b6c68f9a4c288c1cf86037"' }>
                                        <li class="link">
                                            <a href="injectables/CallCenterOperatorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallCenterOperatorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CallCenterOperatorRoutingModule.html" data-type="entity-link" >CallCenterOperatorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ComponentsModule-bc99c2a2bbcb4b449fcbf294beabb5afafcad59d30d54cf98ecf0b60f9ba370d7c0ef192bb5501a84996a95d534bd4bb34ec262c2fef82662032a5dce344ec36"' : 'data-bs-target="#xs-components-links-module-ComponentsModule-bc99c2a2bbcb4b449fcbf294beabb5afafcad59d30d54cf98ecf0b60f9ba370d7c0ef192bb5501a84996a95d534bd4bb34ec262c2fef82662032a5dce344ec36"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-bc99c2a2bbcb4b449fcbf294beabb5afafcad59d30d54cf98ecf0b60f9ba370d7c0ef192bb5501a84996a95d534bd4bb34ec262c2fef82662032a5dce344ec36"' :
                                            'id="xs-components-links-module-ComponentsModule-bc99c2a2bbcb4b449fcbf294beabb5afafcad59d30d54cf98ecf0b60f9ba370d7c0ef192bb5501a84996a95d534bd4bb34ec262c2fef82662032a5dce344ec36"' }>
                                            <li class="link">
                                                <a href="components/AuthenticationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CodeVerificationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CodeVerificationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomFieldComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomFieldComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomFormArrayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomFormArrayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatepickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatepickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailsReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorDisplayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExternalDeduplicationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExternalDeduplicationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterPoweredImpactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterPoweredImpactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterToolbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistoryDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListDataTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListDataTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapMarkerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapMarkerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultiLineTextDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultiLineTextDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultipleSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultipleSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemarkWrapperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemarkWrapperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SingleSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SingleSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SponsorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SponsorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubmitButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubmitButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextAreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToggleButtonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToggleButtonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToolbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolbarDrawerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToolbarDrawerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadFieldComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadFieldComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadFileDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadFileDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WarningDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WarningDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DirectivesModule.html" data-type="entity-link" >DirectivesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DistributionModule.html" data-type="entity-link" >DistributionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DistributionModule-8b86b4e94729f5d563d22da54d420beb2d689e208d570cbd7dbc3958c4651659fd5f784ceaf0738b8cbc2c9677592681f9afd83b0dc055f55ed735befaa23a12"' : 'data-bs-target="#xs-components-links-module-DistributionModule-8b86b4e94729f5d563d22da54d420beb2d689e208d570cbd7dbc3958c4651659fd5f784ceaf0738b8cbc2c9677592681f9afd83b0dc055f55ed735befaa23a12"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DistributionModule-8b86b4e94729f5d563d22da54d420beb2d689e208d570cbd7dbc3958c4651659fd5f784ceaf0738b8cbc2c9677592681f9afd83b0dc055f55ed735befaa23a12"' :
                                            'id="xs-components-links-module-DistributionModule-8b86b4e94729f5d563d22da54d420beb2d689e208d570cbd7dbc3958c4651659fd5f784ceaf0738b8cbc2c9677592681f9afd83b0dc055f55ed735befaa23a12"' }>
                                            <li class="link">
                                                <a href="components/AssignDistributionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignDistributionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssignSpotchecksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignSpotchecksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DistributionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DistributionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingDistributionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingDistributionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReassignDistributionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReassignDistributionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReassignSupervisorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReassignSupervisorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RescheduleApplicationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RescheduleApplicationsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DistributionModule-8b86b4e94729f5d563d22da54d420beb2d689e208d570cbd7dbc3958c4651659fd5f784ceaf0738b8cbc2c9677592681f9afd83b0dc055f55ed735befaa23a12"' : 'data-bs-target="#xs-injectables-links-module-DistributionModule-8b86b4e94729f5d563d22da54d420beb2d689e208d570cbd7dbc3958c4651659fd5f784ceaf0738b8cbc2c9677592681f9afd83b0dc055f55ed735befaa23a12"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DistributionModule-8b86b4e94729f5d563d22da54d420beb2d689e208d570cbd7dbc3958c4651659fd5f784ceaf0738b8cbc2c9677592681f9afd83b0dc055f55ed735befaa23a12"' :
                                        'id="xs-injectables-links-module-DistributionModule-8b86b4e94729f5d563d22da54d420beb2d689e208d570cbd7dbc3958c4651659fd5f784ceaf0738b8cbc2c9677592681f9afd83b0dc055f55ed735befaa23a12"' }>
                                        <li class="link">
                                            <a href="injectables/DistributionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DistributionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DistributionRoutingModule.html" data-type="entity-link" >DistributionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExtenralProgramRoutingModule.html" data-type="entity-link" >ExtenralProgramRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExternalProgramModule.html" data-type="entity-link" >ExternalProgramModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ExternalProgramModule-74c8aa25ebff8eb22c70524698b295f656b6743f506ad20f32071de24b581ce89dad05d14834807d146b11cf97c3770c7b816f7cb4a5f4cc45506a963d535b6b"' : 'data-bs-target="#xs-components-links-module-ExternalProgramModule-74c8aa25ebff8eb22c70524698b295f656b6743f506ad20f32071de24b581ce89dad05d14834807d146b11cf97c3770c7b816f7cb4a5f4cc45506a963d535b6b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExternalProgramModule-74c8aa25ebff8eb22c70524698b295f656b6743f506ad20f32071de24b581ce89dad05d14834807d146b11cf97c3770c7b816f7cb4a5f4cc45506a963d535b6b"' :
                                            'id="xs-components-links-module-ExternalProgramModule-74c8aa25ebff8eb22c70524698b295f656b6743f506ad20f32071de24b581ce89dad05d14834807d146b11cf97c3770c7b816f7cb4a5f4cc45506a963d535b6b"' }>
                                            <li class="link">
                                                <a href="components/BeneficiaryListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BeneficiaryListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExternalProgramComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExternalProgramComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExternalProgramGenerateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExternalProgramGenerateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingExternalProgramComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingExternalProgramComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ExternalProgramModule-74c8aa25ebff8eb22c70524698b295f656b6743f506ad20f32071de24b581ce89dad05d14834807d146b11cf97c3770c7b816f7cb4a5f4cc45506a963d535b6b"' : 'data-bs-target="#xs-injectables-links-module-ExternalProgramModule-74c8aa25ebff8eb22c70524698b295f656b6743f506ad20f32071de24b581ce89dad05d14834807d146b11cf97c3770c7b816f7cb4a5f4cc45506a963d535b6b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExternalProgramModule-74c8aa25ebff8eb22c70524698b295f656b6743f506ad20f32071de24b581ce89dad05d14834807d146b11cf97c3770c7b816f7cb4a5f4cc45506a963d535b6b"' :
                                        'id="xs-injectables-links-module-ExternalProgramModule-74c8aa25ebff8eb22c70524698b295f656b6743f506ad20f32071de24b581ce89dad05d14834807d146b11cf97c3770c7b816f7cb4a5f4cc45506a963d535b6b"' }>
                                        <li class="link">
                                            <a href="injectables/CampaignsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CampaignsTemplatesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignsTemplatesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ExternalProgramService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExternalProgramService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HouseholdsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HouseholdsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UtilsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UtilsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GuardsModule.html" data-type="entity-link" >GuardsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HistoryModule.html" data-type="entity-link" >HistoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HistoryModule-0bf1059296b742b528a9de066dce6494f3548394c24194b80d7c45792651bd3ed39508c7bda0a594d06bf949eca66777e0b1b824288bf24b789c310ee08af26b"' : 'data-bs-target="#xs-components-links-module-HistoryModule-0bf1059296b742b528a9de066dce6494f3548394c24194b80d7c45792651bd3ed39508c7bda0a594d06bf949eca66777e0b1b824288bf24b789c310ee08af26b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HistoryModule-0bf1059296b742b528a9de066dce6494f3548394c24194b80d7c45792651bd3ed39508c7bda0a594d06bf949eca66777e0b1b824288bf24b789c310ee08af26b"' :
                                            'id="xs-components-links-module-HistoryModule-0bf1059296b742b528a9de066dce6494f3548394c24194b80d7c45792651bd3ed39508c7bda0a594d06bf949eca66777e0b1b824288bf24b789c310ee08af26b"' }>
                                            <li class="link">
                                                <a href="components/HistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingHistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpotcheckHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpotcheckHistoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HistoryModule-0bf1059296b742b528a9de066dce6494f3548394c24194b80d7c45792651bd3ed39508c7bda0a594d06bf949eca66777e0b1b824288bf24b789c310ee08af26b"' : 'data-bs-target="#xs-injectables-links-module-HistoryModule-0bf1059296b742b528a9de066dce6494f3548394c24194b80d7c45792651bd3ed39508c7bda0a594d06bf949eca66777e0b1b824288bf24b789c310ee08af26b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HistoryModule-0bf1059296b742b528a9de066dce6494f3548394c24194b80d7c45792651bd3ed39508c7bda0a594d06bf949eca66777e0b1b824288bf24b789c310ee08af26b"' :
                                        'id="xs-injectables-links-module-HistoryModule-0bf1059296b742b528a9de066dce6494f3548394c24194b80d7c45792651bd3ed39508c7bda0a594d06bf949eca66777e0b1b824288bf24b789c310ee08af26b"' }>
                                        <li class="link">
                                            <a href="injectables/HistoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HistoryRoutingModule.html" data-type="entity-link" >HistoryRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomeModule-ac10e8d8379e1925447120aa98b611f55eb7661046cce0b8e3c7bef5aa317920ad3ca5f1318de07151fdb466219622bbd4911a95632b497dde72250b8f9b6718"' : 'data-bs-target="#xs-components-links-module-HomeModule-ac10e8d8379e1925447120aa98b611f55eb7661046cce0b8e3c7bef5aa317920ad3ca5f1318de07151fdb466219622bbd4911a95632b497dde72250b8f9b6718"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-ac10e8d8379e1925447120aa98b611f55eb7661046cce0b8e3c7bef5aa317920ad3ca5f1318de07151fdb466219622bbd4911a95632b497dde72250b8f9b6718"' :
                                            'id="xs-components-links-module-HomeModule-ac10e8d8379e1925447120aa98b611f55eb7661046cce0b8e3c7bef5aa317920ad3ca5f1318de07151fdb466219622bbd4911a95632b497dde72250b8f9b6718"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HomeModule-ac10e8d8379e1925447120aa98b611f55eb7661046cce0b8e3c7bef5aa317920ad3ca5f1318de07151fdb466219622bbd4911a95632b497dde72250b8f9b6718"' : 'data-bs-target="#xs-injectables-links-module-HomeModule-ac10e8d8379e1925447120aa98b611f55eb7661046cce0b8e3c7bef5aa317920ad3ca5f1318de07151fdb466219622bbd4911a95632b497dde72250b8f9b6718"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomeModule-ac10e8d8379e1925447120aa98b611f55eb7661046cce0b8e3c7bef5aa317920ad3ca5f1318de07151fdb466219622bbd4911a95632b497dde72250b8f9b6718"' :
                                        'id="xs-injectables-links-module-HomeModule-ac10e8d8379e1925447120aa98b611f55eb7661046cce0b8e3c7bef5aa317920ad3ca5f1318de07151fdb466219622bbd4911a95632b497dde72250b8f9b6718"' }>
                                        <li class="link">
                                            <a href="injectables/HomeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HouseholdsModule.html" data-type="entity-link" >HouseholdsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HouseholdsModule-60463f45187b1d964846371db5c31f965aa77a7ebb5cf0791de42bd58079c52ed66eb0562a91cd07853f2dd4bc0e1af2acadeb3ad3a50223ab3a64c87263eaff"' : 'data-bs-target="#xs-components-links-module-HouseholdsModule-60463f45187b1d964846371db5c31f965aa77a7ebb5cf0791de42bd58079c52ed66eb0562a91cd07853f2dd4bc0e1af2acadeb3ad3a50223ab3a64c87263eaff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HouseholdsModule-60463f45187b1d964846371db5c31f965aa77a7ebb5cf0791de42bd58079c52ed66eb0562a91cd07853f2dd4bc0e1af2acadeb3ad3a50223ab3a64c87263eaff"' :
                                            'id="xs-components-links-module-HouseholdsModule-60463f45187b1d964846371db5c31f965aa77a7ebb5cf0791de42bd58079c52ed66eb0562a91cd07853f2dd4bc0e1af2acadeb3ad3a50223ab3a64c87263eaff"' }>
                                            <li class="link">
                                                <a href="components/ApplicationsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssignedHouseholdsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignedHouseholdsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CampaignsDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignsDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CampaignsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CampaignsTemplatesListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignsTemplatesListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CampaignsWarningDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignsWarningDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CasesInspectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CasesInspectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CasesInspectionListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CasesInspectionListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangeLogsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangeLogsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangeLogsListingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangeLogsListingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangesDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangesDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CorrectionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CorrectionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTablesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTablesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EssnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EssnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FuzzyMatchingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FuzzyMatchingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FuzzyMatchingDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FuzzyMatchingDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FuzzyMatchingListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FuzzyMatchingListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GeneratedReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneratedReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistoryPaymentDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryPaymentDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistoryProcessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryProcessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HouseholdReportsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HouseholdReportsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HouseholdsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HouseholdsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InclusionExclusionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InclusionExclusionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingHouseholdsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingHouseholdsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MigrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MigrationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentDetailsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentDetailsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentGenerationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentGenerationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentPlansComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentPlansComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreviousChangesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreviousChangesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReinitializeApplicationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReinitializeApplicationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SmsGenerationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SmsGenerationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SmsGenerationListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SmsGenerationListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveysListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SurveysListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnassignedHouseholdsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UnassignedHouseholdsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnscheduledSpotchecksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UnscheduledSpotchecksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HouseholdsModule-60463f45187b1d964846371db5c31f965aa77a7ebb5cf0791de42bd58079c52ed66eb0562a91cd07853f2dd4bc0e1af2acadeb3ad3a50223ab3a64c87263eaff"' : 'data-bs-target="#xs-injectables-links-module-HouseholdsModule-60463f45187b1d964846371db5c31f965aa77a7ebb5cf0791de42bd58079c52ed66eb0562a91cd07853f2dd4bc0e1af2acadeb3ad3a50223ab3a64c87263eaff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HouseholdsModule-60463f45187b1d964846371db5c31f965aa77a7ebb5cf0791de42bd58079c52ed66eb0562a91cd07853f2dd4bc0e1af2acadeb3ad3a50223ab3a64c87263eaff"' :
                                        'id="xs-injectables-links-module-HouseholdsModule-60463f45187b1d964846371db5c31f965aa77a7ebb5cf0791de42bd58079c52ed66eb0562a91cd07853f2dd4bc0e1af2acadeb3ad3a50223ab3a64c87263eaff"' }>
                                        <li class="link">
                                            <a href="injectables/ApplicationsListService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationsListService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CampaignsDetailsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignsDetailsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CampaignsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CampaignsTemplatesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignsTemplatesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CorrectionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CorrectionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FuzzyMatchingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FuzzyMatchingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HouseholdsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HouseholdsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HouseholdsRoutingModule.html" data-type="entity-link" >HouseholdsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InstitutionsModule.html" data-type="entity-link" >InstitutionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-InstitutionsModule-96fe77b857aac4fa53dcafcdddfb83a665a32cd1cfe99c2ad58f7258122464197b8507fcdaffec8533feccf5981989d9c288b3415f42f9cf8ddb2f77e321e204"' : 'data-bs-target="#xs-components-links-module-InstitutionsModule-96fe77b857aac4fa53dcafcdddfb83a665a32cd1cfe99c2ad58f7258122464197b8507fcdaffec8533feccf5981989d9c288b3415f42f9cf8ddb2f77e321e204"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InstitutionsModule-96fe77b857aac4fa53dcafcdddfb83a665a32cd1cfe99c2ad58f7258122464197b8507fcdaffec8533feccf5981989d9c288b3415f42f9cf8ddb2f77e321e204"' :
                                            'id="xs-components-links-module-InstitutionsModule-96fe77b857aac4fa53dcafcdddfb83a665a32cd1cfe99c2ad58f7258122464197b8507fcdaffec8533feccf5981989d9c288b3415f42f9cf8ddb2f77e321e204"' }>
                                            <li class="link">
                                                <a href="components/InstitutionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstitutionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-InstitutionsModule-96fe77b857aac4fa53dcafcdddfb83a665a32cd1cfe99c2ad58f7258122464197b8507fcdaffec8533feccf5981989d9c288b3415f42f9cf8ddb2f77e321e204"' : 'data-bs-target="#xs-injectables-links-module-InstitutionsModule-96fe77b857aac4fa53dcafcdddfb83a665a32cd1cfe99c2ad58f7258122464197b8507fcdaffec8533feccf5981989d9c288b3415f42f9cf8ddb2f77e321e204"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InstitutionsModule-96fe77b857aac4fa53dcafcdddfb83a665a32cd1cfe99c2ad58f7258122464197b8507fcdaffec8533feccf5981989d9c288b3415f42f9cf8ddb2f77e321e204"' :
                                        'id="xs-injectables-links-module-InstitutionsModule-96fe77b857aac4fa53dcafcdddfb83a665a32cd1cfe99c2ad58f7258122464197b8507fcdaffec8533feccf5981989d9c288b3415f42f9cf8ddb2f77e321e204"' }>
                                        <li class="link">
                                            <a href="injectables/InstitutionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstitutionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InstitutionsRoutingModule.html" data-type="entity-link" >InstitutionsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InterceptorsModule.html" data-type="entity-link" >InterceptorsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LandingModule.html" data-type="entity-link" >LandingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LandingModule-25932f72e316c2af2cd5e700f2a5f1f1fe44e21463caba29eea4171885808615a9d5470efd8a50052f0ff4766167bc895724a216e2e28951e7588ba3054df811"' : 'data-bs-target="#xs-components-links-module-LandingModule-25932f72e316c2af2cd5e700f2a5f1f1fe44e21463caba29eea4171885808615a9d5470efd8a50052f0ff4766167bc895724a216e2e28951e7588ba3054df811"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LandingModule-25932f72e316c2af2cd5e700f2a5f1f1fe44e21463caba29eea4171885808615a9d5470efd8a50052f0ff4766167bc895724a216e2e28951e7588ba3054df811"' :
                                            'id="xs-components-links-module-LandingModule-25932f72e316c2af2cd5e700f2a5f1f1fe44e21463caba29eea4171885808615a9d5470efd8a50052f0ff4766167bc895724a216e2e28951e7588ba3054df811"' }>
                                            <li class="link">
                                                <a href="components/ApproveLegalTermsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApproveLegalTermsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LandingModule-25932f72e316c2af2cd5e700f2a5f1f1fe44e21463caba29eea4171885808615a9d5470efd8a50052f0ff4766167bc895724a216e2e28951e7588ba3054df811"' : 'data-bs-target="#xs-injectables-links-module-LandingModule-25932f72e316c2af2cd5e700f2a5f1f1fe44e21463caba29eea4171885808615a9d5470efd8a50052f0ff4766167bc895724a216e2e28951e7588ba3054df811"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LandingModule-25932f72e316c2af2cd5e700f2a5f1f1fe44e21463caba29eea4171885808615a9d5470efd8a50052f0ff4766167bc895724a216e2e28951e7588ba3054df811"' :
                                        'id="xs-injectables-links-module-LandingModule-25932f72e316c2af2cd5e700f2a5f1f1fe44e21463caba29eea4171885808615a9d5470efd8a50052f0ff4766167bc895724a216e2e28951e7588ba3054df811"' }>
                                        <li class="link">
                                            <a href="injectables/LandingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResetPasswordService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LandingRoutingModule.html" data-type="entity-link" >LandingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentModule.html" data-type="entity-link" >PaymentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PaymentModule-70cd4771c144733f9705d6858234271acafeefc9d041f984cedaaffb6167fe3cb84dbb572c1ae131218432d199047099888cb16bb7bd56e87806500ad3cdd171"' : 'data-bs-target="#xs-components-links-module-PaymentModule-70cd4771c144733f9705d6858234271acafeefc9d041f984cedaaffb6167fe3cb84dbb572c1ae131218432d199047099888cb16bb7bd56e87806500ad3cdd171"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaymentModule-70cd4771c144733f9705d6858234271acafeefc9d041f984cedaaffb6167fe3cb84dbb572c1ae131218432d199047099888cb16bb7bd56e87806500ad3cdd171"' :
                                            'id="xs-components-links-module-PaymentModule-70cd4771c144733f9705d6858234271acafeefc9d041f984cedaaffb6167fe3cb84dbb572c1ae131218432d199047099888cb16bb7bd56e87806500ad3cdd171"' }>
                                            <li class="link">
                                                <a href="components/PaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaymentModule-70cd4771c144733f9705d6858234271acafeefc9d041f984cedaaffb6167fe3cb84dbb572c1ae131218432d199047099888cb16bb7bd56e87806500ad3cdd171"' : 'data-bs-target="#xs-injectables-links-module-PaymentModule-70cd4771c144733f9705d6858234271acafeefc9d041f984cedaaffb6167fe3cb84dbb572c1ae131218432d199047099888cb16bb7bd56e87806500ad3cdd171"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentModule-70cd4771c144733f9705d6858234271acafeefc9d041f984cedaaffb6167fe3cb84dbb572c1ae131218432d199047099888cb16bb7bd56e87806500ad3cdd171"' :
                                        'id="xs-injectables-links-module-PaymentModule-70cd4771c144733f9705d6858234271acafeefc9d041f984cedaaffb6167fe3cb84dbb572c1ae131218432d199047099888cb16bb7bd56e87806500ad3cdd171"' }>
                                        <li class="link">
                                            <a href="injectables/PaymentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentRoutingModule.html" data-type="entity-link" >PaymentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link" >PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-PipesModule-78ca05c797dd23daaf5cc58ef7981ce966795c5b88e4515e7635d1fa44dcd52b9ebb07a866d628763332cddd684c79f29bab70155ce8a873c75459f392ea55e5"' : 'data-bs-target="#xs-pipes-links-module-PipesModule-78ca05c797dd23daaf5cc58ef7981ce966795c5b88e4515e7635d1fa44dcd52b9ebb07a866d628763332cddd684c79f29bab70155ce8a873c75459f392ea55e5"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-78ca05c797dd23daaf5cc58ef7981ce966795c5b88e4515e7635d1fa44dcd52b9ebb07a866d628763332cddd684c79f29bab70155ce8a873c75459f392ea55e5"' :
                                            'id="xs-pipes-links-module-PipesModule-78ca05c797dd23daaf5cc58ef7981ce966795c5b88e4515e7635d1fa44dcd52b9ebb07a866d628763332cddd684c79f29bab70155ce8a873c75459f392ea55e5"' }>
                                            <li class="link">
                                                <a href="pipes/ArabicNumberPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArabicNumberPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/EllipsisPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EllipsisPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterPipePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link" >ServicesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-798ed8a351dad4df7370b00a769863ba25a5b0e1322392422848169b8ff5cacb08b17f1babca6083b3d02da22929ade76f243b681db2927317a7c58461c47a2f"' : 'data-bs-target="#xs-components-links-module-SharedModule-798ed8a351dad4df7370b00a769863ba25a5b0e1322392422848169b8ff5cacb08b17f1babca6083b3d02da22929ade76f243b681db2927317a7c58461c47a2f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-798ed8a351dad4df7370b00a769863ba25a5b0e1322392422848169b8ff5cacb08b17f1babca6083b3d02da22929ade76f243b681db2927317a7c58461c47a2f"' :
                                            'id="xs-components-links-module-SharedModule-798ed8a351dad4df7370b00a769863ba25a5b0e1322392422848169b8ff5cacb08b17f1babca6083b3d02da22929ade76f243b681db2927317a7c58461c47a2f"' }>
                                            <li class="link">
                                                <a href="components/ReadOnlyDetailsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReadOnlyDetailsDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SupervisorsModule.html" data-type="entity-link" >SupervisorsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SupervisorsModule-60005980491d9020cf8def027779c69dae18879fae3493e16173adc27ede781bf854b4a5178906863650ff09c4056238fd293748ee062df0139423cb719c6568"' : 'data-bs-target="#xs-components-links-module-SupervisorsModule-60005980491d9020cf8def027779c69dae18879fae3493e16173adc27ede781bf854b4a5178906863650ff09c4056238fd293748ee062df0139423cb719c6568"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SupervisorsModule-60005980491d9020cf8def027779c69dae18879fae3493e16173adc27ede781bf854b4a5178906863650ff09c4056238fd293748ee062df0139423cb719c6568"' :
                                            'id="xs-components-links-module-SupervisorsModule-60005980491d9020cf8def027779c69dae18879fae3493e16173adc27ede781bf854b4a5178906863650ff09c4056238fd293748ee062df0139423cb719c6568"' }>
                                            <li class="link">
                                                <a href="components/SupervisorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupervisorsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SupervisorsModule-60005980491d9020cf8def027779c69dae18879fae3493e16173adc27ede781bf854b4a5178906863650ff09c4056238fd293748ee062df0139423cb719c6568"' : 'data-bs-target="#xs-injectables-links-module-SupervisorsModule-60005980491d9020cf8def027779c69dae18879fae3493e16173adc27ede781bf854b4a5178906863650ff09c4056238fd293748ee062df0139423cb719c6568"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SupervisorsModule-60005980491d9020cf8def027779c69dae18879fae3493e16173adc27ede781bf854b4a5178906863650ff09c4056238fd293748ee062df0139423cb719c6568"' :
                                        'id="xs-injectables-links-module-SupervisorsModule-60005980491d9020cf8def027779c69dae18879fae3493e16173adc27ede781bf854b4a5178906863650ff09c4056238fd293748ee062df0139423cb719c6568"' }>
                                        <li class="link">
                                            <a href="injectables/SupervisorsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupervisorsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SupervisorsRoutingModule.html" data-type="entity-link" >SupervisorsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SurveyersModule.html" data-type="entity-link" >SurveyersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SurveyersModule-0c7236fc51de105fd58073cd68921667c857b4259dba43eaea908976f6e68652dbee77c4ba1c4d152a8572f014056f2878dc5d51c6364b8d9ad0c9e5c673819f"' : 'data-bs-target="#xs-components-links-module-SurveyersModule-0c7236fc51de105fd58073cd68921667c857b4259dba43eaea908976f6e68652dbee77c4ba1c4d152a8572f014056f2878dc5d51c6364b8d9ad0c9e5c673819f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SurveyersModule-0c7236fc51de105fd58073cd68921667c857b4259dba43eaea908976f6e68652dbee77c4ba1c4d152a8572f014056f2878dc5d51c6364b8d9ad0c9e5c673819f"' :
                                            'id="xs-components-links-module-SurveyersModule-0c7236fc51de105fd58073cd68921667c857b4259dba43eaea908976f6e68652dbee77c4ba1c4d152a8572f014056f2878dc5d51c6364b8d9ad0c9e5c673819f"' }>
                                            <li class="link">
                                                <a href="components/SurveyersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SurveyersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SurveyersModule-0c7236fc51de105fd58073cd68921667c857b4259dba43eaea908976f6e68652dbee77c4ba1c4d152a8572f014056f2878dc5d51c6364b8d9ad0c9e5c673819f"' : 'data-bs-target="#xs-injectables-links-module-SurveyersModule-0c7236fc51de105fd58073cd68921667c857b4259dba43eaea908976f6e68652dbee77c4ba1c4d152a8572f014056f2878dc5d51c6364b8d9ad0c9e5c673819f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SurveyersModule-0c7236fc51de105fd58073cd68921667c857b4259dba43eaea908976f6e68652dbee77c4ba1c4d152a8572f014056f2878dc5d51c6364b8d9ad0c9e5c673819f"' :
                                        'id="xs-injectables-links-module-SurveyersModule-0c7236fc51de105fd58073cd68921667c857b4259dba43eaea908976f6e68652dbee77c4ba1c4d152a8572f014056f2878dc5d51c6364b8d9ad0c9e5c673819f"' }>
                                        <li class="link">
                                            <a href="injectables/SurveyersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SurveyersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SurveyersRoutingModule.html" data-type="entity-link" >SurveyersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ThirdPartiesModule.html" data-type="entity-link" >ThirdPartiesModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/DataTableBaseClass.html" data-type="entity-link" >DataTableBaseClass</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BECampaignFormModel.html" data-type="entity-link" >BECampaignFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BECampaignFormModel-1.html" data-type="entity-link" >BECampaignFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BECampaignFormModel-2.html" data-type="entity-link" >BECampaignFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BEDbRequestFieldsModel.html" data-type="entity-link" >BEDbRequestFieldsModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BEDbRequestFieldsModel-1.html" data-type="entity-link" >BEDbRequestFieldsModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BEDbRequestModel.html" data-type="entity-link" >BEDbRequestModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BEDbRequestModel-1.html" data-type="entity-link" >BEDbRequestModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BEDbRequestTableFilterCriteriaModel.html" data-type="entity-link" >BEDbRequestTableFilterCriteriaModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BEDbRequestTableFilterCriteriaModel-1.html" data-type="entity-link" >BEDbRequestTableFilterCriteriaModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BEDbRequestTablesModel.html" data-type="entity-link" >BEDbRequestTablesModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BEDbRequestTablesModel-1.html" data-type="entity-link" >BEDbRequestTablesModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BeEssnFormModel.html" data-type="entity-link" >BeEssnFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BeEssnOldPersonModel.html" data-type="entity-link" >BeEssnOldPersonModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BeEssnPersonModel.html" data-type="entity-link" >BeEssnPersonModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChildMenuItemModel.html" data-type="entity-link" >ChildMenuItemModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomFormActionModel.html" data-type="entity-link" >CustomFormActionModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomFormActionModel-1.html" data-type="entity-link" >CustomFormActionModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomFormModel.html" data-type="entity-link" >CustomFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomFormModel-1.html" data-type="entity-link" >CustomFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataTable.html" data-type="entity-link" >DataTable</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataTableColumnDefinition.html" data-type="entity-link" >DataTableColumnDefinition</a>
                            </li>
                            <li class="link">
                                <a href="classes/DetailsDialogModel.html" data-type="entity-link" >DetailsDialogModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/DialogDataModel.html" data-type="entity-link" >DialogDataModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/EssnHousehold.html" data-type="entity-link" >EssnHousehold</a>
                            </li>
                            <li class="link">
                                <a href="classes/EssnLookupModel.html" data-type="entity-link" >EssnLookupModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FECampaignCriteriasModel.html" data-type="entity-link" >FECampaignCriteriasModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FECampaignCriteriasModel-1.html" data-type="entity-link" >FECampaignCriteriasModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FeCampaignFormModel.html" data-type="entity-link" >FeCampaignFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FeCampaignFormModel-1.html" data-type="entity-link" >FeCampaignFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FeCampaignFormModel-2.html" data-type="entity-link" >FeCampaignFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FeEssnFormModel.html" data-type="entity-link" >FeEssnFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FeEssnPersonModel.html" data-type="entity-link" >FeEssnPersonModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FEPlacholdersModel.html" data-type="entity-link" >FEPlacholdersModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FEPlacholdersModel-1.html" data-type="entity-link" >FEPlacholdersModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FETablesModel.html" data-type="entity-link" >FETablesModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FETablesModel-1.html" data-type="entity-link" >FETablesModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterConfig.html" data-type="entity-link" >FilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/FooterConfig.html" data-type="entity-link" >FooterConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/FrameworkHelper.html" data-type="entity-link" >FrameworkHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/HistoryDialogModel.html" data-type="entity-link" >HistoryDialogModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/HistoryDialogModel-1.html" data-type="entity-link" >HistoryDialogModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpBaseClass.html" data-type="entity-link" >HttpBaseClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpManagerClass.html" data-type="entity-link" >HttpManagerClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpRequestOptions.html" data-type="entity-link" >HttpRequestOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/LandingConfig.html" data-type="entity-link" >LandingConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/LanguageHelper.html" data-type="entity-link" >LanguageHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/MapMarkerComponentModel.html" data-type="entity-link" >MapMarkerComponentModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuItemModel.html" data-type="entity-link" >MenuItemModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatorConfig.html" data-type="entity-link" >PaginatorConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/PreviousChangesDialogModel.html" data-type="entity-link" >PreviousChangesDialogModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReadOnlyDetailsDialogModel.html" data-type="entity-link" >ReadOnlyDetailsDialogModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/Settings.html" data-type="entity-link" >Settings</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tenant.html" data-type="entity-link" >Tenant</a>
                            </li>
                            <li class="link">
                                <a href="classes/TenantConfig.html" data-type="entity-link" >TenantConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApplicationsListService.html" data-type="entity-link" >ApplicationsListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CachingService.html" data-type="entity-link" >CachingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CallCenterAdminService.html" data-type="entity-link" >CallCenterAdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CallCenterOperatorService.html" data-type="entity-link" >CallCenterOperatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CampaignsDetailsService.html" data-type="entity-link" >CampaignsDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CampaignsService.html" data-type="entity-link" >CampaignsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CampaignsTemplatesService.html" data-type="entity-link" >CampaignsTemplatesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CorrectionService.html" data-type="entity-link" >CorrectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DistributionService.html" data-type="entity-link" >DistributionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExternalProgramService.html" data-type="entity-link" >ExternalProgramService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FuzzyMatchingService.html" data-type="entity-link" >FuzzyMatchingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HistoryService.html" data-type="entity-link" >HistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeService.html" data-type="entity-link" >HomeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HouseholdsService.html" data-type="entity-link" >HouseholdsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstitutionsService.html" data-type="entity-link" >InstitutionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LandingService.html" data-type="entity-link" >LandingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageService.html" data-type="entity-link" >LocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentService.html" data-type="entity-link" >PaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PickDateAdapter.html" data-type="entity-link" >PickDateAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResetPasswordService.html" data-type="entity-link" >ResetPasswordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsHttpService.html" data-type="entity-link" >SettingsHttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsService.html" data-type="entity-link" >SettingsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SnackbarService.html" data-type="entity-link" >SnackbarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpinnerService.html" data-type="entity-link" >SpinnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SupervisorsService.html" data-type="entity-link" >SupervisorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SurveyersService.html" data-type="entity-link" >SurveyersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TenantService.html" data-type="entity-link" >TenantService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToolbarDrawerService.html" data-type="entity-link" >ToolbarDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilsService.html" data-type="entity-link" >UtilsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/BadRequestsInterceptor.html" data-type="entity-link" >BadRequestsInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/SpinnerInterceptor.html" data-type="entity-link" >SpinnerInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanActivatePageGuard.html" data-type="entity-link" >CanActivatePageGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanDeactivateGuard.html" data-type="entity-link" >CanDeactivateGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AssignSpotcheckFormType.html" data-type="entity-link" >AssignSpotcheckFormType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AssignSpotcheckPayload.html" data-type="entity-link" >AssignSpotcheckPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthenticationError.html" data-type="entity-link" >AuthenticationError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CachingObjectModel.html" data-type="entity-link" >CachingObjectModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CanComponentDeactivate.html" data-type="entity-link" >CanComponentDeactivate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChangeEventType.html" data-type="entity-link" >ChangeEventType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataListConfigModel.html" data-type="entity-link" >DataListConfigModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataListConfigModel-1.html" data-type="entity-link" >DataListConfigModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataListSectionConfigModel.html" data-type="entity-link" >DataListSectionConfigModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataListSectionConfigModel-1.html" data-type="entity-link" >DataListSectionConfigModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Decision.html" data-type="entity-link" >Decision</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogActions.html" data-type="entity-link" >DialogActions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogResult.html" data-type="entity-link" >DialogResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogText.html" data-type="entity-link" >DialogText</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentModel.html" data-type="entity-link" >DocumentModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DrawerLink.html" data-type="entity-link" >DrawerLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DrawerNotification.html" data-type="entity-link" >DrawerNotification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DropdownOptionModel.html" data-type="entity-link" >DropdownOptionModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DuplicateApplication.html" data-type="entity-link" >DuplicateApplication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DuplicateListItem.html" data-type="entity-link" >DuplicateListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DuplicatePerson.html" data-type="entity-link" >DuplicatePerson</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DuplicatePersonList.html" data-type="entity-link" >DuplicatePersonList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExtProgramInfoDTO.html" data-type="entity-link" >ExtProgramInfoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FieldConfigModel.html" data-type="entity-link" >FieldConfigModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HistoryFilterArg.html" data-type="entity-link" >HistoryFilterArg</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HistoryFilterInputResult.html" data-type="entity-link" >HistoryFilterInputResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HistoryPaymentDetailsTableData.html" data-type="entity-link" >HistoryPaymentDetailsTableData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HistoryPaymentTableData.html" data-type="entity-link" >HistoryPaymentTableData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HistoryResponse.html" data-type="entity-link" >HistoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HistoryTableData.html" data-type="entity-link" >HistoryTableData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InfoDialogDataModel.html" data-type="entity-link" >InfoDialogDataModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Institution.html" data-type="entity-link" >Institution</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InstitutionLookup.html" data-type="entity-link" >InstitutionLookup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InstitutionLookup-1.html" data-type="entity-link" >InstitutionLookup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LookupsCachingModel.html" data-type="entity-link" >LookupsCachingModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LookupValue.html" data-type="entity-link" >LookupValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModerateDuplicatePayload.html" data-type="entity-link" >ModerateDuplicatePayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PageChangeEvent.html" data-type="entity-link" >PageChangeEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationParametersModel.html" data-type="entity-link" >PaginationParametersModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PropVal.html" data-type="entity-link" >PropVal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReportIssueModel.html" data-type="entity-link" >ReportIssueModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResolveConsistencyModel.html" data-type="entity-link" >ResolveConsistencyModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResolveIssueModel.html" data-type="entity-link" >ResolveIssueModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Serveyor.html" data-type="entity-link" >Serveyor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SpringPaginationParametersModel.html" data-type="entity-link" >SpringPaginationParametersModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserAuthorities.html" data-type="entity-link" >UserAuthorities</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserModule.html" data-type="entity-link" >UserModule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WfpsModule.html" data-type="entity-link" >WfpsModule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WfpsRoleModule.html" data-type="entity-link" >WfpsRoleModule</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
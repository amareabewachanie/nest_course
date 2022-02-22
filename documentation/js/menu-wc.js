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
                    <a href="index.html" data-type="index-link">nest-course documentation</a>
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
                                            'data-target="#controllers-links-module-AppModule-1c03b020376c59d8bfe5f5ca9976b95dfd10be241d2d5da3cc6fa64b61975758fbd4ecd3508da0b31ec213a7981a19b09854e73d571c417a49917b9baa2d8ccb"' : 'data-target="#xs-controllers-links-module-AppModule-1c03b020376c59d8bfe5f5ca9976b95dfd10be241d2d5da3cc6fa64b61975758fbd4ecd3508da0b31ec213a7981a19b09854e73d571c417a49917b9baa2d8ccb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-1c03b020376c59d8bfe5f5ca9976b95dfd10be241d2d5da3cc6fa64b61975758fbd4ecd3508da0b31ec213a7981a19b09854e73d571c417a49917b9baa2d8ccb"' :
                                            'id="xs-controllers-links-module-AppModule-1c03b020376c59d8bfe5f5ca9976b95dfd10be241d2d5da3cc6fa64b61975758fbd4ecd3508da0b31ec213a7981a19b09854e73d571c417a49917b9baa2d8ccb"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-1c03b020376c59d8bfe5f5ca9976b95dfd10be241d2d5da3cc6fa64b61975758fbd4ecd3508da0b31ec213a7981a19b09854e73d571c417a49917b9baa2d8ccb"' : 'data-target="#xs-injectables-links-module-AppModule-1c03b020376c59d8bfe5f5ca9976b95dfd10be241d2d5da3cc6fa64b61975758fbd4ecd3508da0b31ec213a7981a19b09854e73d571c417a49917b9baa2d8ccb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1c03b020376c59d8bfe5f5ca9976b95dfd10be241d2d5da3cc6fa64b61975758fbd4ecd3508da0b31ec213a7981a19b09854e73d571c417a49917b9baa2d8ccb"' :
                                        'id="xs-injectables-links-module-AppModule-1c03b020376c59d8bfe5f5ca9976b95dfd10be241d2d5da3cc6fa64b61975758fbd4ecd3508da0b31ec213a7981a19b09854e73d571c417a49917b9baa2d8ccb"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-65eb0552ad4325355f1cc15fcacbc65792b6dd9c94674906272952e9a0c6355eb74bc78320f0b245d6d6a218fdebecbe195d7670d8ac81c4efc7b39c98b84bfd"' : 'data-target="#xs-controllers-links-module-AuthModule-65eb0552ad4325355f1cc15fcacbc65792b6dd9c94674906272952e9a0c6355eb74bc78320f0b245d6d6a218fdebecbe195d7670d8ac81c4efc7b39c98b84bfd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-65eb0552ad4325355f1cc15fcacbc65792b6dd9c94674906272952e9a0c6355eb74bc78320f0b245d6d6a218fdebecbe195d7670d8ac81c4efc7b39c98b84bfd"' :
                                            'id="xs-controllers-links-module-AuthModule-65eb0552ad4325355f1cc15fcacbc65792b6dd9c94674906272952e9a0c6355eb74bc78320f0b245d6d6a218fdebecbe195d7670d8ac81c4efc7b39c98b84bfd"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-65eb0552ad4325355f1cc15fcacbc65792b6dd9c94674906272952e9a0c6355eb74bc78320f0b245d6d6a218fdebecbe195d7670d8ac81c4efc7b39c98b84bfd"' : 'data-target="#xs-injectables-links-module-AuthModule-65eb0552ad4325355f1cc15fcacbc65792b6dd9c94674906272952e9a0c6355eb74bc78320f0b245d6d6a218fdebecbe195d7670d8ac81c4efc7b39c98b84bfd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-65eb0552ad4325355f1cc15fcacbc65792b6dd9c94674906272952e9a0c6355eb74bc78320f0b245d6d6a218fdebecbe195d7670d8ac81c4efc7b39c98b84bfd"' :
                                        'id="xs-injectables-links-module-AuthModule-65eb0552ad4325355f1cc15fcacbc65792b6dd9c94674906272952e9a0c6355eb74bc78320f0b245d6d6a218fdebecbe195d7670d8ac81c4efc7b39c98b84bfd"' }>
                                        <li class="link">
                                            <a href="injectables/AuthRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesModule.html" data-type="entity-link" >CoursesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CoursesModule-94027dc95a7567621fa568bf2997eda46d992486acb706c61234c954d8db684ada332376725ae0f57036f2ec7663b250421f9181daa4e5c75df33a54f83b70a2"' : 'data-target="#xs-controllers-links-module-CoursesModule-94027dc95a7567621fa568bf2997eda46d992486acb706c61234c954d8db684ada332376725ae0f57036f2ec7663b250421f9181daa4e5c75df33a54f83b70a2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CoursesModule-94027dc95a7567621fa568bf2997eda46d992486acb706c61234c954d8db684ada332376725ae0f57036f2ec7663b250421f9181daa4e5c75df33a54f83b70a2"' :
                                            'id="xs-controllers-links-module-CoursesModule-94027dc95a7567621fa568bf2997eda46d992486acb706c61234c954d8db684ada332376725ae0f57036f2ec7663b250421f9181daa4e5c75df33a54f83b70a2"' }>
                                            <li class="link">
                                                <a href="controllers/CoursesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/LessonsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LessonsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoursesModule-94027dc95a7567621fa568bf2997eda46d992486acb706c61234c954d8db684ada332376725ae0f57036f2ec7663b250421f9181daa4e5c75df33a54f83b70a2"' : 'data-target="#xs-injectables-links-module-CoursesModule-94027dc95a7567621fa568bf2997eda46d992486acb706c61234c954d8db684ada332376725ae0f57036f2ec7663b250421f9181daa4e5c75df33a54f83b70a2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoursesModule-94027dc95a7567621fa568bf2997eda46d992486acb706c61234c954d8db684ada332376725ae0f57036f2ec7663b250421f9181daa4e5c75df33a54f83b70a2"' :
                                        'id="xs-injectables-links-module-CoursesModule-94027dc95a7567621fa568bf2997eda46d992486acb706c61234c954d8db684ada332376725ae0f57036f2ec7663b250421f9181daa4e5c75df33a54f83b70a2"' }>
                                        <li class="link">
                                            <a href="injectables/CoursesRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursesRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LessonsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LessonsRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CoursesController.html" data-type="entity-link" >CoursesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LessonsController.html" data-type="entity-link" >LessonsController</a>
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
                                <a href="classes/Course.html" data-type="entity-link" >Course</a>
                            </li>
                            <li class="link">
                                <a href="classes/FallBackExceptionFilter.html" data-type="entity-link" >FallBackExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Lesson.html" data-type="entity-link" >Lesson</a>
                            </li>
                            <li class="link">
                                <a href="classes/ToIntegerPipe.html" data-type="entity-link" >ToIntegerPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidationException.html" data-type="entity-link" >ValidationException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidationFilter.html" data-type="entity-link" >ValidationFilter</a>
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
                                    <a href="injectables/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthRepository.html" data-type="entity-link" >AuthRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoursesRepository.html" data-type="entity-link" >CoursesRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetUserMiddleware.html" data-type="entity-link" >GetUserMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LessonsRepository.html" data-type="entity-link" >LessonsRepository</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthenticationGurad.html" data-type="entity-link" >AuthenticationGurad</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthorizationGuard.html" data-type="entity-link" >AuthorizationGuard</a>
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
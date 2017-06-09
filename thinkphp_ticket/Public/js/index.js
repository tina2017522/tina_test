/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * 老版本api兼容
	 * @author lavawong
	 * @date   15/11/6.
	 */
	!function (win) {
	    var exports = '_MeiTuanALogObject',
	        ns = '_Analytics',
	        oldNs = 'Analytics',
	        curInstance,
	        methodNames = ['updateEnv', 'updateEvs', 'updateTag'],
	        channelIdMap = {};

	    function adaptor(_MA, MA) {
	        function pushData(instance, method, id) {
	            var channelName,
	                callMethod = '';
	            if (isNaN(id) && typeof id == 'string') {
	                channelName = id;
	            } else if (!isNaN(id)) {
	                channelName = channelIdMap[id];
	            }
	            if (channelName) {
	                MA.q.push(['use', channelName]);
	                switch (method) {
	                    case methodNames[0]:
	                        callMethod = 'set';
	                        break;
	                    case methodNames[1]:
	                        callMethod = 'event';
	                        break;
	                    case methodNames[2]:
	                        callMethod = 'tag';
	                        break;
	                }
	                callMethod && MA.q.push([callMethod, instance[method]]);
	                instance[method] = {};
	            }
	        };
	        function getCN(item, idx) {
	            var cname;
	            if (item.hasOwnProperty('init')) {
	                // 尝试将页面存在的频道更新到代码中。
	                // 如果使用init(channelName)的方式，会存在obj.channelName属性
	                if (item.channelName) {
	                    cname = item.channelName;
	                } else if (typeof item.init == 'string') {
	                    cname = item.init;
	                } else {
	                    cname = 'sdk_report';
	                }
	                channelIdMap[idx] = cname;
	            }
	            return cname;
	        };
	        var oldUse = _MA.use;
	        (function (data) {
	            var item, method;
	            if (!data) {
	                return;
	            }

	            //兼容第一次改版数据
	            if (data.uploading) {
	                var data = data.uploading;

	                for (var i = 0, len = data.length; i < len; i = i + 3) {
	                    item = data[i], method = data[i + 1], idx = data[i + 2];
	                    curInstance = getCN(item, idx);
	                    if (!curInstance) {
	                        continue;
	                    }
	                    pushData(item, method, idx);
	                }
	                _MA.use = function (id) {
	                    var shollow = oldUse.call(_MA, id);
	                    var channelName;
	                    if (!isNaN(id)) {
	                        var cn = _MA.data[id];
	                        channelName = channelIdMap[id] || (cn ? cn.channelName : '') || curInstance;
	                    } else if ('string' === typeof id) {
	                        channelName = id.toString();
	                    }
	                    channelName && MA.q.push(['use', [channelName]]);
	                    return shollow;
	                };
	            } else {
	                // 兼容第一版改版前数据
	                for (var idx in data) {
	                    if (data.hasOwnProperty(idx) && !isNaN(idx)) {
	                        item = data[idx];
	                        curInstance = getCN(item, idx);
	                        if (!curInstance) {
	                            continue;
	                        }
	                        if (item.updateEvs) {
	                            pushData(item, methodNames[0], idx);
	                            pushData(item, methodNames[2], idx);
	                            pushData(item, methodNames[1], idx);
	                        }
	                    }
	                }
	                _MA.use = function (id) {
	                    var alog = oldUse.call(_MA, id);
	                    var cn = channelIdMap[id];
	                    if (cn) {
	                        _MA.push(['use', cn]);
	                        curInstance = id;
	                    }
	                    return alog;
	                };
	                _MA[methodNames[0]] = function (env) {
	                    var cn = channelIdMap[curInstance];
	                    cn && MA.q.push(['set', env]);
	                };
	                _MA[methodNames[1]] = function (tag) {
	                    var cn = channelIdMap[curInstance];
	                    cn && MA.q.push(['tag', tag]);
	                };
	                _MA[methodNames[0]] = function (evs) {
	                    var cn = channelIdMap[curInstance];
	                    cn && MA.q.push(['event', evs]);
	                };
	            }
	        })(_MA.data);

	        _MA.data.push = pushData;
	    }

	    win[exports] = ns;
	    var exportsFunc = function exportsFunc() {
	        exportsFunc.q.push(arguments);
	        return exportsFunc;
	    };

	    exportsFunc.config = win[oldNs].config;
	    exportsFunc.q = [];
	    exportsFunc.v = 'stable';
	    win[ns] = exportsFunc;
	    adaptor(win[oldNs], win[ns]);
	}(window);

/***/ }
/******/ ]);/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * 动态加载最新版本
	 * @author lavawong
	 * @date   15/10/22.
	 */
	/* global localStorage, window, location, navigator, Function */
	!function (win, doc) {

	    var headElem = win.head;
	    var attr = 'setAttribute';
	    var version = '3.1.17';
	    var UA = navigator.userAgent.toLocaleLowerCase();
	    if (!headElem) {
	        headElem = doc.getElementsByTagName('head')[0];
	    }
	    var MA = win[win['_MeiTuanALogObject']];

	    /**
	     * 自动判断加载版本
	     * @param {string} client 版本，默认自动检测
	     * @returns {string}
	     */
	    function checkClient() {
	        // defaultClient mobile或者web版
	        return (/\b(mobile|iphone|htc)\b/ig.test(UA) ? 'mobile' : 'web'
	        );
	    }

	    /**
	     * 加载js
	     */
	    function loadScript() {
	        var script = doc.createElement('script');
	        script.charset = 'utf-8';
	        script[attr]('data-start', +new Date());
	        script.src = url;
	        script[attr]('defer', 'defer');
	        script.async = true;
	        script.ver = version;
	        headElem.insertBefore(script, headElem.firstChild);
	    }

	    /**
	     * 使用SDK的客户端类型
	     * @notice 暂时可选 web/mobile
	     * @since  0.1.0
	     * @type {string}
	     */
	    var client = checkClient();

	    if (MA.C) {
	        client = MA.C;
	    }
	    /**
	     * 使用的统计脚本的发布类型
	     *
	     * @notice 暂时可选 stable
	     * @since 0.1.0
	     * @type {string}
	     */
	    var category = MA.v || 'stable',
	        url = '//analytics.meituan.com/source/' + category + '/' + version + '/' + client + '.js';
	    loadScript(url);
	}(window, document, location);

/***/ }
/******/ ]);
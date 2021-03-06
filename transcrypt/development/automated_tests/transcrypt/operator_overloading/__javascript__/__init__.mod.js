	__nest__ (
		__all__,
		'operator_overloading', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var Matrix = __class__ ('Matrix', [object], {
						get __init__ () {return __get__ (this, function (self, nRows, nCols, elements) {
							if (typeof elements == 'undefined' || (elements != null && elements .__class__ == __kwargdict__)) {;
								var elements = list ([]);
							};
							self.nRows = nRows;
							self.nCols = nCols;
							if (len (elements)) {
								self._ = elements;
							}
							else {
								self._ = function () {
									var __accu0__ = [];
									var __iter0__ = range (nRows);
									for (var __index0__ = 0; __index0__ < __iter0__.length; __index0__++) {
										var row = __iter0__ [__index0__];
										__accu0__.append (function () {
											var __accu1__ = [];
											var __iter1__ = range (nCols);
											for (var __index1__ = 0; __index1__ < __iter1__.length; __index1__++) {
												var col = __iter1__ [__index1__];
												__accu1__.append (0);
											}
											return __accu1__;
										} ());
									}
									return __accu0__;
								} ();
							}
						});},
						get __mul__ () {return __get__ (this, function (self, other) {
							if (type (other) == Matrix) {
								var result = Matrix (self.nRows, other.nCols);
								var __iter0__ = range (result.nRows);
								for (var __index0__ = 0; __index0__ < __iter0__.length; __index0__++) {
									var iTargetRow = __iter0__ [__index0__];
									var __iter1__ = range (result.nCols);
									for (var __index1__ = 0; __index1__ < __iter1__.length; __index1__++) {
										var iTargetCol = __iter1__ [__index1__];
										var __iter2__ = range (self.nCols);
										for (var __index2__ = 0; __index2__ < __iter2__.length; __index2__++) {
											var iTerm = __iter2__ [__index2__];
											result._ [iTargetRow] [iTargetCol] += self._ [iTargetRow] [iTerm] * other._ [iTerm] [iTargetCol];
										}
									}
								}
								return result;
							}
							else {
								return self.__rmul__ (other);
							}
						});},
						get __rmul__ () {return __get__ (this, function (self, scalar) {
							var result = Matrix (self.nRows, self.nCols);
							var __iter0__ = range (self.nRows);
							for (var __index0__ = 0; __index0__ < __iter0__.length; __index0__++) {
								var iRow = __iter0__ [__index0__];
								var __iter1__ = range (self.nCols);
								for (var __index1__ = 0; __index1__ < __iter1__.length; __index1__++) {
									var iCol = __iter1__ [__index1__];
									result._ [iRow] [iCol] = scalar * self._ [iRow] [iCol];
								}
							}
							return result;
						});},
						get __add__ () {return __get__ (this, function (self, other) {
							var result = Matrix (self.nRows, self.nCols);
							var __iter0__ = range (self.nRows);
							for (var __index0__ = 0; __index0__ < __iter0__.length; __index0__++) {
								var iRow = __iter0__ [__index0__];
								var __iter1__ = range (self.nCols);
								for (var __index1__ = 0; __index1__ < __iter1__.length; __index1__++) {
									var iCol = __iter1__ [__index1__];
									result._ [iRow] [iCol] = self._ [iRow] [iCol] + other._ [iRow] [iCol];
								}
							}
							return result;
						});},
						get __getitem__ () {return __get__ (this, function (self, index) {
							return self._ [index];
						});},
						get __setitem__ () {return __get__ (this, function (self, index, value) {
							self._ [index] = value;
						});},
						get __repr__ () {return __get__ (this, function (self) {
							return repr (self._);
						});}
					});
					var Functor = __class__ ('Functor', [object], {
						get __init__ () {return __get__ (this, function (self, factor) {
							self.factor = factor;
						});},
						get __call__ () {return __get__ (this, function (self, x, y) {
							if (typeof y == 'undefined' || (y != null && y .__class__ == __kwargdict__)) {;
								var y = -1;
							};
							var m = -2;
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].__class__ == __kwargdict__) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									var kwargs = {};
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'x': var x = __allkwargs0__ [__attrib0__]; break;
											case 'y': var y = __allkwargs0__ [__attrib0__]; break;
											case 'm': var m = __allkwargs0__ [__attrib0__]; break;
											case 'n': var n = __allkwargs0__ [__attrib0__]; break;
											default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
										}
									}
									kwargs.__class__ = null;
								}
								var args = tuple ([].slice.apply (arguments).slice (3, __ilastarg0__ + 1));
							}
							return tuple (list ([self.factor * x, self.factor * y, function () {
								var __accu0__ = [];
								var __iter0__ = args;
								for (var __index0__ = 0; __index0__ < __iter0__.length; __index0__++) {
									var arg = __iter0__ [__index0__];
									__accu0__.append (self.factor * arg);
								}
								return __accu0__;
							} (), self.factor * m, self.factor * n]));
						});}
					});
					var f = Functor (10);
					var g = function (x, y) {
						if (typeof y == 'undefined' || (y != null && y .__class__ == __kwargdict__)) {;
							var y = -1;
						};
						var m = -2;
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].__class__ == __kwargdict__) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								var kwargs = {};
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'x': var x = __allkwargs0__ [__attrib0__]; break;
										case 'y': var y = __allkwargs0__ [__attrib0__]; break;
										case 'm': var m = __allkwargs0__ [__attrib0__]; break;
										case 'n': var n = __allkwargs0__ [__attrib0__]; break;
										default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
									}
								}
								kwargs.__class__ = null;
							}
							var args = tuple ([].slice.apply (arguments).slice (2, __ilastarg0__ + 1));
						}
						return tuple (list ([x, y, args, m, n]));
					};
					var run = function (autoTester) {
						var m0 = Matrix (3, 3, list ([list ([1, 2, 3]), list ([4, 5, 6]), list ([7, 8, 10])]));
						var m1 = Matrix (3, 3, list ([list ([10, 20, 30]), list ([40, 50, 60]), list ([70, 80, 90])]));
						var x = 3;
						var y = x * 4 * x;
						var fast = 2 * 3;
						__setitem__ (__getitem__ (m1, 1), 2, __getitem__ (__getitem__ (m0, 1), 2));
						var slow = __add__ (2, 3);
						var m2 = __add__ (__mul__ (m0, m1), __mul__ (m1, __add__ (m0, m1)));
						var m3 = __mul__ (__mul__ (2, __add__ (__mul__ (__mul__ (__mul__ (2, m0), 3), m1), __mul__ (m2, 4))), 2);
						__call__ (autoTester.check, __getitem__ (__getitem__ (m0, 1), 1), __getitem__ (__getitem__ (m0, 1), 2), __getitem__ (__getitem__ (m1, 1), 1), __getitem__ (__getitem__ (m1, 1), 2));
						var fast2 = 16 * y + 1;
						autoTester.check (m0, m1);
						autoTester.check (x, y);
						autoTester.check (m2);
						autoTester.check (m3);
						autoTester.check (fast, slow, fast2);
						var x = 'marker';
						__call__ (autoTester.check, __call__ (f, 3, 4, 30, 40, __kwargdict__ ({m: 300, n: 400, p: 3000, q: 4000})));
						__call__ (autoTester.check, __call__ (g, 3, 4, 30, 40, __kwargdict__ ({m: 300, n: 400, p: 3000, q: 4000})));
					};
					__pragma__ ('<all>')
						__all__.Functor = Functor;
						__all__.Matrix = Matrix;
						__all__.f = f;
						__all__.g = g;
						__all__.run = run;
					__pragma__ ('</all>')
				}
			}
		}
	);

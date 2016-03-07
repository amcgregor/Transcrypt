#!/usr/bin/env python3
# encoding: utf-8

import os
import sys
import codecs

try:
	from setuptools.core import setup, find_packages
except ImportError:
	from setuptools import setup, find_packages

from setuptools.command.test import test as TestCommand


if sys.version_info < (3, 5):
	raise SystemExit("Python 3.5 or later is required.")

exec(open(os.path.join("transcrypt", "release.py")).read())


class PyTest(TestCommand):
	def finalize_options(self):
		TestCommand.finalize_options(self)
		
		self.test_args = []
		self.test_suite = True
	
	def run_tests(self):
		import pytest
		sys.exit(pytest.main(self.test_args))


here = os.path.abspath(os.path.dirname(__file__))

py2 = sys.version_info < (3,)
py26 = sys.version_info < (2, 7)
py32 = sys.version_info > (3,) and sys.version_info < (3, 3)

tests_require = ['coverage', 'pytest', 'pytest-cov', 'pytest-spec', 'pytest-flakes']


# # Entry Point

setup(
	name = "transplit",
	version = version,
	
	description = description,
	long_description = codecs.open(os.path.join(here, 'README.rst'), 'r', 'utf8').read(),
	url = url,
	
	author = author.name,
	author_email = author.email,
	
	license = 'Apache 2.0',
	keywords = '',
	classifiers = [
			"Development Status :: 3 - Alpha",
			"Intended Audience :: Developers",
			"License :: Apache Software License",
			"Topic :: Software Development :: Compilers",
			"Topic :: Software Development :: Build Tools",
			"Topic :: Software Development :: Pre-processors",
			"Topic :: Software Development :: Libraries :: Python Modules",
			"Operating System :: OS Independent",
			"Programming Language :: Python :: 3.5",
			"Programming Language :: JavaScript",
		],
	
	packages = find_packages(exclude=['test', 'doc', 'example', 'benchmark']),
	include_package_data = True,
	package_data = {'': ['README.rst', 'LICENSE.txt']},
	namespace_packages = [],
	
	# ## Dependency Declaration
	
	install_requires = [
		],
	
	extras_require = dict(
			development = tests_require,
		),
	
	tests_require = tests_require,
	
	# ## Plugin Registration
	
	entry_points = {
			'console_scripts': [  # Command-line interface.
						'transplit = transplit.__main__:__main__'
					],
			'transplit.override': [  # Having these here allows for multiple packages to cooperate easily.
						'itertools = transplit.stdlib.itertools',
					],
			},
	
	zip_safe = False,
	cmdclass = dict(
			test = PyTest,
		)
)

# L-CLEAN

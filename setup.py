#!/usr/bin/env python3

import os
import sys

from transcrypt.modules.org.transcrypt import __base__

from setuptools import setup

def read(*paths):
	with open (os.path.join (*paths), 'r') as aFile:
		return aFile.read()

setup (
	name = 'Transcrypt',
	version = __base__.__envir__.transpilerVersion,
	description = 'Python to JavaScript transpiler, supporting multiple inheritance and generating lean, highly readable code',
	long_description = (
		read('README.rst') + '\n\n' +
		read('transcrypt', 'license_reference.txt')
	),
	keywords = ['python', 'javascript', 'transpiler', 'compiler', 'transcrypt'],
	url = 'http://www.transcrypt.org',	
	license = 'Apache 2.0',
	author = 'Jacques de Hooge',
	author_email = 'jacques.de.hooge@qquick.org',
	packages = ['transcrypt'],
	include_package_data = True,
	zip_safe = False,
	entry_points = {
		'console_scripts': ['transcrypt = transcrypt.__main__:__main__']
	},
	classifiers = [
		'Development Status :: 3 - Alpha',
		'Intended Audience :: Developers',
		'Natural Language :: English',
		'License :: Apache Software License',
		'Topic :: Software Development :: Compilers',
		'Topic :: Software Development :: Build Tools',
		'Topic :: Software Development :: Pre-processors',
		'Topic :: Software Development :: Libraries :: Python Modules',
		'Operating System :: OS Independent',
		'Programming Language :: Python :: 3.5',
		'Programming Language :: JavaScript'
	],
)

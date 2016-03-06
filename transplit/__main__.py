# ====== Legal notices
#
# Copyright 2014, 2015, 2016 Jacques de Hooge, GEATEC engineering, www.geatec.com
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# 	http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import os
import sys
import traceback
import pkg_resources


modulesDir = pkg_resources.resource_filename('transcrypt', 'modules')  # Maybe need .replace('\\', '/') for Windows ?

# Inject our custom heirarchy before other paths.
# Now loaded dynamically from wherever we happen to be installed.
# Import time side-effects are bad, but not sure how to avoid this.
sys.path.insert(0, modulesDir)


from org.transcrypt import __base__
from org.transcrypt import utils
from org.transcrypt import compiler


def __main__():
	# TODO: Avoid this, accept a base path on the CLI.
	programDir = os.getcwd().replace('\\', '/')
	
	utils.log(True,
			'{} (TM) Python to JavaScript Small Sane Subset Transpiler Version {}\n',
			__base__.__envir__.transpilerName.capitalize(),
			__base__.__envir__.transpilerVersion
		)
	utils.log(True, 'Copyright (C) Geatec Engineering. License: Apache 2.0\n\n')
		
	utils.commandArgs.parse()
		
	if utils.commandArgs.license:
		bar = 80 * '='
		utils.log (True, '\n{}\n\n', bar)
		utils.log (True, '{}\n', pkg_resources.resource_string('transcrypt', 'license_reference.txt').decode('utf8'))
		utils.log (True, '{}\n\n', bar)
			
	if not utils.commandArgs.source:
		exit (0)
			
	if utils.commandArgs.run:
		with open(utils.commandArgs.source) as sourceFile:
			exec(
				'import sys\n' +
				#'sys.path [0] = sys.path [1 : ]\n' +	# "import transcrypt" should refer to library rather than to this file
				#'sys.path.append (\'{}\')\n'.format (modulesDir) +
				sourceFile.read()
			)
		exit(0)
	
	try:
		compiler.Program([programDir, modulesDir])
	
	except utils.Error as error:
		utils.log(True, '\n{}\n', error)
		
		# Don't log anything else, even in verbose mode, since this would only be confusing
		if utils.debug:
			utils.log(True, '{}\n', traceback.format_exc())
	
	except Exception as exception:
		utils.log(True, '\n{}', exception)
		
		# Have to log something else, because a general exception isn't informative enough
		utils.log(False, '{}\n', traceback.format_exc())
	
	utils.log(True, 'Ready\n')


if __name__ == '__main__':
	__main__()

=========
transplit
=========

    © 2016 Alice Bevan-McGregor and contributors.
    © 2014-2016 Jacques de Hooge, GEATEC engineering, www.geatec.com

..

    https://github.com/marrow/transplit

..

    |latestversion| |ghtag| |downloads| |masterstatus| |mastercover| |masterreq| |ghwatch| |ghstar|



Introduction
============

Transplit is a transpiler, that is, a compiler that transforms Python code into JavaScript code.  It attempts to allow
you to write front-end JavaScript as clean Python code, supporting the following features:

* Native parsing of Python code.
* Use of the Python packaging and import systems for code discovery.  This includes support for namespaces!
* Seamless integration of third-party pure-JavaScript libraries.
* Direct relationship between Python source and generated JavaScript code.
* Classes supporting multiple inheritance.
* Descriptor protocol, thus properties and bound methods.
* Operator overloading.

Rationale and Goals
-------------------


Future Goals
------------

* .map file generation for improved diagnostic capability.


Installation
============

Installing ``transplit`` is easy, just execute the following in a terminal::

    pip install transplit

**Note:** We *strongly* recommend always using a container, virtualization, or sandboxing environment of some kind when
developing using Python; installing things system-wide is yucky (for a variety of reasons) nine times out of ten.  We
prefer light-weight `virtualenv <https://virtualenv.pypa.io/en/latest/virtualenv.html>`_, others prefer solutions as
robust as `Vagrant <http://www.vagrantup.com>`_.

If you add ``transplit`` to the ``install_requires`` argument of the call to ``setup()`` in your application's
``setup.py`` file, transplit will be automatically installed and made available when your own application or
library is installed.  We recommend using "less than" version numbers to ensure there are no unintentional
side-effects when updating.  Use ``transplit<1.1`` to get all bugfixes for the current release, and
``transplit<2.0`` to get bugfixes and feature updates while ensuring that large breaking changes are not installed.


Development Version
-------------------

    |developstatus| |developcover| |ghsince| |issuecount| |ghfork|

Development takes place on `GitHub <https://github.com/>`_ in the
`transplit <https://github.com/marrow/transplit/>`_ project.  Issue tracking, documentation, and downloads
are provided there.

Installing the current development version requires `Git <http://git-scm.com/>`_, a distributed source code management
system.  If you have Git you can run the following to download and *link* the development version into your Python
runtime::

    git clone https://github.com/marrow/transplit.git
    (cd transplit; python setup.py develop)

You can then upgrade to the latest version at any time::

    (cd transplit; git pull; python setup.py develop)

If you would like to make changes and contribute them back to the project, fork the GitHub project, make your changes,
and submit a pull request.  This process is beyond the scope of this documentation; for more information see
`GitHub's documentation <http://help.github.com/>`_.




Version History
===============

Version 1.0
-----------

* Initial release.


License
=======

Transplit has been released under the Apache License, version two.

The Apache 2 License
--------------------

Copyright © 2016 Alice Bevan-McGregor and contributors.

Copyright © 2014, 2015, 2016 Jacques de Hooge, GEATEC engineering, www.geatec.com

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

.. |ghwatch| image:: https://img.shields.io/github/watchers/marrow/transplit.svg?style=social&label=Watch
    :target: https://github.com/marrow/transplit/subscription
    :alt: Subscribe to project activity on Github.

.. |ghstar| image:: https://img.shields.io/github/stars/marrow/transplit.svg?style=social&label=Star
    :target: https://github.com/marrow/transplit/subscription
    :alt: Star this project on Github.

.. |ghfork| image:: https://img.shields.io/github/forks/marrow/transplit.svg?style=social&label=Fork
    :target: https://github.com/marrow/transplit/fork
    :alt: Fork this project on Github.

.. |masterstatus| image:: http://img.shields.io/travis/marrow/transplit/master.svg?style=flat
    :target: https://travis-ci.org/marrow/transplit/branches
    :alt: Release build status.

.. |mastercover| image:: http://img.shields.io/codecov/c/github/marrow/transplit/master.svg?style=flat
    :target: https://codecov.io/github/marrow/transplit?branch=master
    :alt: Release test coverage.

.. |masterreq| image:: https://img.shields.io/requires/github/marrow/transplit.svg
    :target: https://requires.io/github/marrow/transplit/requirements/?branch=master
    :alt: Status of release dependencies.

.. |developstatus| image:: http://img.shields.io/travis/marrow/transplit/develop.svg?style=flat
    :target: https://travis-ci.org/marrow/transplit/branches
    :alt: Development build status.

.. |developcover| image:: http://img.shields.io/codecov/c/github/marrow/transplit/develop.svg?style=flat
    :target: https://codecov.io/github/marrow/transplit?branch=develop
    :alt: Development test coverage.

.. |developreq| image:: https://img.shields.io/requires/github/marrow/transplit.svg
    :target: https://requires.io/github/marrow/transplit/requirements/?branch=develop
    :alt: Status of development dependencies.

.. |issuecount| image:: http://img.shields.io/github/issues-raw/marrow/transplit.svg?style=flat
    :target: https://github.com/marrow/transplit/issues
    :alt: Github Issues

.. |ghsince| image:: https://img.shields.io/github/commits-since/marrow/transplit/1.0.svg
    :target: https://github.com/marrow/transplit/commits/develop
    :alt: Changes since last release.

.. |ghtag| image:: https://img.shields.io/github/tag/marrow/transplit.svg
    :target: https://github.com/marrow/transplit/tree/1.0.0
    :alt: Latest Github tagged release.

.. |latestversion| image:: http://img.shields.io/pypi/v/transplit.svg?style=flat
    :target: https://pypi.python.org/pypi/transplit
    :alt: Latest released version.

.. |downloads| image:: http://img.shields.io/pypi/dw/transplit.svg?style=flat
    :target: https://pypi.python.org/pypi/transplit
    :alt: Downloads per week.

.. |cake| image:: http://img.shields.io/badge/cake-lie-1b87fb.svg?style=flat

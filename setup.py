try:
    from setuptools import setup, find_packages
except ImportError:
    from distutils.core import setup, find_packages

setup(
    name='checkoff',
    version='0.1',
    description='Checkoff',
    author='Brandon Konkle',
    author_email='brandon@lincolnloop.com',
    url='https://github.com/lincolnloop/checkoff',
    packages=find_packages(),
    scripts=['manage.py'],
    classifiers=(
        'Natural Language :: English',
        'License :: Other/Proprietary License',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2.7',
    ),
)

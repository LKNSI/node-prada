# Node PRADA

Implementation of the PRADA defence method for DNN’s in Node.js.

Ported from Python, by the [Secure Systems Group (SSG)](https://ssg.aalto.fi/) at Aalto University.


## What is PRADA?

[PRADA](https://arxiv.org/pdf/1805.02628.pdf) is a method to prevent model extraction attacks. It's primary purpose is to detect when abuse of commercialised predictive MLaaS is occurring by systematically evaluating incomming requests for their fit inside of a threat model that closely matches methods employed in extraction attacks.

## How effective is this method?

It is **highly recommended** you read the entrity of the mentioned paper above to understand what the end result may look like from employing this method. In short, PRADA can be evaded, but doing so can seriously degrade the resulting model. The resolution to this problem is that stolen reproductions can often be inferior.

## Implementation

This implementation is done through ES6 Classes. This may be either the easiest for you to implement, or may leave you in distress with performance depending on incalculable variables in your own setup. It is easy to extract the sentiment from what the code is attempting to do if you wish to include this in a more streamlined format.

## Dependencies

To install this package, you will need a fork of numjs from [here](https://github.com/LKNSI/numjs). The original numjs package suffers from infrequent to mildly annoying dependencies issues due to their insistence (a silent one) on including sharp in their package, and failing to ensure it is kept up to date. The forked package removes it.

- numjs => https://github.com/LKNSI/numjs
- scipy => https://www.npmjs.com/package/scipy

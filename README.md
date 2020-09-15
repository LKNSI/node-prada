# Node PRADA

Implementation of the PRADA defence method for DNN’s in Node.js.

Ported from Python, by the [Secure Systems Group (SSG)](https://ssg.aalto.fi/) at Aalto University.


## What is PRADA?

[PRADA](https://arxiv.org/pdf/1805.02628.pdf) is a method to prevent model extraction attacks. It's primary purpose is to detect when abuse of commercialised predictive MLaaS is occurring by systematically evaluating incomming requests for their fit inside of a threat model that closely matches methods employed in extraction attacks.

## How effective is this method?

It is **highly recommended** you read the entrity of the mentioned paper above to understand what the end result may look like from employing this method. In short, PRADA can be evaded, but doing can seriously degrade the resulting model. The resolution to this problem is that stolen repoductions can often be inferior.

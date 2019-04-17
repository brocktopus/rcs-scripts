# _Rhetorical Code Studies_: The Practice Scripts

This repository contains a copy of the sixteen practice scripts originally printed in Ch. 5 of [_Rhetorical Code Studies: Discovering Arguments in and around Code_](https://www.press.umich.edu/10019291/rhetorical_code_studies), updated here with some minor corrections/clarifications to several scripts as well as a clear indication of the source for the sandbox console used in the online version of the book.

In addition, in the near future I plan to expand the number and scope of these scripts to demonstrate more rhetorical concerns relating to code that writing scholars may be interested in exploring and experimenting with.

## Clarifications / Corrigenda

Some readers of _Rhetorical Code Studies_ may notice that a few of the practice scripts seem slightly "off" when it comes to what the scripts explicitly outline and how they are expected to operate when run through a JavaScript interpreter. Specifically, scripts 5.8, 5.9, and 5.11 each implicily assume the declaration/initialization of a variable <code>output</code> rather than explicitly include it (something the other scripts using the variable do).

Because of how the Open Exchange Rates [JavaScript sandbox console](https://openexchangerates.github.io/javascript-sandbox-console/) environments are set up in the online version of the book, this might be otherwise overlooked; when the page for the chapter is loaded in the browser, each console has an <code>output</code> variable declared as part of its own initialization.

There _is_ a reason why those three scripts lack the explicit declaration of the variable, and it mostly has to do with some inaccurate interpreter/emulator anticipations on my part while writing the manuscript initially and then attempting to adjust the code's functionality during conversations with the press about what might (or might not) be possible or feasible for the book's online publication.

What ended up happening, then, was a series of revisions that moved from output options from <code>console.log()</code> to custom <code>println</code>-esque functions to <code>window.alert()</code> to the output response provided by the specific sandbox console employed for the online version of the book. In the course of these and other revisions to the book--and to my embarrassment--I overlooked the <code>output</code> initialization line for these scripts during my testing. 

A similar explanation exists for 5.13, as it includes the calling of a function that never happens, thanks to the preceding line's <code>return</code> operation. This issue is easily remedied by attaching that line to the end of the <code>return</code> operation (originally, like the others, a set of <code>console.log()</code> messages).

As a result of the attempt to anticipate how the console environment would/could end up working, these scripts each possess a hiccup. In a way, this might be the most (inadvertently) authentic demonstration of the nature of coding as a frequently messy form of composing, with code review confirmed as a very useful and important form of peer review.

You might decide that these issues fundamentally compromise my overall argument. However, I hope you'll find that the claims I make about code and its rhetorical dimensions remain valid and worthy of further scholarly investigation.

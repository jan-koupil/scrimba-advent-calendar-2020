# The Scrimba JavaScriptmas calendar
Once upon a time, there was an [Advent calendar published by Scrimba](https://scrimba.com/learn/adventcalendar/). 

First promising interesting challenges, it started to repetitive a bit, but finally, it showed up to be an interesting material to study.

Let's list those challenges and add some detail to them.

## A humble warning
*This text contains some performance tests. These are very simple synthetic tests on unnaturally many iterations or insanely long inputs and can differ from real-life usage. All the tests can be checked at https://github.com/jan-koupil/scrimba-advent-calendar-2020*


## [Challenge 1: 🍬 Intro](https://scrimba.com/scrim/cob9641788b7a3e77490f4251)

This is a one-liner, really an intro.

## [Challenge 2: ⭐ Deposit - profit](https://scrimba.com/scrim/co31344d390bfe52d8f8465c6)

A simple challenge, probably intended to be solved by using a while loop, linear in time. However, a constant-time solution should be always preferred and since this is a simple geometric series, let's make it a one-line calculation again.

## [Challenge 3: 🧚 Chunky Monkey ](https://scrimba.com/scrim/co62443f1997eb196060e9685)

Now we are getting somewhere. Not that it is a complicated problem. But it also isn't a one-line calculation and we can try to measure performance. 

The correct code might look like this:
```
const result = [];
for (let i = 0; i < values.length; i += size) {
    result.push(values.slice (i, i + size ));
}
return result;
```
However, what if pushing behind a long array is a time-consuming operation? Wouldn't it be better to simply know the index and store to this specific index?

```
const result = [];
for (let i = 0, j = 0; i < values.length; i += size, j++) {
    result[j]= values.slice (i, i + size );
}
return result;
```
Surprisingly, measurement using the [performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance) shows, that in both Chrome and Firefox

* for small input arrays (< 1000 elements) the former variant is slower, however, both have times so short, it does not make an observable difference

* for large input arrays ( > 10000 elements), the times are also comparable but the latter syntax is ca. 10-20% slower. 

This is probably due to complicated arithmetics of flat and scarce arrays and means (what is a generally known fact) that in JavaScript(!) `array.push` is the preferred method of adding to an array.

## [Challenge 4: 🎄 Century From Year](https://scrimba.com/scrim/co0dc42e487b6297f06d4ca3a)

Another one-line calculation.

## [Challenge 5: 🐑 Reverse a String](https://scrimba.com/scrim/co460458289fdc20f19390c00)

A one-liner again. Or not? Compare

```
const reverseAString = (str) => str.split("").reverse().join("");
```
and

```
function reverseAString(str) {
    let out = "";
    for (let i = str.length - 1; i >= 0; i--)
        out += str[i];
    return out
}
```
While the first is short and elegant, shouldn't the verbose second be quicker? We are not creating a temporary array etc.?

The results differ in major browsers for short input strings:

|chars|method|Chrome|Firefox|
|--- |--- |--- |--- |
|150|split&join|0.60 ms|0.10 ms|
|150|traversing|0.18 ms|0.16 ms|
|15,000|split&join|0.70 ms|0.62 ms|
|15,000|traversing|2.40 ms|1.30 ms|

It seems that a known size of the array is prefereable to the single traversing through the string, at least for larger inputs, where the effect is measurable.

## [Challenge 6: 🤶 Sort by Length](https://scrimba.com/scrim/coaf14cdb814ee919c9861384)

A one-line solution using the native sort function designed to sort integers. In my solution there is an "unnecessary step" - you might notice the `[...strs]` at the beginning. In a real-world calling sort on the original array would sort it which might be an unexpected surprise in other parts of code. This way, we make a copy and work on that.

## [Challenge 7: 🦌 Count Vowel Consonant](https://scrimba.com/scrim/co6a94430bcc82803bc0bb306)

This is a nice use of an [`Array.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

Even though this solution can be rewritten as a one-liner, I prefer not to. The legibility would be reduced greatly and no measurable performance or memory reduction can be gained out of it.

*But wait - what about the method of vowel detection?*

Let's propose four (out of infinity) methods:

1. The *if* method
```
const letterValue = x => {
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
        return 1;
    else
        return 2;
}
```
2. The *switch* method
```
const letterValue = x => {
    switch(x) {
        case 'a':
        case 'e':
        case 'i':
        case 'o': 
        case 'u':
            return 1;
        default:
            return 2;
    }
}
```
3. The *Array.includes* method
```
const vowels = ['a', 'e', 'i', 'o', 'u'];
const letterValue = x => vowels.includes(x) ? 1 : 2;
```

4. The *Set.has* method
```
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
const letterValue = x => vowels.has(x) ? 1 : 2;        
```

Is any of them better? The difference is (surprisingly for someone like me with mostly PHP experience) almost negligible in Chrome. A synthetic test on a 10M chars long string shows that the *if* and *case* are equal, and the *in-array* and *Set.has* ar equal as well with the first group being faster by some 10%.

In Firefox, the simplistic approaches win significantly with *case* leading.

|#|Chrome|Firefox|
|--- |--- |--- |
|if|349 ms|241ms|
|case|347 ms|115 ms|
|Array.includes|387 ms|450 ms|
|Set.has|382 ms|497 ms|

If the world was composed out of Chrome only, I would prefer the *Set.has* approach because of its semantic clearness. This is one of the things for which the [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) has been designed. But now? Decide for yourself.

## [Challenge 8: 🔔 The Rolling Dice](https://scrimba.com/scrim/co12c41419ae303e77827f312)
I really enjoyed this one. A nice use for a [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). My `Dice` class simply creates all dots at specific places (given by relative coordinates <-1 to 1>) and at a `showFace()` command simply hides all and then displays the appropriate ones.

When loaded, Scrimba sometimes shows an error I don't understand and probably has something to do with the way of loading code in Scrimba. Simple click the "Go to index" link fixes it.

## [Challenge 9: 🎺 Sum Odd Fibonacci Numbers](https://scrimba.com/scrim/cob604d489f7d1a51fd3c7cd9)
What for a set of coding challenges would it be if  some form of Fibonacci numbers weren't included! But then, they're just Fibonacci numbers, nothing more, nothing less.

## [Challenge 10:💂‍♀️ Adjacent Elements Product](https://scrimba.com/scrim/cof504fec874bc4d674847372)
Another example of array reduction. Or maybe a simple traversing through array? Could we compare those?

|#|Chrome|Firefox|
|--- |--- |--- |
|reducer|103 ms|25 ms|
|traversing|16 ms|12 ms|

Data on a random array with 10M numbers show a great performance difference between Chrome and Firefox. In both cases, the inelegant way of array traversing shows its strength. The reason is that we are not creating a new iterable which would be time-consuming.

## [Challenge 11:🎁 Avoid Obstacles](https://scrimba.com/scrim/co019409091ff04bcfd47f1db)
I really liked this challenge, just because I found it innovative compared to others. If you can make it a one-liner, write to me, I did not.

## [Challenge 12:❄️ Valid Time](https://scrimba.com/scrim/cob0e47f2a80d9a40e9ef37eb)
The first challenge with reasonable use of regular expressions. They are not a single solution, not the fastest solution, but they are elegant - and also, the efficiency might differ, depending on how strict is the input string since this challenge setup is rather vague.

## [Challenge 13:🤴 Extract Each Kth](https://scrimba.com/scrim/cobb4426e97771586e9309119)
A typical array-filtering setup. A decent one.

## [Challenge 14:🧸 Maximal Adjacent Difference](https://scrimba.com/scrim/co339406295bbfe115f86f172)
This challenge is very similar to challenge 10, just with a simple change of reducing functions. 

## [Challenge 15:🕊 Carousel](https://scrimba.com/scrim/co9ec44648fde63c8f304ac45)
**My top challenge**, by far. I did not compare efficiency and performance today, I was looking for a way how to solve the problem with minimum CSS properties and values in JS code. I hate those px and rem units hidden between apostrophes, commas, and parentheses. These should be avoided wherever possible.

I really like [my solution](https://scrimba.com/scrim/co9ec44648fde63c8f304ac45) using **css custom properties**. As a bonus, I added navigation button disabling and decent transition effects at hovering over them.

## [Challenge 16:🧦 Insert Dashes](https://scrimba.com/scrim/co2f64c249c48b125731d0a90)
This was an excellent opportunity to revise look-ahead in RegEx. They're so cool and they make you look like a pro. The perfomance tests on 1M chars string, however, show…

|#|Chrome|Firefox|
|--- |--- |--- |
|regex|109 ms|147 ms|
|split & join|65 ms|21 ms|

…that if performance matters, regex should be avoided. As always, no surprise.

## [Challenge 17:👑 Different Symbols Naive](https://scrimba.com/scrim/co33e439eb07d95824710dd12)
This is a typical use-case for the JavaScript [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) class. Let's have a look at how it will perform.

|#|Chrome|Firefox|
|--- |--- |--- |
|Set|37 ms|68 ms|
|Array includes|65 ms|67 ms|

So, in Firefox, the difference is below the measurement variation, in Chrome, using the modern and clean `Set` wins by far.

## [Challenge 18: 🎅🏻 Array Previous Less](https://scrimba.com/scrim/co5be4a418c93ca448480286b)

I had a hard time reading and understanding this challenge. When finally done, I see that my solution is verbose but quite long. Maybe there is a more elegant way?

On the other hand, when I checked around after, I saw that more than **75% of other people's solutions are absolutely wrong**, passing only the very simple default test. So many people were checking only the first previous index instead of all preceding positions. An improvement in automated testing would be needed, starting with `testArray = [3, 5, 2, 4, 3]`.

## [Challenge 19: 🐫 Alphabet Subsequence](https://scrimba.com/scrim/co0074ac49ffa6c32a2ea0b02)
A nice algorithmic exercise. It can be turned forcefully into a one-liner, but the operations of splitting into an array and checking each neighbour are probably too time-costly that they do not compensate the (doubtful) elegance of a one-line solution (at least the solution of mine).

The tests on 1M cycles of a string:

|#|Chrome|Firefox|
|--- |--- |--- |
|String traversing|64 ms|69 ms|
|One-line|229 ms|298 ms|

## [Challenge 20:✨ Domain Type](https://scrimba.com/scrim/co2b64f5c99e63bce29cc6285)

Despite the - previously proved - efficiency of a simple if-else or switch-case structure, I would definitely recommend the use of a JavaScript [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) (some of us call it a dictionary). This is a typical use case for a map. Also, if the domain-type data came from a database of file storage, the hard-coded ifs and switches wouldn't be an option.

## [Challenge 21: 🦃 Sum of Two](https://scrimba.com/scrim/co06b4bdd93064b651e91da08)
This is a hidden gem. The basic idea is to traverse one array and then check for expected value in the other, ie. traverse it as well. It does not matter much, whether you use `Array.some` like I did, create mapping object like the tutor, use the native `Map` class or whatever, the traversing is there.

However, what if the input arrays were huge? Then we could spare some time on sorting the second array and implement binary of even tangential search there. In my test, you can try playing with the numbers, however, the binary search produces one half or one third time (in average) on arrays of length 1000. Sometimes, of course, the expected value is there at the beginning and the time for sorting array is lost - the benefit is there only for many repeated searches.

## [Challenge 22: 👼 Extract Matrix Column](https://scrimba.com/scrim/co50f4ec5a3c899cd99d0f0aa)
If we could extract only one number - the one sitting at the given index - from each of the inner arrays contained in the outer array, we would have won…

…and that's exactly what an [`Array.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) could do for us.

## [Challenge 23: 🌠 Social Media Input](https://scrimba.com/scrim/co4f54052b28c9320e9c15298)
Putting a Twitter form alive was one of those four html-css-js challenges hidden among the pure JS tasks. I found two unanswered mysteries here

* Why is the `keydown` event recommended instead of the natural `keyup`?
* Why use a button instead of either anchor or a form?

Nevertheless, the challenge is solved.

## [Challenge 24: ? Test Your Agility](https://scrimba.com/scrim/co33449909752befc0451be52)
The final one is again a frontend challenge. It was interesting for me to see, how other people write asynchronous functions and what their coding style is.

## *An afterword*
*While writing this, I decided to check other's solutions to some of the challenges, just to see if I hadn't missed some interesting solutions. I was surprised, how many of the solutions were wrong and passing only the one very test provided by Scrimba but failing e.g. on a longer or differently sorted input array.*

*I really enjoyed the idea of the calendar, however, a more thorough testing would definitely be beneficial if the event should repeat in the future.*
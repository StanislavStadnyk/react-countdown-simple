# React &lt;Countdown /&gt;
A simple customizable countdown component for React.

### Small bundle size

<table>
    <tr>
        <th colspan="2">BUNDLE SIZE</th>
    </tr>
    <tr>
        <td align='center'><b>305</b> B</td>
        <td align='center'><b>171</b> B</td>
    </tr>
    <tr>
        <td><em>MINIFIED</em></td>
        <td><em>MINIFIED + GZIPPED</em></td>
    </tr>
</table>

Check here - https://bundlephobia.com/package/react-countdown-simple@1.0.14

* [Getting Started](#getting-started)
* [Examples](#examples)
* [Props](#props)

## Getting Started

You can install the module via `npm` or `yarn`:

```sh
npm install react-countdown-simple --save
```

```sh
yarn add react-countdown-simple
```

## Examples

Here are some examples which you can try directly online. 

### Basic Usage
A very simple and minimal example of how to set up a countdown that counts down from 1 hour.
```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import Countdown from 'react-countdown-simple';

const oneHour = new Date(
  new Date().setHours(new Date().getHours() + 1)
).toISOString()

createRoot(document.getElementById('root')).render(
  <Countdown targetDate={oneHour} />
);
```
[Live Demo](https://codesandbox.io/s/react-countdown-simple-example-bh2m0x)

### Custom renderer
```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import Countdown from 'react-countdown-simple';

const oneHour = new Date(
  new Date().setHours(new Date().getHours() + 1)
).toISOString()

const renderer = ({ days, hours, minutes, seconds }) =>
  <div>{days}/{hours}/{minutes}/{seconds}</div>

createRoot(document.getElementById('root')).render(
  <Countdown targetDate={oneHour} renderer={renderer} />
);
```
[Live Demo](https://codesandbox.io/s/react-countdown-simple-example-bh2m0x)

## Props

|Name|Type|Default|Description|
|:--|:--:|:-----:|:----------|
|**targetDate**|`string \| number \| Date`|`required`|Target time in the future as ISO string, timestamp, or `Date` instance|
|**disableTypes**|`boolean`|`false`|Hide the trailing unit labels (D, H, M, S)|
|**formatType**|<code>"d_h_m_s" &#124; "D_H_M_S" &#124; "dd_hh_mm_ss" &#124; "DD_HH_MM_SS" &#124; undefined</code>|`"D_H_M_S"`|Predefined formats for labels and zero-padding|
|**renderer**|`function`|`undefined`|Custom renderer callback receiving `{ days, hours, minutes, seconds }`|

If `targetDate` cannot be parsed as a valid date, it is treated as "now" and the countdown renders `00 00 00 00`.
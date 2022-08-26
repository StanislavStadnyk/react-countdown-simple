# React &lt;Countdown /&gt;
A simple customizable countdown component for React.

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
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-simple';

const oneHour = new Date(
  new Date().setHours(new Date().getHours() + 1)
).toISOString()

ReactDOM.render(
  <Countdown targetDate={oneHour} />,
  document.getElementById('root')
);
```
[Live Demo](https://codesandbox.io/s/react-countdown-simple-example-bh2m0x)

### Custom renderer
```js
import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-simple';

const oneHour = new Date(
  new Date().setHours(new Date().getHours() + 1)
).toISOString()

const renderer = ({ days, hours, minutes, seconds }) =>
  <div>{days}/{hours}/{minutes}/{seconds}</div>

ReactDOM.render(
  <Countdown targetDate={oneHour} renderer={renderer}/>,
  document.getElementById('root')
);
```
[Live Demo](https://codesandbox.io/s/react-countdown-simple-example-bh2m0x)

## Props

|Name|Type|Default|Description|
|:--|:--:|:-----:|:----------|
|**targetDate**|`string`|`required`|Timestamp in the future|
|**disableTypes**|`boolean`|`false`|Hide formats|
|**formatType**|<code>"d_h_m_s" &#124; "D_H_M_S" &#124; "dd_hh_mm_ss" &#124; "DD_HH_MM_SS" &#124; undefined</code>|`"D_H_M_S"`|Predefined formats|
|**renderer**|`function`|`undefined`|Custom renderer callback|
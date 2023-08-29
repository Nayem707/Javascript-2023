## ডটা Type of Number ( নাম্বার )

#### Number Methods

##### <li>toString

##### <li>toFixed

##### <li>toPrecision

##### <li>parseInt

##### <li>parseFloat

#### 2. “toFixed” কী, ও কেনো, কোথায় ব্যবহার করা হয়?

<img src="./স্ট্রিং.png" alt="tostring">

<p> এটি মূলত যে কোনো দশমিক নাম্বার এর .1235 পরের দশমিক সংখ্যা গুলোকে স্ট্রিং আকারে রিটার্ন করে । এটি জাভাস্ক্রিপ্ট এর বিল্ট-ইন মেথডস।

##### উধহারণ:- 1

```js
const x = 9.12345;

const result = x.toFixed(2);

console.log(result);
//Output: 9.12 typeof: string
//Expected output: 9.12
```

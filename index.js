const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math has its Symbol.toStringTag
toString.call(Math); // [object Math]

const result = toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]

console.log(result);

<h1>1. What is the difference between getElementById, 
getElementsByClassName, and querySelector / querySelectorAll?</h1>
<ul>
<h2>উত্তর:</h2>
 <li>getElementById হলো: একটি একক Element <br>
 অর্থাৎ নির্দিষ্ট আইডির মাধ্যমে একটি এলিমেন্ট কে খুঁজে বের করা আর <br>
 একটি পেজে আইডি শুধুমাত্র একটি হয় যা ইউনিক সুতরাং ইউনিক আইডির <br>
 মাধ্যমে একটি এলিমেন্ট কে খুঁজে বের করা।</li>

 <li>getElementsByClassName হলো: একটি class নাম দিয়ে ওই class নাম এর <br>
 সব element কে বের করা। অর্থাৎ একটি ক্লাস নাম দিয়ে অনেক ইলিমেন্টকে ধরা। <br>
 আর যা সরাসরি Html collection দেই।</li>

 <li>querySelector হলো: css এর মত কাজ করে এটা দিয়ে প্রথম Element পাওয়া যায়।<br>
 অর্থাৎ querySelector চালালে সে প্রথম যার সাথে matching হয় তাকেই দিয়ে দেয়। </li>

 <li>querySelectorAll হলো: css selector এর এবং ক্লাসের মত অনেক Element কে <br>
 ধরা যায় আর যার উপরে for চালানো যায় । আর NodeList দেয় যত Element এর সাথে ম্যাচ হয়।</li> 
 </ul>

<hr>

<h1>2. How do you create and insert a new element into the DOM?</h1>
<ul>
 <h2>উত্তর:</h2>
 <li>DOM এ  আমরা একটি new element তৈরী করার জন্য ৩টি কাজ করি।</li>
    <li>1. createElement(); করি example: [h1 or p or div or section etc]<br>
    const h1 = document.createElement('h1') </li>
    <li>2. h1.innerText = 'This is a heading'; or h1.innerHTML করি।</li>
    <li>3. append করে দেই  যা আমরা  output দেখতে পাই।</li>
</ul>
<hr>
<h1>3. What is Event Bubbling? And how does it work?</h1>
<ul>
 <h2>উত্তর: </h2>
 <li>Event Bubbling এর কাজ হলো উপরে ওঠা যেমন: পানির নিচ <br>
 থেকে বুদ বুদ ওঠার মত। অর্থাৎ আমি div এর মাঝে একটি span or <br>
 button Event করলাম মানে click করলাম তখন এটা span or <br>
 button এর মাঝে তো click হয়ই এবং সেটা তার parent div এর কাছেও যায় <br>
 এবং এরপর তার parent এরপর তার parent এভাবে body তে যা মোট কথা <br>
 ওপরে যেতে থাকে Bubbling হয়ে। </li>
</ul>

<hr>
<h1>4. What is Event Delegation in JavaScript? Why is it useful?</h1>
<ul>
 <h2>উত্তর:</h2>
 <li>Event Delegation এটা হলো Bubbling এর বড় ভাই। এটা দিয়ে আমরা আমাদের <br>
 কাজকে সহজ করতে পারি। যেমন 1000 বা ১০০টি বাটন এর কাজ ১০০বাটন না লিখে <br>
 Event Delegation দিয়ে করতে পারি।  যা মেমোরি ও সময় এবং ডায়নামিক ভাবে আমাদের কাজে আসে।</li>
</ul>

<hr>
<h1>5. What is the difference between preventDefault() and stopPropagation() methods?</h1>
<ul>
<h2>উত্তর:</h2> 
 <li>preventDefault() এটার কাজ হলো:<br>
 আমরা ব্রাউজারের ডিফল্ট কাজ বন্ধ করতে পারি । যেমন: a  tag এ ক্লিক করলে <br>
 সে কোথায় যায় বা ব্রাউজার রিলোড হয় এটা preventDefault() এর মাধ্যমে বন্ধ করা যায়।</li>
 <li>stopPropagation() দিয়ে  Event Bubbling ভাইয়ের বুদ বুদ ওঠা বা parent যাওয়ার 
 কাজটি বন্ধ করতে পারি। </li>
 </ul>